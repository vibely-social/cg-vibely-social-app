import {ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getFriends, selectFriendList} from "~/features/getFriends/index.js";
import "./index.css"
import {useEffect, useState} from "react";
import {selectConversation, switchConversationTo} from "~/features/switchConversation/index.js";
import {loadOldMessages, selectAllOldMessages} from "~/features/loadOldMessages/index.jsx";
import {selectUserData} from "~/features/userAccount/index.js";
import {selectBottomChatStatus, setBtChatActive, setBtChatInactive} from "~/features/bottomChat/index.jsx";

function RightChat() {
    const dispatch = useDispatch()
    const user = useSelector(selectUserData)
    const friendList = useSelector(selectFriendList)
    const btChatStatus = useSelector(selectBottomChatStatus)
    const isOpenChat = useSelector((state) => state.openChat.isOn);
    const [conversation, setConversation] = useState({})
    const currentConversation = useSelector(selectConversation)
    const oldMessages = useSelector(selectAllOldMessages)
    const [currentOldMessages, setCurrentOldMessages] = useState([])

    useEffect(() => {
        dispatch(loadOldMessages({
            contact: currentConversation.email,
            page: 0
        }))
    }, [currentConversation])

    useEffect(() => {
        if (oldMessages[currentConversation.email]) {
            setCurrentOldMessages(oldMessages[currentConversation.email])
        }
    }, [oldMessages,currentConversation])

    useEffect(() => {
        dispatch(getFriends())
    }, [])

    useEffect(() => {
        if (conversation.email)
            dispatch(switchConversationTo(conversation))
    }, [conversation])

    return (
        <>
            <div className={"right-chat nav-wrap mt-2 right-scroll-bar " + (isOpenChat ? "active-sidebar" : "")}>
                <div className="middle-sidebar-right-content bg-white shadow-xss rounded-xxl">
                    <div className="section full px-2 py-3 position-relative feed-body " style={{minHeight: '100vh'}}>
                    <span className="font-md text-vibe fw-600 ls-3 ms-2">Chats
                        <i className="feather-message-circle font-xs align-text-top ms-2"/>
                    </span>
                        <ListGroup as="ul" className="list-group-flush">
                            {friendList.map((friend, index) => (
                                <li key={index}
                                    className="bg-transparent list-group-item px-2 py-2 border-0 rounded d-flex align-items-center hover-button cursor-pointer"
                                    onClick={() => {
                                        setConversation(friend);
                                        dispatch(setBtChatActive());
                                    }}>
                                    <figure className="avatar float-left mb-0 me-2">
                                        <img src={friend?.avatarUrl} alt="image" className="right-chat-img"/>
                                    </figure>
                                    <h3 className="fw-700 mb-0 mt-0">
                                    <span
                                        className="font-xsss text-grey-600 d-block text-dark model-popup-chat">{friend?.firstName}</span>
                                    </h3>
                                    {/*<span className="badge badge-primary text-white badge-pill fw-500 mt-0 me-2">2</span>*/}
                                    {/*<span className="badge mt-0 text-grey-500 badge-pill pe-0 font-xsssss">9 m</span>*/}
                                    <span className="bg-success ms-auto btn-round-xss"/>
                                </li>
                            ))}
                        </ListGroup>
                    </div>
                </div>
            </div>

            <div className={"modal-popup-chat smooth-transition "
                + (isOpenChat ? "" : "end-0")
                + (btChatStatus?" d-block slideInUp":"slideOutDown")}>
                <div className="modal-popup-wrap bg-white p-0 shadow-lg rounded-3">

                    <div
                        className="modal-popup-header w-100 border-bottom rounded-top-3 bg-grey shadow-md transform-none">
                        <div className="p-3 border-0 d-flex justify-content-between">
                            <div className="d-flex cursor-pointer">
                                <div className="mb-0 position-relative hover-scale-1-1 smooth-transition d-flex justify-content-center align-items-center"
                                     style={{
                                         width: 37,
                                         height: 37
                                     }}>
                                    <img src={currentConversation.avatarUrl} alt="image"
                                         className="avatar-35 position-relative bg-light shadow"
                                         style={{
                                             zIndex: 101
                                         }}/>
                                    <span className="position-absolute bg-primary-gradiant spinner-border rounded-circle left-0"
                                        style={{
                                            width: 37,
                                            height: 37
                                        }}>
                                    </span>
                                </div>
                                <div className="ms-2 cursor-pointer">
                                    <h5 className="fw-700 text-primary font-xssss mt-1 mb-1">{currentConversation.firstName}</h5>
                                    <h4 className="text-grey-500 font-xsssss mt-0 mb-0"><span
                                        className="d-inline-block bg-success btn-round-xss m-0"></span> Available</h4>
                                </div>
                            </div>
                            <div className="cursor-pointer d-flex align-items-center"
                                 onClick={() => dispatch(setBtChatInactive())}>
                                <i className="ti-close text-grey-900 hover-scale-1-3"></i>
                            </div>
                        </div>
                    </div>

                    <div className="modal-popup-body w-100 scroll-bar d-flex flex-column-reverse">
                        {currentOldMessages.map((message, index) => (
                            <div key={index}
                                 className={"message mt-2 "
                                     + ((user.email === message.sender)
                                         ? "self text-right" : message.sender)}>
                                <div className="message-content font-xssss lh-24 fw-500">{message.content}</div>
                            </div>
                        ))}
                        {/*<div className="date-break font-xsssss lh-24 fw-500 text-grey-500 mt-2 mb-2">Mon 10:20am</div>*/}


                        <div className="pt-3 pe-3 pb-2 ps-4 bg-grey rounded-xl position-absolute border border-light"
                             style={{bottom: 105, left: 30}}
                             data-title=".dot-typing">
                            <div className="stage">
                                <div className="dot-typing"></div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-popup-footer w-100 border-top">
                        <div className="card p-3 d-block border-0 d-block">
                            <div className="form-group icon-right-input style1-input mb-0">
                                <input type="text"
                                       placeholder="Start typing.."
                                       className="form-control rounded-xl bg-greylight border-0 font-xssss fw-500 pe-3"/>
                                <i className="feather-send text-grey-500 font-md"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

}

export default RightChat;