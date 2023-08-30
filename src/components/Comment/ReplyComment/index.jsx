import ppl from "~/assets/img/ppl.png"
import { useState } from "react";
import ReactTimeAgo from "react-time-ago";
import "./index.css"
import {wrapText} from "~/utils/wrapText";
import { likeReply } from "~/api/postApi";

    function ReplyComment({data,commentData,replyData,setIsReply,setInputContent}) {
        const [like,setLike] = useState(replyData.likeCount)
        const [isLiked,setIsLiked] = useState(replyData.liked)
        const handleLike = async () => {
            alert(data.id + " " + commentData.commentId + " " + replyData.commentId)
            const response = await likeReply(data.id,commentData.commentId,replyData?.commentId)
            .then(response => {
                setLike(response.likeCount)
                setIsLiked(response.isLiked)
              })
        }
        const handleReply = () => {
            setIsReply(true)
            setReplyTarget(replyData.author)
        }

        return ( 
            <div className='reply-comment ps-5' >
                <div className="comment-item ">
                    <div className='d-flex'>
                        <div className="comment-user ms-1" >
                            <figure className="avatar" >
                                <img src={replyData.author.avatar ? replyData.author.avatar : ppl} style={{width: '30px',height: "28px"}} />
                            </figure>
                        <div>
                        </div>
                            </div>
                                <div className="comment-wrap shadow-xs pe-2 mb-1">
                                    <h5 className='user-name'>{replyData.author.firstName + " " + replyData.author.lastName}</h5>
                                        <p className='font-xsss fw-500' >{wrapText(replyData?.content)}</p>
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
                            <div className="comment-btn text-dark"><ReactTimeAgo date={replyData.date} locale="en-US"/></div>
                    </div>
                </div>
            </div>
        );
    }

export default ReplyComment;