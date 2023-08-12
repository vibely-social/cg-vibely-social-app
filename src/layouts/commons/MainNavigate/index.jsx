import Container from "react-bootstrap/Container";
import {selectSidebarPosition, toggle} from "../../../features/toggleSidebar/sidebarSlice.js";
import {ListGroup} from "react-bootstrap";
import SidebarData from "../../../data/SideBarData.jsx";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";

function MainNavigate(){
    const position = useSelector(selectSidebarPosition)
    const dispatch = useDispatch()
    return(
        <Container className="ps-0 pe-0">
            <div className="nav-content">
                <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-2 pb-1 mb-2 mt-2">
                    <div className='hover-scale-1-1 more-btn d-flex justify-content-center hover-pointer'
                         onClick={()=> dispatch(toggle(!position))}
                    >
                        <i className="font-xxl feather-more-horizontal text-grey-500"></i>
                    </div>
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
                                        onHoverStart={e => {
                                        }}
                                        onHoverEnd={e => {
                                        }}
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
        </Container>
    )
}
export default MainNavigate;