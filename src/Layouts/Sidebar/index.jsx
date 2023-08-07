import { Link } from "react-router-dom";
import SidebarData from '../../data/SideBarData'
import { motion } from "framer-motion";
import useViewport from "../../hooks/Viewport";
import { useRef ,useState,useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { ListGroup } from "react-bootstrap";



function Sidebar() {

    const viewPort = useViewport();
    const navRef = useRef(null)
    const [isMobile,setIsMobile] = useState(false)

    
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
    <motion.nav style={!isMobile ? {left: '-200px'} : {}} 
                animate={!isMobile ? {x: 200} : {}} 
                transition={!isMobile ? {duration: 0.7 } : {}}  
                className="navigation scroll-bar">
            <Container className="ps-0 pe-0">
                <div  className="nav-content">
                    <div  className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                        <ListGroup  as="ul" className="mb-1 top-content ">
                            {SidebarData.map((item,index) => {
                            return <ListGroup.Item as="li" style={{border: 'none', padding:'0'}}  key={index} ><Link 
                            to={item.path}  className="nav-content-bttn open-font">
                                {window.location.pathname == item.path 
                                ? <motion.img 
                                className={" btn-sidebar me-3 "}
                                animate={{
                                    scale: [1, 1.2, 1.3, 1, 1],
                                    rotate: [0, 30, 60, 90,120,150,180,210,240,270,300,330,360],
                                    borderRadius: ["50%", "50%", "50%", "50%", "50%"]
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    repeatDelay: 5
                                }} src={item.icon}/>
                                : <motion.img  className={" btn-sidebar me-3 "} src={item.icon}/>}
                                {window.location.pathname == item.path 
                                ? <span className="text-primary">{item.heading}</span> 
                                : <span className="">{item.heading}</span>}
                                </Link></ListGroup.Item>
                            })}   
                        </ListGroup>
                    </div>

                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
                        <div className="nav-caption fw-600 font-xssss text-grey-500"><span></span> Tài khoản</div>
                        <ul className="mb-1">
                            <li className="logo d-none d-xl-block d-lg-block"></li>
                            <li><Link to="/profile" className="nav-content-bttn open-font h-auto pt-2 pb-2 "><i className="font-sm feather-settings me-3 text-grey-500" ></i><span>Thông tin tài khoản</span></Link></li>
                            <li><Link to="/logout" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm feather-log-out me-3 text-grey-500"></i><span>Đăng xuất</span></Link></li>
                        </ul>
                    </div>
                </div>
            </Container>
    </motion.nav>
 );
}

export default Sidebar;