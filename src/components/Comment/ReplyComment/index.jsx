import ppl from "~/assets/img/ppl.png"
import { useState } from "react";
import ReactTimeAgo from "react-time-ago";
import "./index.css"

    function ReplyComment({postId,data}) {
        const [like,setLike] = useState(data.likeCount)
        const [isLiked,setIsLiked] = useState(data.liked)
        return ( 
            <div className='reply-comment ps-5 '>
                <div className="comment-item ">
                    <div className='d-flex'>
                        <div className="comment-user ms-1">
                            <figure className="avatar"><img src={data.author.avatar ? data.author.avatar : ppl} style={{width: '30px',height: "28px"}} /></figure>
                        <div>
                        </div>
                            </div>
                                <div className="comment-wrap shadow-xs pe-2">
                                    <h5 className='user-name'>{data.author.firstName + " " + data.author.lastName}</h5>
                                        <p className='font-xsss' >{data?.content}</p>
                                </div>
                            </div>
                            <div className='d-flex pt-1 justify-content-start font-xssss fw-600' 
                                    style={{marginTop: "-10px",marginLeft: "45px"}}>
                                <div 
                                    className={"comment-btn ps-2 rounded-xl me-0 hover-vibe rounded-xl me-2 " 
                                                + (isLiked ? "text-vibe" : "text-dark")}
                                    >
                                    <span className='p-1'> {like ? like : 0 } Like</span>
                                </div>
                                <div 
                                    className="comment-btn text-dark hover-vibe rounded-xl me-2" >
                                     {/* onClick={() => setIsReply(true)} */}
                                    <span className='p-1'>
                                        Reply
                                    </span>
                                </div>
                            <div className="comment-btn text-dark"><ReactTimeAgo date={data.date} locale="en-US"/></div>
                    </div>
                </div>
            </div>
        );
    }

export default ReplyComment;