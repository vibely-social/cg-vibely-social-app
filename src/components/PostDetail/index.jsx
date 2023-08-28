import ReadMore from "./ReadMore";
import { Card } from "react-bootstrap";
import Photogrid from "react-facebook-photo-grid";
import ppl from "~/assets/img/ppl.png"
import { motion } from "framer-motion";
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import { useState } from "react";
import Comment from "../Comment";


function PostDetail({data}) {

    TimeAgo.addDefaultLocale(en)
    const [like,setLike] = useState(1)
    const handleClickLike = () => {
        setLike((preState) => preState+1)
    }

    if (data == null) {

    }

    return (
        <>
            <Card className="w-100 shadow-md rounded-xxl border-0 p-3 mb-3">
                <Card.Body className="p-0 d-flex">
                    <figure className="avatar me-2">
                        <img
                            src={!data.author.avatar ? ppl : data.author.avatar}
                            alt="image"
                            className="shadow-sm rounded-circle w45" style={{height: "42px"}}/>
                    </figure>
                    <h4 className="fw-700 text-grey-900 font-xsss  mt-1">
                        {(data.author.firstName ? data.author.firstName : "") 
                                                                  + " " 
                                                                    + data.author.lastName}
                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                            <ReactTimeAgo date={data.createdDate} locale="en-US"/>
                        </span>
                        <i data-feather="circle"></i>
                    </h4>

                    <a href="#" className="ms-auto" id="dropdownMenu2"><i
                        className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></a>
                    <div className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                         aria-labelledby="dropdownMenu2">
                        <div className="card-body p-0 d-flex">
                            <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Save Link <span
                                className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Add this to your saved items</span>
                            </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide Post <span
                                className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                            </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide all from Group <span
                                className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                            </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">Unfollow Group <span
                                className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                            </h4>
                        </div>
                    </div>
                </Card.Body>
                <Card.Body className=" p-0 me-lg-5">
                    <ReadMore content={data.content} isTextOnly={data.gallery?.length > 0 ? true : false}/>
                </Card.Body>
                <Card.Body className="d-block p-2" >
                      <Photogrid 
						    images={data.gallery} 
						/>
                </Card.Body>
                <Card.Body className="d-flex p-0 mt-3 ms-2 ">
                    <div 
                       className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2 ">
                            <motion.i
                                className="feather-thumbs-up cursor-pointer text-white bg-primary-gradiant me-1 btn-round-xs me-2 font-xss"
                                whileHover={{ scale: 1.4 }}
                                whileTap={{ scale: 1 }}
                                style={{scale: 1.1}}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                onClick={handleClickLike}
                            />
                            <motion.i
                                className="feather-heart text-white cursor-pointer bg-pinterest ms-1 me-3 btn-round-xs  font-xss"
                                whileHover={{ scale: 1.6 }}
                                whileTap={{ scale: 1 }}
                                style={{scale: 1.1}}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                onClick={handleClickLike}
                            />
                        {!like ? 0 : like} Like
                    </div>
                    <div className="emoji-wrap">
                        <ul className="emojis list-inline mb-0">
                            <li className="emoji list-inline-item"><i className="em em---1"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-angry"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-anguished"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-astonished"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-blush"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-clap"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-cry"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-full_moon_with_face"></i></li>
                        </ul>
                    </div>
                    <a href="#" className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i
                        className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i><span
                        className="d-none-xss"> {!data.commentCount ? 0 : data.commentCount} Comment</span></a>
                    <a href="#" id="dropdownMenu21" data-bs-toggle="dropdown" aria-expanded="false"
                       className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i
                        className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i><span
                        className="d-none-xs">Share</span></a>
                    <div className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                         aria-labelledby="dropdownMenu21">
                        <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">Share <i
                            className="feather-x ms-auto font-xssss btn-round-xs bg-greylight text-grey-900 me-2"></i>
                        </h4>
                        <div className="card-body p-0 d-flex">
                            <ul className="d-flex align-items-center justify-content-between mt-2">
                                <li className="me-1"><a href="#" className="btn-round-lg bg-facebook"><i
                                    className="font-xs ti-facebook text-white"></i></a></li>
                                <li className="me-1"><a href="#" className="btn-round-lg bg-twitter"><i
                                    className="font-xs ti-twitter-alt text-white"></i></a></li>
                                <li className="me-1"><a href="#" className="btn-round-lg bg-linkedin"><i
                                    className="font-xs ti-linkedin text-white"></i></a></li>
                                <li className="me-1"><a href="#" className="btn-round-lg bg-instagram"><i
                                    className="font-xs ti-instagram text-white"></i></a></li>
                                <li><a href="#" className="btn-round-lg bg-pinterest"><i
                                    className="font-xs ti-pinterest text-white"></i></a></li>
                            </ul>
                        </div>
                        <Card.Body className="p-0 d-flex">
                            <ul className="d-flex align-items-center justify-content-between mt-2">
                                <li className="me-1"><a href="#" className="btn-round-lg bg-tumblr"><i
                                    className="font-xs ti-tumblr text-white"></i></a></li>
                                <li className="me-1"><a href="#" className="btn-round-lg bg-youtube"><i
                                    className="font-xs ti-youtube text-white"></i></a></li>
                                <li className="me-1"><a href="#" className="btn-round-lg bg-flicker"><i
                                    className="font-xs ti-flickr text-white"></i></a></li>
                                <li className="me-1"><a href="#" className="btn-round-lg bg-black"><i
                                    className="font-xs ti-vimeo-alt text-white"></i></a></li>
                                <li><a href="#" className="btn-round-lg bg-whatsup"><i
                                    className="font-xs feather-phone text-white"></i></a></li>
                            </ul>
                        </Card.Body>
                        <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">Copy
                            Link</h4>
                        <i className="feather-copy position-absolute right-35 mt-3 font-xs text-grey-500"></i>
                        <input type="text" value="https://socia.be/1rGxjoJKVF0" readOnly
                               className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"/>
                    </div>
                </Card.Body>
                <Comment data={data}/>
            </Card>
        </>
    )
}

export default PostDetail;