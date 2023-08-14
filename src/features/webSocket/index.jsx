import {useEffect, useRef, useState} from "react";
import {BROKER_URL} from "~/app/constants/appConstants.js";

function StompWebSocket() {
    const STOMP_CLIENT = new StompJs.Client({brokerURL: BROKER_URL})
    const [connected, setConnected] = useState(false)
    const inputRef = useRef();
    const chatBox = useRef();
    const [newMessage, setNewMessage] = useState('');
    const [connectNotify, setConnectNotify] = useState('')
    const [messages, setMessages] = useState([])

    const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaHVuZ25ndXllbiIsImlhdCI6MTY5MTczOTk5NSwiZXhwIjoxNjkyMzQ0Nzk1fQ.uJ5zJ9LXjirZKlgoU3Fmqoq6vCwrZyrFGOOeMhRBdSEKn-bEIpAJCefnb-Gxo4fS3w3QGJHd_2_2kQ835tD6jw'

    STOMP_CLIENT.onConnect = (frame) => {
        setConnected(true);
        console.log('channel ' + channel)
        console.log('Connected: ' + frame);
        setConnectNotify('Connected: ' + frame)
        STOMP_CLIENT.subscribe('/topic/listen/' + channel, (message) => {
                console.log('received: ' + message.body);
                const messageContent = JSON.parse(message.body);
                setMessages(prevState => [...prevState, messageContent]);
            },
            {
                'Authorization': token
            }
        );
    };

    STOMP_CLIENT.onWebSocketError = (error) => {
        console.error('Error with websocket', error);
        setConnectNotify('Error with websocket')
    };
    STOMP_CLIENT.onStompError = (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
    };

    useEffect(() => {
        chatBox.current.scrollTop = chatBox.current.scrollHeight;
    }, [messages]);


    useEffect(() => {
        if (!connected) {
            STOMP_CLIENT.activate();
        } else {
            setConnected(false);
            setConnectNotify('Disconnected')
            console.log("Disconnected");
        }
        return () => {
            STOMP_CLIENT.deactivate()
        }
    }, [connection]);


    function sendMessage() {
        console.log(channel)
        STOMP_CLIENT.publish({
            headers: {
                'Authorization': token
            },
            destination: "/app/chat/" + channel,
            body: JSON.stringify({
                'username': name,
                'content': newMessage
            })
        });
        inputRef.current.value = '';
    }

    return (
        <div>
            <div>
                <input type="text"
                       className='form-control mb-2'
                       placeholder='Enter your name'
                       onChange={(event) => setName(event.target.value)}
                />
                <button onClick={() => setConnection(true)}
                        className='btn btn-info me-2'
                        disabled={connected}
                >
                    Connect
                </button>
                <button onClick={() => setConnection(false)}
                        className='btn btn-warning'
                        disabled={!connected}
                >
                    Disconnect
                </button>
            </div>
            <div>
                <small className='font-xsss'>{connectNotify}</small>
            </div>
            <div className='mb-3'>
                Channel
                <input type="text"
                       disabled={connected}
                       onBlur={(event) => setChannel(event.target.value)}
                       className='form-control'
                       placeholder='input channel(default: 1235)'/>
            </div>

            <div className='border rounded mb-3'>
                <ul id='showMessage'
                    ref={chatBox}
                    className='overflow-y-scroll h200 ps-2'
                >
                    {
                        messages.map((message, index) =>
                            (<li key={index}>
                                {`${message.username}: ${message.content}`}
                            </li>)
                        )
                    }
                </ul>
            </div>

            <div className='mb-3'>
                <input
                    type="text"
                    ref={inputRef}
                    placeholder='input message'
                    className='form-control'
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') sendMessage()
                    }}
                />
                <button className='btn btn-info mt-3'
                        onClick={sendMessage}>Send
                </button>
            </div>

        </div>
    )
}

export default StompWebSocket;