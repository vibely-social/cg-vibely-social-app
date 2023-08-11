import {Link} from "react-router-dom";
import SidebarData from '../../data/SideBarData'
import {motion} from "framer-motion";
import useViewport from "../../hooks/Viewport";
import {useEffect, useRef, useState} from "react";
import Container from 'react-bootstrap/Container';
import {ListGroup} from "react-bootstrap";


function Sidebar() {

    const viewPort = useViewport();
    const navRef = useRef(null)
    const [isMobile,setIsMobile] = useState(false)
    const [menuPosition, setMenuPosition] = useState(false)
    const [sidebarHover, setSidebarHover] = useState(false)

    
    const variants = {
        transition: { duration: 0.7 },
        animate: { x: 100 },
        style: {left : '-200px'}
      }

    useEffect(() => {

        if(viewPort.width < 1000){
            setIsMobile(true)
        }
        else{
            setIsMobile(false)
        }
    })

    return (   
    <motion.nav style={!isMobile ? {overflow: "visible",left: '-200px'} : {}} 
                animate={!isMobile ? {x: 200} : {}} 
                transition={!isMobile ? {duration: 0.7 } : {}}  
                className= {menuPosition ? "navigation scroll-bar menu-active" : "navigation scroll-bar" }
                onMouseOver={() => {setSidebarHover(true)}}
                onMouseOut={() => setSidebarHover(false)}>
                <i className={sidebarHover ? (menuPosition ? "feather-chevron-right visible": "feather-chevron-left visible")  : " invisible " }
                    onClick={()=> {setMenuPosition(!menuPosition)}} 
                    style={{position: 'absolute',right: 0,zIndex:"1",cursor: "grab",marginRight: "10px",marginTop: "15px",scale: "1.6",color: "lightgray"}}/>
                    
            <Container className="ps-0 pe-0">
                <div  className="nav-content">
                    <div  className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                        <ListGroup  as="ul" className="mb-1 top-content ">
                            {SidebarData.map((item,index) => {
                            return <ListGroup.Item as="li" style={{border: 'none', padding:'0',filter: "hue-rotate(338deg)"}}  key={index} ><Link 
                            to={item.path}  className="nav-content-bttn open-font">
                                {window.location.pathname == item.path 
                                ? <motion.img 
                                className={" btn-sidebar me-3 "}
                                whileHover={{ scale: 1.2 }}
                                onHoverStart={e => {}}
                                onHoverEnd={e => {}}
                                style={{maxWidth: 50}} src={item.icon}/>
                                : <motion.img 
                                whileHover={{ scale: 1.2 }}
                                onHoverStart={e => {}}
                                onHoverEnd={e => {}}
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
                        <div className="nav-caption fw-600 font-xssss text-grey-500"><span></span> Account</div>
                        <ul className="mb-1">
                            <li className="logo d-none d-xl-block d-lg-block"></li>
                            <li><Link to="/profile" className="nav-content-bttn open-font h-auto pt-2 pb-2 "><i className="font-sm feather-settings me-3 text-grey-500" ></i><span>Settings</span></Link></li>
                            <li><Link to="/logout" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm feather-log-out me-3 text-grey-500"></i><span>Log out</span></Link></li>
                        </ul>
                    </div>
                </div>
            </Container>
    </motion.nav>
 );
}

export default Sidebar; 