import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import useViewport from "~/hooks/Viewport.jsx";
import {memo, useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import {ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {selectSidebarPosition, toggle} from "~/features/toggleSidebar/index.js";
import {ProgressSpinner} from "primereact/progressspinner";
import {selectUserData} from "~/features/userAccount/index.js";
import {
    getFriends,
    selectFriendList,
    selectGetFriendIsLoading,
    selectGetFriendIsSuccess,
    setGetFriendsSuccess
} from "~/features/getFriends/index.js";
import {selectConversation, switchConversationTo} from "~/features/switchConversation/index.js";
import MainNavigate from "~/layouts/commons/Sidebar/MainSidebar/MainNavigate/index.jsx";

// eslint-disable-next-line react/prop-types
function ChatSidebar() {
    const viewPort = useViewport();
    const friendList = useSelector(selectFriendList)
    const position = useSelector(selectSidebarPosition)
    const dispatch = useDispatch()
    const [smallScreen, setSmallScreen] = useState(false)
    const user = useSelector(selectUserData)
    const loading = useSelector(selectGetFriendIsLoading)
    const currentConversation = useSelector(selectConversation)
    const [currentContact, setCurrentContact] = useState({})
    const success = useSelector(selectGetFriendIsSuccess)
    const [friends, setFriends] = useState([])
    useEffect(() => {
        if (viewPort.width < 576) {
            dispatch(toggle(true))
            setSmallScreen(true)
        } else if (viewPort.width >= 576 && viewPort.width < 992) {
            setSmallScreen(false)
            dispatch(toggle(true))
        } else {
            setSmallScreen(false)
            dispatch(toggle(false))
        }
    }, [viewPort.width])

    useEffect(() => {
        if (!success) {
            dispatch(getFriends())
        } else {
            setFriends(friendList)
        }

        return () => {
            if (success) {
                dispatch(setGetFriendsSuccess(false))
            }
        }
    }, [success])


    useEffect(() => {
        if (Object.keys(currentConversation).length) {
            setCurrentContact(currentConversation)
        } else if (currentContact && currentContact.email) {
            dispatch(switchConversationTo(currentContact))
        } else if (friends[0]) {
            setCurrentContact(friends[0])
        }
    }, [friends, currentContact, currentConversation])
    return (
        <div>
            <motion.nav style={!smallScreen ? {overflow: "hidden", left: '-200px'} : {}}
                        animate={!smallScreen ? {x: 200} : {}}
                        transition={!smallScreen ? {duration: 0.8} : {}}
                        className={position ? "navigation chat-navigation menu-active " : "navigation chat-navigation"}>
                <Container className="ps-0 pe-0 d-flex">

                    <MainNavigate chatNav={true}/>
                    <div className="nav-content">
                        <div
                            className="bg-lightblue bg-transparent-card rounded-xxl border shadow-xss pt-2 pb-1 mb-2 mt-2 friend-list-wrap">
                            <div className='hover-scale-1-1 more-btn d-flex justify-content-center cursor-pointer'
                                 onClick={() => dispatch(toggle(!position))}>
                                <i className="font-xxl feather-more-horizontal text-grey-500"></i>
                            </div>

                            <ListGroup as="ul" className="mb-1 top-content ps-1 scroll-bar">
                                <div className='d-flex position-relative justify-content-center '>
                                    {loading && <ProgressSpinner/>}
                                </div>
                                {
                                    friends.map(friend => {
                                        const name = friend.firstName + " " + friend.lastName;
                                        return (
                                            <ListGroup.Item as="li"
                                                            className={'hover-button rounded '
                                                                + (friend.email === currentConversation.email ? 'bg-dark-subtle' : '')}
                                                            style={{
                                                                display: (user && user.email === friend.email) ? "none" : "block",
                                                                border: 'none',
                                                                padding: '0',
                                                                filter: "hue-rotate(338deg)"
                                                            }} key={friend.id}>
                                                <Link to={friend.path}
                                                      className="nav-content-bttn open-font p-0"
                                                      onClick={() => {
                                                          dispatch(switchConversationTo(friend))
                                                      }}>

                                                    <motion.img
                                                        whileHover={{scale: 1.1}}
                                                        style={{
                                                            maxHeight: 45,
                                                            minHeight: 45,
                                                            width: 45,
                                                            marginLeft: 0,
                                                            objectFit: 'cover',
                                                        }}
                                                        className={" btn-sidebar me-3 border"}
                                                        src={friend.avatarUrl}/>
                                                    <span className="">{name}</span>
                                                </Link>
                                            </ListGroup.Item>
                                        )
                                    })
                                }
                            </ListGroup>
                        </div>
                    </div>

                </Container>
            </motion.nav>
        </div>
    )
}

export default memo(ChatSidebar);
