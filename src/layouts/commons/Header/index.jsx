import {Link} from 'react-router-dom';
import {forwardRef, useState} from 'react';
import NavData from "../../../data/NavData.jsx"
import Dropdown from 'react-bootstrap/Dropdown';
import {motion} from 'framer-motion';
import Avatar from '../../../assets/img/ppl.png'
import Logo from '../../../assets/img/logo.svg'
import ava from "../../../assets/img/ava.jpg"
import {Card, Form, FormGroup} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {toggleChatButton} from '../../../features/toggleChat';
import {useAuthorizeUser} from "~/hooks/authorizeUser.jsx";
import {getStoredUserData} from "~/service/accountService.js";

function Header() {
    const USER = getStoredUserData()
    const dispatch = useDispatch();
    let isFocusNotification = false;
    const [notificationItem, setNotificationItem] = useState(0);
    const [isOnMess, setIsOnMess] = useState(false);
    const isChatPage = window.location.pathname === '/messenger'
    useAuthorizeUser()

    const CustomToggle = forwardRef(({children, onClick}, ref) => (
        <div className='position-relative'>
            <motion.a
                whileHover={{scale: [1, 1.4, 1.2], cursor: "pointer"}}
                transition={{duration: 0.3}}
                ref={ref}
                onClick={(e) => {
                    e.preventDefault();
                    onClick(e);
                    isFocusNotification = !isFocusNotification
                }}
                style={{fontSize: '1.5rem'}}
                className={isFocusNotification ? ' btn-round-md text-vibe bg-vibe-light' : ' btn-round-md text-grey-500 bg-greylight'}
            >
                <i className="feather-bell"></i>
            </motion.a>
            <span className="dot-count bg-danger font-xsssss text-light fw-bold">21</span>
        </div>
    ));

    return (
        <div className="nav-header shadow-xs border-0">
            <div className="nav-top">
                <Link to='/'>
                    <motion.img
                        whileHover={{scale: 1.2}}
                        style={{maxWidth: 50, zIndex: "10000"}} className='d-inline-block  logo-nav' src={Logo}/>
                </Link>
                <a href="src/layouts/commons/Header#" className="mob-menu ms-auto me-2 chat-active-btn"><i
                    className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight"></i></a>
                <a href="default-video.html" className="mob-menu me-2"><i
                    className="feather-video text-grey-900 font-sm btn-round-md bg-greylight"></i></a>
                <a href="src/layouts/commons/Header#" className="me-2 menu-search-icon mob-menu"><i
                    className="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i></a>
                <button className="nav-menu me-0 ms-2"></button>
            </div>

            <Form className="float-left header-search">
                <FormGroup className=" mb-0 icon-input">
                    <i className="feather-search font-md text-grey-400 me-2 position-absolute"
                       style={{marginTop: '12px', marginLeft: '18px'}}/>
                    <input type="text" placeholder="search on vibely..." style={{backgroundColor: '#ebebeb'}}
                           className="border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg"/>
                </FormGroup>
            </Form>

            <div className='ms-3'></div>
            {NavData.map((item, index) => {
                return <div key={index}
                ><Link
                    to={item.path} key={item.path} className=" p-2 text-center ms-0 menu-icon center-menu-icon">
                    <motion.i
                        whileHover={{scale: [null, 1.5, 1.5]}}
                        transition={{duration: 0.3}}
                        className={
                            window.location.pathname === item.path
                                ? "font-lg btn-round-md   text-vibe  bg-vibe-light"
                                : "font-lg btn-round-md  text-grey-500 bg-greylight"
                        }>
                        <i style={window.location.pathname === item.path
                            ? {fontSize: "1.6rem", fontWeight: '550'}
                            : {fontSize: "1.4rem"}
                        } className={item.icon}/></motion.i>
                </Link></div>
            })}

            <Dropdown variant="secondary" className='p-2 text-center ms-auto menu-icon'>
                <Dropdown.Toggle as={CustomToggle}/>

                <Dropdown.Menu style={{width: '350px', overflow: 'auto'}}
                               className='dropdown-menu dropdown-menu-end p-4 rounded-3 border-0 shadow-lg'>
                    <h5 className="fw-700 font-xs mb-4 text-vibe">Notifications</h5>
                    <Dropdown.Item href="#" eventKey="1"
                                   style={(notificationItem == 1) ? {backgroundColor: '#DDFDE1'} : {backgroundColor: '#fff'}}
                                   onMouseDown={() => setNotificationItem(1)}
                                   className='card bg-transparent-card w-100 border-0 ps-5 mb-2'>
                        <img src={ava} alt="user" className="w50 position-absolute rounded-circle left-0 "/>
                        <h5 style={{whiteSpace: 'pre-wrap'}}
                            className=" ms-3 mb-2 mt-0 d-block font-xsss text-grey-900"><span className=' fw-700'>Thành Nguyễn</span> đã
                            nhắc bạn trong một bình luận</h5>
                        <h6 className="text-grey-400 font-xssss fw-600 float-right ms-3 mb-2 "> 3 phút</h6>
                    </Dropdown.Item>
                    <Dropdown.Item as={Card} href="#" eventKey="2"
                                   style={(notificationItem == 2) ? {backgroundColor: '#DDFDE1'} : {backgroundColor: '#fff'}}
                                   onMouseDown={() => setNotificationItem(2)}
                                   className='bg-transparent-card w-100 border-0 ps-5 mb-2'>
                        <img src={ava} alt="user" className="w50 position-absolute rounded-circle left-0"/>
                        <h5 style={{whiteSpace: 'pre-wrap'}} className="font-xsss text-grey-900 ms-3 mb-2 mt-0 d-block">
                            <span className=' fw-700'>Thành Nguyễn</span> đã nhắc bạn trong một bình luận</h5>
                        <h6 className="text-grey-400 font-xssss fw-600 float-right ms-3 mb-2"> 3 phút</h6>
                    </Dropdown.Item>
                    <Dropdown.Item
                                   style={(notificationItem == 3) ? {backgroundColor: '#DDFDE1'} : {backgroundColor: '#fff'}}
                                   onMouseDown={() => setNotificationItem(3)}
                                   className='card bg-transparent-card w-100 border-0 ps-5 mb-2'>
                        <img src={ava} alt="user" className="w50 position-absolute rounded-circle left-0"/>
                        <h5 style={{whiteSpace: 'pre-wrap'}} className="font-xsss text-grey-900 ms-3 mb-2 mt-0 d-block">
                            <span className=' fw-700'>Thành Nguyễn</span> đã nhắc bạn trong một bình luận</h5>
                        <h6 className="text-grey-400 font-xssss fw-600 float-right ms-3 mb-0"> 3 phút</h6>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {!isChatPage && <motion.a
                onClick={() => dispatch(toggleChatButton())}
                whileHover={{scale: [null, 1.4, 1.3]}}
                transition={{duration: 0.3}} onClickCapture={() => {
                let mess = isOnMess;
                setIsOnMess(!mess)
            }} className="p-2 text-center ms-3 menu-icon chat-active-btn ">
                <i style={{fontSize: '1.5rem'}}
                   className={isOnMess ? "feather-message-square cursor-pointer btn-round-md bg-vibe-light text-vibe" : "feather-message-square cursor-pointer btn-round-md  bg-greylight text-grey-500"}></i>
            </motion.a>}

            <Link to="/profile" className="p-0 ms-3 menu-icon">
                <motion.img whileHover={{scale: [null, 1.5, 1.4]}}
                            transition={{duration: 0.3}} 
                            src={USER.avatar ? USER.avatar : Avatar}
                            className="w45 rounded-xl mt--1"/>
            </Link>

        </div>
    );
}

export default Header;

