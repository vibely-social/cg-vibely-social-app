import {Link} from "react-router-dom";
import SidebarData from '../../../../data/SideBarData.jsx'
import {motion} from "framer-motion";
import useViewport from "../../../../hooks/Viewport.jsx";
import {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import {ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {selectSidebarPosition, toggle} from "~/store/slices/toggleSidebar/index.js";
// eslint-disable-next-line react/prop-types
function ChatSidebar({collapse = false}) {
    const viewPort = useViewport();
    const [isMobile, setIsMobile] = useState(false)
    const position = useSelector(selectSidebarPosition)
    const dispatch = useDispatch()

    useEffect(() => {
        if (viewPort.width < 576) {
            dispatch(toggle(true))
            setIsMobile(true)
        } else if (viewPort.width >= 576 && viewPort.width < 992) {
            setIsMobile(false)
            dispatch(toggle(true))
        } else {
            setIsMobile(false)
            dispatch(toggle(collapse))
        }
    }, [viewPort.width])

    return (
        <motion.nav style={!isMobile ? {overflow: "hidden", left: '-200px'} : {}}
                    animate={!isMobile ? {x: 200} : {}}
                    transition={!isMobile ? {duration: 0.8} : {}}
                    className={position ? "navigation chat-navigation menu-active " : "navigation chat-navigation"} >
            <Container className="ps-0 pe-0 d-flex">
                <div className="chat-nav">
                    <div className="nav-wrap  bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                        <ListGroup as="ul" className="mb-1 top-content ">
                            {SidebarData.map((item, index) => {
                                return <ListGroup.Item as="li" style={{
                                    border: 'none',
                                    padding: '0',
                                    filter: "hue-rotate(338deg)"
                                }} key={index}><Link
                                    to={item.path} className="nav-content-bttn open-font">
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
                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-2 pb-1 mb-2 mt-2">
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
                    <div className="bg-transparent-card rounded-xxl shadow-xss pt-2 pb-1 mb-2 mt-2 friend-list-wrap">
                        <div className='hover-scale-1-1 more-btn d-flex justify-content-center cursor-pointer'
                             onClick={()=> dispatch(toggle(!position))}
                        >
                            <i className="font-xxl feather-more-horizontal text-grey-500"></i>
                        </div>
                        <ul className="mb-1 top-content scroll-bar"
                        >
                            <li className="logo d-none d-xl-block d-lg-block"></li>
                            <li><a id="default.html" className="nav-content-bttn open-font"><i
                                className="feather-tv btn-round-md bg-blue-gradiant me-3"></i><span>Newsfeed</span></a>
                            </li>
                            <li><a id="default-badge.html" className="nav-content-bttn open-font"><i
                                className="feather-award btn-round-md bg-red-gradiant me-3"></i><span>Badges</span></a>
                            </li>
                            <li><a id="default-storie.html" className="nav-content-bttn open-font"><i
                                className="feather-globe btn-round-md bg-gold-gradiant me-3"></i><span>Explore Stories</span></a>
                            </li>
                            <li><a id="default-group.html" className="nav-content-bttn open-font"><i
                                className="feather-zap btn-round-md bg-mini-gradiant me-3"></i><span>Popular Groups</span></a>
                            </li>
                            <li><a id="default.html" className="nav-content-bttn open-font"><i
                                className="feather-tv btn-round-md bg-blue-gradiant me-3"></i><span>Newsfeed</span></a>
                            </li>
                            <li><a id="default-badge.html" className="nav-content-bttn open-font"><i
                                className="feather-award btn-round-md bg-red-gradiant me-3"></i><span>Badges</span></a>
                            </li>
                            <li><a id="default-storie.html" className="nav-content-bttn open-font"><i
                                className="feather-globe btn-round-md bg-gold-gradiant me-3"></i><span>Explore Stories</span></a>
                            </li>
                            <li><a id="default-group.html" className="nav-content-bttn open-font"><i
                                className="feather-zap btn-round-md bg-mini-gradiant me-3"></i><span>Popular Groups</span></a>
                            </li>
                            <li><a id="default.html" className="nav-content-bttn open-font"><i
                                className="feather-tv btn-round-md bg-blue-gradiant me-3"></i><span>Newsfeed</span></a>
                            </li>
                            <li><a id="default-badge.html" className="nav-content-bttn open-font"><i
                                className="feather-award btn-round-md bg-red-gradiant me-3"></i><span>Badges</span></a>
                            </li>
                            <li><a id="default-storie.html" className="nav-content-bttn open-font"><i
                                className="feather-globe btn-round-md bg-gold-gradiant me-3"></i><span>Explore Stories</span></a>
                            </li>
                            <li><a id="default-group.html" className="nav-content-bttn open-font"><i
                                className="feather-zap btn-round-md bg-mini-gradiant me-3"></i><span>Popular Groups</span></a>
                            </li>
                            <li><a id="user-page.html" className="nav-content-bttn open-font"><i
                                className="feather-user btn-round-md bg-primary-gradiant me-3"></i><span>Author Profile </span></a>
                            </li>
                            <li><a id="default-email-box.html" className="nav-content-bttn open-font"><i
                                className="font-xl text-current feather-inbox me-3"></i><span>Email Box</span><span
                                className="circle-count bg-warning mt-1">584</span></a></li>
                            <li><a id="default-hotel.html" className="nav-content-bttn open-font"><i
                                className="font-xl text-current feather-home me-3"></i><span>Near Hotel</span></a>
                            </li>
                            <li><a id="default-event.html" className="nav-content-bttn open-font"><i
                                className="font-xl text-current feather-map-pin me-3"></i><span>Latest Event</span></a>
                            </li>
                            <li><a id="default-live-stream.html" className="nav-content-bttn open-font"><i
                                className="font-xl text-current feather-youtube me-3"></i><span>Live Stream</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </motion.nav>
    );
}

export default ChatSidebar;