import Message from "~/components/Message/index.jsx";
import {useEffect, useRef, useState} from "react";
import {STOMP_CLIENT} from "~/app/constants/appConstants.js";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {useSelector} from "react-redux";
import {selectUserData} from "~/store/slices/userAccount/index.js";

const oldMessages = [
    {
        name: 'Another Chung',
        time: '11:48 am',
        content: 'Hê lô, hao are dú 😃',
        check: false,
        income: true
    },
    {
        name: 'Chung Nguyen',
        time: '11:48 am',
        content: 'Hê lô, hao are dú 😃',
        check: false,
        income: false
    },
    {
        name: 'Another Chung',
        time: '11:48 am',
        content: 'Hê lô, hao are dú 😃',
        check: false,
        income: true
    },
    {
        name: 'Chung Nguyen',
        time: '11:48 am',
        content: 'Am phai then kìu èn dú 😃',
        check: false
    },
]

function ChatBox({contactEmail}) {
    const [connected, setConnected] = useState(false)
    const [emojiVisible, setEmojiVisible] = useState(false)
    const chatInput = useRef();
    const chatBox = useRef();
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([])
    const channel = 1235;
    const user = useSelector(selectUserData)
    const userEmail = user ? user.email : '';

    const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaHVuZ0BnbWFpbC5jb20iLCJpYXQiOjE2OTIwMjg5MzQsImV4cCI6MTY5MjYzMzczNH0.uUBA0VT9KJimqZqRJYFxF93tHYAJJSnJ6tTqIMumSDI'
    useEffect(() => {
        STOMP_CLIENT.configure({
            connectHeaders: {
                Authorization: token,
                email: userEmail
            }
        })
    }, [user])

    STOMP_CLIENT.onConnect = (frame) => {
        var url = STOMP_CLIENT.webSocket
        console.log(url)
        setConnected(true);
        console.log('channel ' + channel)
        console.log('Connected: ' + frame);
        STOMP_CLIENT.subscribe('/users/queue/messages', (message) => {
                console.log('received: ' + message.body);
                const messageContent = JSON.parse(message.body);
                setMessages(prevState => [...prevState, messageContent]);
            }
        );
    };

    STOMP_CLIENT.onWebSocketError = (error) => {
        console.error('Error with websocket', error);
    };
    STOMP_CLIENT.onStompError = (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
    };

    useEffect(() => {
        chatBox.current.scrollTop = chatBox.current.scrollHeight;
    }, [messages]);


    useEffect(() => {
        // if (!connected) {
        STOMP_CLIENT.activate();
        // }
        return () => {
            STOMP_CLIENT.deactivate()
            console.log('Disconnected!')
        }
    }, []);


    function sendMessage() {
        if (connected) {
            STOMP_CLIENT.publish({
                destination: "/app/ws",
                body: JSON.stringify({
                    'sendTo': contactEmail,
                    'content': newMessage
                })
            });
        }
        setNewMessage('')
    }

    return (
        <div className="col-lg-12 position-relative">
            <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar bg-white theme-dark-bg rounded-3"
                 ref={chatBox}>
                <div className="chat-body p-3 ">
                    <div className="messages-content pb-0"
                         onClick={() => setEmojiVisible(false)}>

                        {/*{*/}
                        {/*    oldMessages.map((message, index) =>*/}
                        {/*        <Message key={index} message={message}/>)*/}
                        {/*}*/}

                        {
                            messages.map((message, index) => {
                                if (message.from !== contactEmail) message.income = true;
                                return <Message key={index} message={message}/>
                            })
                        }

                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="chat-bottom dark-bg p-3 shadow-none theme-dark-bg rounded-3" style={{width: "98%"}}>
                {emojiVisible && <div className='emoji-picker d-flex position-absolute' style={{top: '-428px'}}>
                    <Picker data={data}
                            onEmojiSelect={(emoji) => {
                                console.log(emoji)
                                setNewMessage(prevState => prevState + emoji.native)
                                setEmojiVisible(false)
                            }}
                    />
                </div>}
                <div className="chat-form">
                    <button className="bg-grey float-left"
                            onClick={() => setEmojiVisible(prevState => !prevState)}>
                        <i className="ti-microphone text-grey-600"></i>
                    </button>
                    <div className="">
                        <input type="text"
                               ref={chatInput}
                               value={newMessage}
                               className='form-group bg-light'
                               placeholder="Start typing..."
                               onChange={(event) => setNewMessage(event.target.value)}
                               onKeyDown={(event) => {
                                   if (event.key === "Enter") sendMessage()
                               }}
                               onClick={() => setEmojiVisible(false)}
                        />
                    </div>
                    <button className="bg-current"
                            onClick={sendMessage}>
                        <i className="ti-arrow-right text-white"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatBox;