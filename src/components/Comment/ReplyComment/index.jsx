import ppl from "~/assets/img/ppl.png"
import { useState } from "react";
import ReactTimeAgo from "react-time-ago";
import "./index.css"
import {wrapText} from "~/utils/wrapText";
import { likeReply } from "~/api/postApi";

    function ReplyComment({postId,commentID,reply,setIsReply,setReplyTarget,ref}) {
        const [like,setLike] = useState(reply.likeCount)
        const [isLiked,setIsLiked] = useState(reply.liked)
        const handleLike = async () => {
            const response = await likeReply(postId,commentID,reply?.commentId)
            .then(response => {
                setLike(response.likeCount)
                setIsLiked(response.isLiked)
              })
        }
        const handleReply = () => {
            setIsReply(true)
            setReplyTarget(reply.author)
        }

        return ( 
            <div className='reply-comment ps-5' >
                <div className="comment-item ">
                    <div className='d-flex'>
                        <div className="comment-user ms-1" >
                            <figure className="avatar" >
                                <img src={reply.author.avatar ? reply.author.avatar : ppl} style={{width: '30px',height: "28px"}} />
                            </figure>
                        <div>
                        </div>
                            </div>
                                <div className="comment-wrap shadow-xs pe-2 mb-1">
                                    <h5 className='user-name'>{reply.author.firstName + " " + reply.author.lastName}</h5>
                                        <p className='font-xsss fw-500' >{wrapText(reply?.content)}</p>
                                </div>
                            </div>
                            <div className='d-flex pt-1 justify-content-start font-xssss fw-600' 
                                    style={{marginTop: "-10px",marginLeft: "45px"}}>
                                <div 
                                    className={"comment-btn ps-2 rounded-xl me-0 hover-vibe rounded-xl me-2 " 
                                                + (isLiked ? "text-vibe" : "text-dark")}
                                    >
                                    <span className='p-1' onClick={handleLike}> {like ? like : 0 } Like</span>
                                </div>
                                <div 
                                    className="comment-btn text-dark hover-vibe rounded-xl me-2" 
                                    onClick={handleReply}>
                                    <span className='p-1' >
                                        Reply
                                    </span>
                                </div>
                            <div className="comment-btn text-dark"><ReactTimeAgo date={reply.date} locale="en-US"/></div>
                    </div>
                </div>
            </div>
        );
    }

export default ReplyComment;