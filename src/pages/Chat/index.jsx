import ChatBox from "~/components/ChatBox/index.jsx";
import {selectSidebarPosition} from "~/features/toggleSidebar/index.js";
import {useSelector} from "react-redux";
import {useAuthorizeUser} from "~/hooks/authorizeUser.jsx";
import {getAccessToken, getRefreshToken} from "~/service/accountService.js";
import * as Stomp from "@stomp/stompjs";
import {BROKER_URL} from "~/app/constants.js";
import ChatSidebar from "~/layouts/commons/Sidebar/ChatSidebar/index.jsx";
import {useMemo, useState} from "react";

// eslint-disable-next-line react/prop-types
function Chat() {
    const accessToken = getRefreshToken()
    const position = useSelector(selectSidebarPosition)
    const [messages, setMessages] = useState([])
    // const [chatClient, setChatClient]=useState(null)
    useAuthorizeUser()

    const CHAT_CLIENT =useMemo(()=> new Stomp.Client({
        brokerURL: BROKER_URL,
        connectHeaders: {
            Authorization: 'Bearer ' + accessToken
        }
    }),[])
    CHAT_CLIENT.activate()
    CHAT_CLIENT.onConnect = (frame) => {
        const url = CHAT_CLIENT.webSocket;
        console.log(url)
        console.log('Connected: ' + frame);
        CHAT_CLIENT.subscribe('/users/queue/messages', (message) => {
                console.log('received: ' + message.body);
                const messageContent = JSON.parse(message.body);
                setMessages(prevState => [...prevState, messageContent]);
            }
        );
    }
    CHAT_CLIENT.onWebSocketError = (error) => {
        console.error('Error with websocket', error);
    }
    CHAT_CLIENT.onStompError = (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
    }

    const memoMessages = useMemo(() => messages,[messages])
    return (
        <>
            <ChatSidebar/>
            <div className={'main-content ' + (position ? 'chat-menu-active' : 'chat-menu')}>
                <div className="middle-sidebar-bottom d-flex pt-0 mt-3">
                    <div className="middle-sidebar-left ms-0 ps-0 pe-0 me-0 d-flex justify-content-center"
                         style={{maxWidth: '100%'}}>
                        <div className="container ms-2 mb-0 pb-0 me-1" style={{maxWidth: '96%'}}>

                            <ChatBox CHAT_CLIENT={CHAT_CLIENT} messages={memoMessages}/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat