import {memo, useEffect, useMemo, useRef, useState} from "react";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {useDispatch, useSelector} from "react-redux";
import {selectConversation} from "~/features/switchConversation/index.js";
import Messages from "~/components/Messages/index.jsx";
import {getStoredUserData} from "~/service/accountService.js";
import {
    loadOldMessages,
    selecAllOldMessages,
    selectLoadOldMessagesIsSuccess,
    selectTotalPage,
    setLoadOldMessagesSuccess
} from "~/features/loadOldMessages/index.js";
import {useStompWsClient} from "~/components/HOC_SocketClient/index.jsx";
import {selectNewsMessages} from "~/features/messeger/index.js";
import Message from "~/components/Messages/Message/index.jsx";
import { Toast } from 'primereact/toast';


function ChatBox() {
    const [emojiVisible, setEmojiVisible] = useState(false)
    const chatBox = useRef();
    const chatInput = useRef();
    const dispatch = useDispatch();
    const user = getStoredUserData()
    const currentConversation = useSelector(selectConversation)
    const messages = useSelector(selectNewsMessages)
    const messagesPage = useSelector(selecAllOldMessages)

    const loadMessagesSuccess = useSelector(selectLoadOldMessagesIsSuccess)
    const totalPage = useSelector(selectTotalPage)
    const [newMessage, setNewMessage] = useState('');
    const [oldMessages, setOldMessages] = useState([]);
    const [page, setPage] = useState(0);



    const SocketClient = useStompWsClient();

    useEffect(() => {
        // setScrollHeight(chatBox.current.scrollHeight)
        console.log('scroll')
        chatBox.current.scrollTop = chatBox.current.scrollHeight;
    },[messages, currentConversation])

    useEffect(() => {
        if (Object.keys(currentConversation).length && user) {
            if (!loadMessagesSuccess) {
                dispatch(loadOldMessages({
                    contact: currentConversation.email,
                    page
                }))
            }
        }
    }, [currentConversation, page])

    useEffect(() => {
        setPage(0)
    }, [currentConversation])

    useEffect(() => {
        if (loadMessagesSuccess) {
            setOldMessages(prevState => [...messagesPage[currentConversation.email], ...prevState])
            console.log('totalPage')
            console.log(totalPage)
        }
        dispatch(setLoadOldMessagesSuccess(false))
    }, [loadMessagesSuccess, currentConversation])

    function sendMessage() {
        if (currentConversation) {
            if (newMessage){
                SocketClient.publish({
                    destination: "/app/ws",
                    body: JSON.stringify({
                        receiver: currentConversation.email,
                        content: newMessage
                    })
                });
                console.log('sent')
            }
        }
        setNewMessage('')
    }

    const pagingHandle = () => {
        const scrollableHeight = chatBox.current.scrollHeight;
        const scrollTop = chatBox.current.scrollTop;
        const clientHeight = chatBox.current.clientHeight;

        // console.log('scrollableHeight ' + scrollableHeight)
        // console.log('scrollTop ' + scrollTop)

        if (scrollTop === 0) {
            if (scrollableHeight > clientHeight) {
                if (page < totalPage - 1) {
                    setPage(prevState => prevState + 1)
                }
            }
        }
    }

    useEffect(() => {
        if (chatBox.current) {
            chatBox.current.addEventListener("scroll", pagingHandle)
        }
        return () => {
            removeEventListener("scroll", pagingHandle)
        }
    }, [])

    return (
        <div className="col-lg-12 position-relative">
            <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar bg-white theme-dark-bg rounded-3"
                 ref={chatBox}>
                <div className="chat-body p-3 ">
                    <div className="messages-content pb-0"
                         onClick={() => setEmojiVisible(false)}>

                        <>
                            {
                                oldMessages.map((message, index) => {
                                    let displayMessage = {...message}
                                    if (displayMessage.sender === currentConversation.email || displayMessage.receiver === currentConversation.email){
                                        if (displayMessage.sender === currentConversation.email) {
                                            displayMessage.income = true
                                        }
                                        return <Message key={index} message={displayMessage}/>
                                    }
                                })
                            }
                        </>

                        <>
                            {
                                    messages.map((message, index) => {
                                        let displayMessage = {...message}
                                        if (displayMessage.sender === currentConversation.email || displayMessage.receiver === currentConversation.email){
                                            if (displayMessage.sender === currentConversation.email) {
                                                displayMessage.income = true
                                            }
                                            return <Message key={index} message={displayMessage}/>
                                        }
                                    })
                            }
                        </>

                        {/*<Messages messages={memoOldMessages}/>*/}
                        {/*<Messages messages={memoMessages}/>*/}
                        {/*<div className="clearfix"></div>*/}
                    </div>
                </div>
            </div>
            <div className="chat-bottom dark-bg p-3 shadow-none theme-dark-bg rounded-3" style={{width: "98%"}}>
                {emojiVisible && <div className='emoji-picker d-flex position-absolute' style={{top: '-428px'}}>
                    <Picker data={data}
                            onEmojiSelect={(emoji) => {
                                setNewMessage(prevState => prevState + emoji.native)
                                setEmojiVisible(false)
                                chatInput.current.focus()
                            }}/>
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