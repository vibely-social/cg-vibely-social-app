import {memo, useEffect, useMemo, useRef, useState} from "react";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {useSelector} from "react-redux";
import {selectConversation} from "~/features/switchConversation/index.js";
import {getStoredUserData} from "~/service/accountService.js";
import Messages from "~/components/Messages/index.jsx";


function ChatBox({CHAT_CLIENT, messages}) {
    const [emojiVisible, setEmojiVisible] = useState(false)
    const chatInput = useRef();
    const chatBox = useRef();
    const user = getStoredUserData()
    const contactUser = useSelector(selectConversation)
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        chatBox.current.scrollTop = chatBox.current.scrollHeight;
    })

    function sendMessage() {
        if (contactUser) {
            CHAT_CLIENT.publish({
                destination: "/app/ws",
                body: JSON.stringify({
                    senderName: user ? user.firstName : 'anonymous',
                    receiver: contactUser.email,
                    content: newMessage
                })
            });
            console.log('sended')
        }
        setNewMessage('')
    }
    const memoMessages = useMemo(() => messages,[messages])

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
                        <Messages messages={memoMessages}/>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="chat-bottom dark-bg p-3 shadow-none theme-dark-bg rounded-3" style={{width: "98%"}}>
                {emojiVisible && <div className='emoji-picker d-flex position-absolute' style={{top: '-428px'}}>
                    <Picker data={data}
                            onEmojiSelect={(emoji) => {
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

export default memo(ChatBox);