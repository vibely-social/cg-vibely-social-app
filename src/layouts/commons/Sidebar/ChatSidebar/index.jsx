import {Link} from "react-router-dom";
import SidebarData from '../../../../data/SideBarData.jsx'
import {motion} from "framer-motion";
import useViewport from "../../../../hooks/Viewport.jsx";
import {memo, useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import {ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {selectSidebarPosition, toggle} from "../../../../features/toggleSidebar/index.js";
import {ProgressSpinner} from "primereact/progressspinner";
import {selectUserData} from "~/features/userAccount/index.js";
import {
    getFriends,
    selectFriendList,
    selectGetFriendIsLoading,
    selectGetFriendIsSuccess,
    setGetFriendsSuccess
} from "~/features/getFriends/index.js";
import {switchConversationTo} from "~/features/switchConversation/index.js";

// eslint-disable-next-line react/prop-types
function ChatSidebar({collapse = false}) {
    const viewPort = useViewport();
    const position = useSelector(selectSidebarPosition)
    const dispatch = useDispatch()
    const [smallScreen, setSmallScreen] = useState(false)
    const user = useSelector(selectUserData)
    const loading = useSelector(selectGetFriendIsLoading)
    const [currentContact, setCurrentContact] = useState({})
    const friendList = useSelector(selectFriendList)
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
            dispatch(toggle(collapse))
        }
    }, [viewPort.width])

    useEffect(() => {
        if (!success) {
            dispatch(getFriends())
            console.log('Loading friend list')
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
        if (currentContact && currentContact.email) {
            dispatch(switchConversationTo(currentContact))
        } else if (friends[0]) {
            setCurrentContact(friends[0])
        }
    }, [friends, currentContact])
    return (
        <div>
            <motion.nav style={!smallScreen ? {overflow: "hidden", left: '-200px'} : {}}
                        animate={!smallScreen ? {x: 200} : {}}
                        transition={!smallScreen ? {duration: 0.8} : {}}
                        className={position ? "navigation chat-navigation menu-active " : "navigation chat-navigation"}>
                <Container className="ps-0 pe-0 d-flex">
                    <div className="chat-nav">
                        <div
                            className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                            <ListGroup as="ul" className="mb-1 top-content ">
                                {SidebarData.map((item, index) => {
                                    return <ListGroup.Item as="li"
                                                           style={{
                                                               border: 'none',
                                                               padding: 0,
                                                               filter: "hue-rotate(338deg)"
                                                           }}
                                                           key={index}>
                                        <Link to={item.path} className="nav-content-bttn open-font">
                                            {window.location.pathname === item.path
                                                ? <motion.img
                                                    className={" btn-sidebar me-3 "}
                                                    whileHover={{scale: 1.2}}
                                                    style={{maxWidth: 50}} src={item.icon}/>
                                                : <motion.img
                                                    whileHover={{scale: 1.2}}
                                                    style={{maxWidth: 50}}
                                                    className={" btn-sidebar me-3 "} src={item.icon}/>}
                                            {window.location.pathname === item.path
                                                ? <span className="text-primary">{item.heading}</span>
                                                : <span className="">{item.heading}</span>}
                                        </Link></ListGroup.Item>
                                })}
                            </ListGroup>
                        </div>
                        <div
                            className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-2 pb-1 mb-2 mt-2">
                            <ul className="mb-1">
                                <li>
                                    <Link to="/profile" className="nav-content-bttn open-font h-auto pt-2 pb-2 ">
                                        <i className="font-sm feather-settings me-3 text-grey-500"></i>
                                        <span>Settings</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/logout" className="nav-content-bttn open-font h-auto pt-2 pb-2">
                                        <i className="font-sm feather-log-out me-3 text-grey-500"></i>
                                        <span>Log out</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
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
                                                                + (friend.email === currentContact.email ? 'bg-dark-subtle' : '')}
                                                            style={{
                                                                display: (user && user.email === friend.email) ? "none" : "block",
                                                                border: 'none',
                                                                padding: '0',
                                                                filter: "hue-rotate(338deg)"
                                                            }} key={friend.id}>
                                                <Link to={friend.path}
                                                      className="nav-content-bttn open-font p-0"
                                                      onClick={() => {
                                                          // dispatch(switchConversationTo(friend))
                                                          setCurrentContact(friend)
                                                      }}>

                                                    <motion.img
                                                        whileHover={{scale: 1.1}}
                                                        style={{
                                                            maxWidth: 50,
                                                            maxHeight: 50,
                                                            minWidth: 50,
                                                            minHeight: 50
                                                        }}
                                                        className={" btn-sidebar me-3 "}
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
