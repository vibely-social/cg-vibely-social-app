import "bootstrap/dist/js/bootstrap.min"
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import {useStompWsClient} from "~/components/HOC_SocketClient/index.jsx";
import {useEffect, useRef} from "react";
import {addNewMessage, addUnreadMessage} from "~/features/messeger/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {Toast} from "primereact/toast";
import {setTypingStatus} from "~/features/typing_status/index.jsx";
import {selectUserData} from "~/features/user_account/index.js";
import {getFriends, selectFriendList} from "~/features/get_friends/index.jsx";
import {addNotify} from "~/features/notification/index.jsx";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import {getRequestFriends} from "~/features/request_friends/index.jsx";
import {selectBottomChatStatus, setBtChatActive} from "~/features/bottom_chat/index.jsx";
import {switchConversationTo} from "~/features/switch_conversation/index.js";
import {getStoredUserData} from "~/service/accountService.js";

function App() {
    const dispatch = useDispatch()
    const socketClient = useStompWsClient()
    const user = useSelector(selectUserData)
    const btChatStatus = useSelector(selectBottomChatStatus)
    const friends = useSelector(selectFriendList)
    const toastBottomRight = useRef(null);
    const notifySound = useRef()

    TimeAgo.addLocale(en)

    useEffect(() => {
        if (!Notification) {
            console.log('Desktop notifications not available in your browser. Try Chromium.');
            return;
        }
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then(() => {
                // new Notification('Vibely', {
                //     icon: "src/assets/img/logo.svg",
                //     body: "Hey there! Welcome to Vibely Social!",
                // });
            });
        }
    })

    useEffect(() => {
        if (friends && friends.length === 0) {
            dispatch(getFriends(getStoredUserData().id))
        }
    },[user])

    const handleNewMessage = (message) => {
        dispatch(addUnreadMessage(message))
        dispatch(addNewMessage(message))
        if (!btChatStatus) {
            friends.forEach(friend => {
                if (friend.email === message.sender) {
                    dispatch(switchConversationTo(friend))
                    dispatch(setBtChatActive())
                }
            })
        }
    }

    useEffect(() => {
        socketClient.onConnect = (frame) => {
            console.log(frame)
            socketClient.subscribe('/users/queue/messages', (message) => {
                const messageContent = JSON.parse(message.body);
                if (!messageContent.isStatusType) {
                    handleNewMessage(messageContent)
                } else {
                    dispatch(setTypingStatus({
                        user: messageContent.sender,
                        typingStatus: messageContent.typingStatus
                    }))
                }
            })
            socketClient.subscribe('/users/queue/notify', (message) => {
                notifySound.current.play()
                const notify = JSON.parse(message.body);
                dispatch(addNotify(notify))
                dispatch(getFriends(user.id))
                dispatch(getRequestFriends())
                new Notification('Vibely', {
                    icon: notify.avatarUrl,
                    body: notify.content,
                });
                // showMessage(messageContent,toastBottomRight, 'success')
            })
        }
        socketClient.onStompError = (frame) => {
            console.error('Broker reported error: ' + frame.headers['message']);
            console.error('Additional details: ' + frame.body);
        }
        socketClient.onWebSocketError = (error) => {
            console.error('Error with websocket', error);
        }
        socketClient.onDisconnect = () => {
            console.log('Disconnected!')
        }
    }, [user])


    // const showMessage = (content, ref, severity) => {
    //     const label = 'You have new message:'
    //
    //     ref.current.show({severity: severity, summary: content, detail: label, life: 3000});
    // };

    return (
        <>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
            <Toast ref={toastBottomRight} position="bottom-right"/>
            <audio
                src="https://firebasestorage.googleapis.com/v0/b/vibely-social.appspot.com/o/the-notification-email.mp3?alt=media"
                ref={notifySound}></audio>
        </>
    )
}

export default App
