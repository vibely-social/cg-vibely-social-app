import React from 'react';
import { Card } from 'react-bootstrap';
import ppl from "~/assets/img/ppl.png"
import "./index.css"
import ReplyComment from '../ReplyComment';
import ReactTimeAgo from 'react-time-ago';

function CommentLine({data}) {
    return (    
        <div className="comment-content pb-0">
            <div className="comment-item ">
                <div className='d-flex'>
                 <div className="comment-user">
                     <figure className="avatar"><img src={data.author.avatar ? data.author.avatar : ppl} /></figure>
                    <div>
                    {/* <div className="time">01:35 PM</div> */}
                    </div>
                     </div>
                        <div className="comment-wrap shadow-xs pe-2" >
                            <h5 className='user-name'>{data.author.firstName + " " + data.author.lastName}</h5>
                            <p className='font-xsss' style={{}}>{data.content}</p>
                        </div>
                     </div>
                    <div className='d-flex pt-1 me-5 justify-content-start font-xssss ms-5 fw-600' style={{marginTop: "-10px"}}>
                            <div className={"comment-btn ps-2 " + (data.isLiked ? "text-vibe" : "text-dark")}>
                                {data.likes ? data.likes.length : 0 } Like
                            </div>
                        <div className="comment-btn text-dark">Reply</div>
                        <div className="comment-btn text-dark"><ReactTimeAgo date={data.date} locale="en-US"/></div>
                    </div>
            </div>  
             {data.replyCommentDTOs?.map((comment,index) => {
                        return <ReplyComment key={index} data={comment}/>
                    })}
        </div>
    );
};

export default CommentLine;
