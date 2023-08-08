import { Link , useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavData from "../../Data/NavData"
import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import { motion } from 'framer-motion';
import Avatar from '../../assets/img/ppl.png'
import Logo from '../../assets/img/logo.svg'
import { event } from 'jquery';
import ava from "../../assets/img/ava.jpg"
import "./index.css"

function Header() { 
    const [notificationItem,setNotificationItem] = useState(0);
    let isFocusNotification = false;
    const [isOnMess,setIsOnMess] = useState(false);

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <motion.a
        whileHover={{ scale: [null, 1.2, 1.1] }}
                 transition={{ duration: 0.3 }}
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
            isFocusNotification = !isFocusNotification
          }}
          
          className={isFocusNotification ? 'btn-round-md text-vibe bg-vibe-light' : 'btn-round-md text-grey-500 bg-greylight'}
        >
          <span  className="dot-count bg-warning"></span><i className="feather-bell"></i>
        </motion.a>));


    return ( 
        <div className="nav-header shadow-xs border-0">
            <div className="nav-top">
                <Link to='/'> <motion.img 
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  style={{maxWidth: 50}} className='d-inline-block logo-nav' src={Logo} /></Link>
                <a href="#" className="mob-menu ms-auto me-2 chat-active-btn"><i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight"></i></a>
                <a href="default-video.html" className="mob-menu me-2"><i className="feather-video text-grey-900 font-sm btn-round-md bg-greylight"></i></a>
                <a href="#" className="me-2 menu-search-icon mob-menu"><i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i></a>
                <button className="nav-menu me-0 ms-2"></button> 
            </div>
            <form action="#" className="float-left header-search">
                <div className="form-group mb-0 icon-input">
                    <i className="feather-search font-sm text-grey-400"></i>
                    <input type="text" placeholder="nhập vào thông tin tìm kiếm" className="bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg"/>
                </div>
            </form>
            <div className='ms-3'></div>
            {NavData.map((item,index) => {
               return <div key={index}
               ><Link 
                    to={item.path} key={item.path} className=" p-2 text-center ms-0 menu-icon center-menu-icon">
                <motion.i 
                 whileHover={{ scale: [null, 1.5, 1.5] }}
                 transition={{ duration: 0.3 }}
                    className={
                        window.location.pathname === item.path
                    ? "font-lg btn-round-md   text-vibe  bg-vibe-light"
                     : "font-lg btn-round-md  text-grey-500 bg-greylight"
                    }>
                 <i style={window.location.pathname === item.path
                    ? {fontSize: "1.6rem", fontWeight: '550'}
                     : {fontSize: "1.4rem"}
                    }className={item.icon}/></motion.i>
                    </Link></div>
            })} 
                <Dropdown variant="secondary"  className='p-2 text-center ms-auto menu-icon'>
                <Dropdown.Toggle  as={CustomToggle} />

                <Dropdown.Menu style={{width: '350px', overflow:'auto' }} className='dropdown-menu dropdown-menu-end p-4 rounded-3 border-0 shadow-lg'>
                <h5 className="fw-600 font-xs mb-4 text-vibe">Thông báo</h5>
                    <Dropdown.Item href="#" eventKey="1" style={(notificationItem ==1) ? {backgroundColor : '#DDFDE1'} : {backgroundColor : '#fff'}}  onMouseDown={() => setNotificationItem(1)} className='card bg-transparent-card w-100 border-0 ps-5 mb-2'>
                        <img src={ava} alt="user" className="w50 position-absolute rounded-circle left-0 "/>
                        <h5 style={{overflow:'auto' , whiteSpace: 'pre-wrap'}} className=" ms-3 mb-2 mt-0 d-block font-xsss text-grey-900"><span className=' fw-700'>Thành Nguyễn</span> đã nhắc bạn trong một bình luận</h5>
                        <h6 className="text-grey-400 font-xssss fw-600 float-right ms-3 mb-2 "> 3 phút</h6>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" eventKey="2" style={(notificationItem == 2) ? {backgroundColor : '#DDFDE1'} : {backgroundColor : '#fff'}}  onMouseDown={() => setNotificationItem(2)} className='card bg-transparent-card w-100 border-0 ps-5   mb-2'>
                    <img src={ava} alt="user" className="w50 position-absolute rounded-circle left-0"/>
                        <h5 style={{overflow:'auto' , whiteSpace: 'pre-wrap'}} className="font-xsss text-grey-900 ms-3 mb-2 mt-0 d-block"><span className=' fw-700'>Thành Nguyễn</span> đã nhắc bạn trong một bình luận</h5>
                        <h6 className="text-grey-400 font-xssss fw-600 float-right ms-3 mb-2"> 3 phút</h6>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" eventKey="3" style={(notificationItem == 3) ? {backgroundColor : '#DDFDE1'} : {backgroundColor : '#fff'}}  onMouseDown={() => setNotificationItem(3)}  className='card bg-transparent-card w-100 border-0 ps-5 mb-2'>
                    <img src={ava} alt="user" className="w50 position-absolute rounded-circle left-0"/>
                        <h5 style={{overflow:'auto' , whiteSpace: 'pre-wrap'}} className="font-xsss text-grey-900 ms-3 mb-2 mt-0 d-block"><span className=' fw-700'>Thành Nguyễn</span> đã nhắc bạn trong một bình luận</h5>
                        <h6 className="text-grey-400 font-xssss fw-600 float-right ms-3 mb-0"> 3 phút</h6>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

                <motion.a 
                     whileHover={{ scale: [null, 1.4, 1.3] }}
                     transition={{ duration: 0.3 }} href="#" onClickCapture={() => {let test = isOnMess ;setIsOnMess(!test)}} className="p-2 text-center ms-3 menu-icon chat-active-btn ">
                        <i className={isOnMess ? "feather-message-square btn-round-md bg-vibe-light text-vibe" : "feather-message-square btn-round-md  bg-greylight text-grey-500"}></i></motion.a>

            <Link to="/profile" className="p-0 ms-3 menu-icon">
                <motion.img whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }} src={Avatar} alt="user" className="w35 mt--1"/></Link>
        </div>
    ); 
}

export default Header;

