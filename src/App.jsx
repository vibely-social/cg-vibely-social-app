import "bootstrap/dist/js/bootstrap.min"
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './Routes/AppRoutes'
import {useStompWsClient} from "~/components/HOC_SocketClient/index.jsx";
import {useEffect, useRef} from "react";
import {addNewMessage, addUnreadMessage} from "~/features/messeger/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getAccessToken} from "~/service/accountService.js";
import {Toast} from "primereact/toast";
import {setTypingStatus} from "~/features/typingStatus/index.jsx";
import {selectUserData} from "~/features/userAccount/index.js";

function App() {
    const dispatch = useDispatch()
    const SocketClient = useStompWsClient()
    const accessToken = getAccessToken()
    const user = useSelector(selectUserData)
    const toastBottomRight = useRef(null);


    useEffect(() => {
        if (!Notification) {
            console.log('Desktop notifications not available in your browser. Try Chromium.');
            return;
        }
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then(permission => {
                const notify = new Notification('Vibely', {
                    icon: "src/assets/img/logo.svg",
                    body: "Hey there! Welcome to Vibely Social!",
                });
            });
        }
    })


    useEffect(() => {
        SocketClient.connectHeaders = {
            Authorization: 'Bearer ' + accessToken
        }
        SocketClient.onConnect = (frame) => {
            console.log(frame)
            SocketClient.subscribe('/users/queue/messages', (message) => {
                const messageContent = JSON.parse(message.body);
                // Feature is in development
                // if (messageContent && messageContent.sender !== user.email) {
                //     // const notify = new Notification(messageContent.senderName, {
                //     //     icon: "src/assets/img/logo.svg",
                //     //     body: messageContent.content,
                //     // });
                //
                //     if (messageContent.isStatusType) {
                //         dispatch(setTypingStatus({
                //             user: messageContent.email,
                //             typingStatus: messageContent.typingStatus
                //         }))
                //     }
                // }
                if (!messageContent.isStatusType) {
                    dispatch(addUnreadMessage(messageContent))
                    dispatch(addNewMessage(messageContent))
                }else {
                    dispatch(setTypingStatus({
                        user: messageContent.sender,
                        typingStatus: messageContent.typingStatus
                    }))
                }
            })
            SocketClient.subscribe('/users/queue/notify', (message) => {
                //Feature is in development
                const notify = message.body;
                console.log(notify)
                // showMessage(messageContent,toastBottomRight, 'success')
            })
        }
        SocketClient.onStompError = (frame) => {
            console.error('Broker reported error: ' + frame.headers['message']);
            console.error('Additional details: ' + frame.body);
        }
        SocketClient.onWebSocketError = (error) => {
            console.error('Error with websocket', error);
        }
        SocketClient.onDisconnect = () => {
            console.log('Disconnected!')
        }

        if (accessToken){
            if (!SocketClient.connected) {
                SocketClient.activate()
                console.log('activated')
            }
        }
    }, [user])

    const showMessage = (content, ref, severity) => {
        const label = 'You have new message:'

        ref.current.show({severity: severity, summary: content, detail: label, life: 3000});
    };

    return (
        <>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
            <Toast ref={toastBottomRight} position="bottom-right"/>
        </>
    )
}

export default App
