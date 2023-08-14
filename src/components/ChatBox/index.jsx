import Message from "~/components/Message/index.jsx";
import {useEffect, useRef, useState} from "react";
import {STOMP_CLIENT} from "~/app/constants/appConstants.js";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

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

function ChatBox() {
    const [connected, setConnected] = useState(false)
    const [emojiVisible, setEmojiVisible] = useState(false)
    const chatInput = useRef();
    const chatBox = useRef();
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([])
    const channel = 1235;

    const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaHVuZ25ndXllbiIsImlhdCI6MTY5MTczOTk5NSwiZXhwIjoxNjkyMzQ0Nzk1fQ.uJ5zJ9LXjirZKlgoU3Fmqoq6vCwrZyrFGOOeMhRBdSEKn-bEIpAJCefnb-Gxo4fS3w3QGJHd_2_2kQ835tD6jw'

    STOMP_CLIENT.configure({
        connectHeaders: {
            Authorization: token
        }
    })
    STOMP_CLIENT.onConnect = (frame) => {
        frame.headers.Authorization = token;
        var url = STOMP_CLIENT.webSocket
        console.log(url)
        setConnected(true);
        console.log('channel ' + channel)
        console.log('Connected: ' + frame);
        STOMP_CLIENT.subscribe('/topic/listen/' + channel, (message) => {
                console.log('received: ' + message.body);
                const messageContent = JSON.parse(message.body);
                setMessages(prevState => [...prevState, messageContent]);
            },
            {
                Authorization: token
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
            console.log(channel)
            STOMP_CLIENT.publish({
                headers: {
                    'Authorization': 'token'
                },
                destination: "/app/chat/" + channel,
                body: JSON.stringify({
                    'username': "Chung",
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

                        {
                            oldMessages.map((message, index) =>
                                <Message key={index} message={message}/>)
                        }

                        {
                            messages.map((message, index) =>
                                <Message key={index} message={message}/>)
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