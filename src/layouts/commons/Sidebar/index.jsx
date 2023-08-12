import {Link} from "react-router-dom";
import SidebarData from '../../../data/SideBarData.jsx'
import {motion} from "framer-motion";
import useViewport from "../../../hooks/Viewport.jsx";
import {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import {ListGroup} from "react-bootstrap";
import  {toggle, selectSidebarPosition} from '../../../store/slices/toggleSidebar/'
import {useDispatch, useSelector} from "react-redux";


// eslint-disable-next-line react/prop-types
function Sidebar({collapse = false}) {
    const viewPort = useViewport();
    const [isMobile, setIsMobile] = useState(false)
    const [sidebarHover, setSidebarHover] = useState(false)
    const position = useSelector(selectSidebarPosition)
    const dispatch = useDispatch()

    const moreBtnStyle = {
        position: 'absolute',
        right:'35%',
        zIndex: 5,
        top: '12%'
    }

    useEffect(() => {
        if (viewPort.width < 500) {
            dispatch(toggle(true))
            setIsMobile(true)
        } else if (viewPort.width >= 500 && viewPort.width < 1000) {
            setIsMobile(false)
            dispatch(toggle(true))
        } else {
            setIsMobile(false)
            dispatch(toggle(collapse))
        }
    }, [viewPort.width])   

    return (
        <motion.nav style={!isMobile ? {overflow: "visible", left: '-200px'} : {}}
                    animate={!isMobile ? {x: 200} : {}}
                    transition={!isMobile ? {duration: 0.8} : {}}
                    className={position ? "navigation scroll-bar menu-active" : "navigation scroll-bar"}
                    onMouseOver={() => setSidebarHover(true)}
                    onMouseOut={() => setSidebarHover(false)}>
            <Container className="ps-0 pe-0">
                <div className="nav-content">
                    <div className="nav-wrap bg-transparent-card rounded-xxl shadow-xss pt-2 pb-1 mb-2 mt-2">
                        {sidebarHover ? <div style={moreBtnStyle} className='more-btn hover-pointer'
                             onClick={()=> dispatch(toggle(!position))}>
                            <i className="font-xxl feather-more-horizontal text-grey-500"></i>
                        </div> : <></>}
                        <ListGroup as="ul" className="mb-1 top-content ">
                            {SidebarData.map((item, index) => {
                                return <ListGroup.Item as="li" style={{
                                    border: 'none',
                                    padding: '0',
                                    filter: "hue-rotate(338deg)"
                                }} key={index}><Link
                                    to={item.path} className="nav-content-bttn open-font">
                                    {window.location.pathname == item.path
                                        ? <motion.img
                                            className={" btn-sidebar me-3 "}
                                            whileHover={{scale: 1.2}}
                                            style={{maxWidth: 50}} src={item.icon}/>
                                        : <motion.img
                                            whileHover={{scale: 1.2}}
                                            onHoverStart={e => {
                                            }}
                                            onHoverEnd={e => {
                                            }}
                                            style={{maxWidth: 50}}
                                            className={" btn-sidebar me-3 "} src={item.icon}/>}
                                    {window.location.pathname == item.path
                                        ? <span className="text-primary">{item.heading}</span>
                                        : <span className="">{item.heading}</span>}
                                </Link></ListGroup.Item>
                            })}
                        </ListGroup>
                    </div>
                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
                        <div className="nav-caption fw-600 font-xssss text-grey-500">Account</div>
                        <ListGroup as="ul" className="mb-1" >
                            <ListGroup.Item as="li" style={{border: 'none', padding:'0'}}  className="logo d-none d-xl-block d-lg-block"></ListGroup.Item>
                            <ListGroup.Item as="li" style={{border: 'none', padding:'0'}} ><Link to="/profile" className="nav-content-bttn open-font h-auto pt-2 pb-2 "><i className="font-sm feather-settings me-3 text-grey-500" ></i><span>Settings</span></Link></ListGroup.Item>
                            <ListGroup.Item as="li" style={{border: 'none', padding:'0'}} ><Link to="/logout" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm feather-log-out me-3 text-grey-500"></i><span>Log out</span></Link></ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </Container>
        </motion.nav>
    );
}

export default Sidebar; 