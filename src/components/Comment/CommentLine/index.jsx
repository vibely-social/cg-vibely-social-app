import React from 'react';
import ppl from "~/assets/img/ppl.png"
import "./index.css"
import ReplyComment from '../ReplyComment';
import ReactTimeAgo from 'react-time-ago';
import { likeComment } from '~/api/postApi';
import { useState } from 'react';
import { Card ,Form} from 'react-bootstrap';
import { getStoredUserData , getAccessToken } from '~/service/accountService';
import { VIBELY_API } from '~/app/constants';
import axios from 'axios';
import {wrapText} from "~/utils/wrapText";
import { useRef } from 'react';



function CommentLine({data,commentData}) {

    const [like,setLike] = useState(commentData.likeCount)
    const [isLiked,setIsLiked] = useState(commentData.liked)
    const [isReply,setIsReply] = useState(false)
    const [inputContent,setInputContent] = useState("")
    const [file,setFile] = useState(null)
    const [replys,setReply] = useState(commentData.replyCommentDTOs)
    const user = getStoredUserData()
    const token = getAccessToken()
    const ref=useRef();
    let commentID = commentData.commentId

    const handleLike = async () => {
        const response = await likeComment(commentData.commentId,data.id)
        .then(response => {
            setLike(response.likeCount)
            setIsLiked(response.isLiked)
          })
    }
    const handleSelect = (event) => {
        event.target.style.height = 'auto'
        event.target.style.height = event.target.scrollHeight + "px"
        event.target.style.paddingBottom  = 0 +"px"
      }


      
    const handleEnterDown = async (event)  => {
          if(event.key == "Enter" && inputContent != "") {
            const formData = new FormData();
            formData.append('reply', inputContent)
          try {
                const response =  await axios.post(`${VIBELY_API}/posts/${data.id}/reply/${commentData.commentId}`, formData, 
                {
                  headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': 'Bearer '+ token,
                },})
                .then((response) => {
                  setInputContent("")
                  setReply((replys) => [...replys, response.data])
                })
                } catch (error) {
                  setInputContent("")
              }
        }
      }

    return (    
        <div className="comment-content ">
            <div className="comment-item mb-0 pb-2 mt-2 ">
                <div className='d-flex'>
                 <div className="comment-user">
                     <figure className="avatar">
                        <img src={commentData.author.avatar ? commentData.author.avatar : ppl} />
                    </figure>
                    <div>
                    </div>
                         </div>
                            <div className="comment-wrap shadow-xs pe-2 mb-1" >
                                <h5 className='user-name'>
                                    {commentData.author.firstName + " " + commentData.author.lastName}
                                </h5>
                                <p className='font-xsss fw-600' style={{overflowWrap: 'anywhere'}}>
                                    {wrapText(commentData.content)}
                                </p>
                            </div>
                        </div>
                        <div className='d-flex pt-1 justify-content-start font-xssss fw-500' 
                            style={{
                                    marginTop: "-10px",
                                    marginLeft: "45px"
                                    }}>
                                <div 
                                    className={"comment-btn ps-2 rounded-xl me-0 hover-vibe rounded-xl me-2 " + (isLiked ? "text-vibe" : "text-dark")}
                                    onClick={handleLike}>
                                    <span className='p-1'> {like ? like : 0 } Like</span>
                                </div>
                                <div 
                                    className="comment-btn text-dark hover-vibe rounded-xl me-2" 
                                    onClick={() => setIsReply(true)}>
                                    <span className='p-1' 
                                        onClick={() => setIsReply(!isReply)}>
                                        Reply
                                    </span>
                                </div>
                            <div className="comment-btn text-dark">
                                <ReactTimeAgo date={commentData.date} locale="en-US"/>
                            </div>
                    </div>
                    
            </div>  
           
                {replys?.map((reply,index) => {
                            return <ReplyComment 
                                            key={reply.commentId} 
                                            data={data} 
                                            replyData={reply}
                                            commentData={commentData}
                                            setIsReply={setIsReply}
                                            setInputContent={setInputContent}
                                            />})}

                 {isReply && 
                 <Card.Body className="d-flex p-0 ms-3 ps-5" 
                            style={{width: '90%'}}>
                        <figure 
                            className="avatar ms-0  p-1 top-2 " >
                          <img  
                              style={{width:'30px',height:"28px"}} 
                              src={user.avatar ? user?.avatar : ppl}  
                              className="shadow-sm rounded-circle" />
                        </figure>
                        <Form 
                            className='reply-box bg-transparent rounded-xxl mt-1 ms-2 border-light-md' >
                            <Form.Group 
                                className='d-flex '>
                                <textarea 
                                    id="input"
                                    onKeyDown={handleEnterDown}  
                                    onBlur={(e)=>e.target.style.height = "40px"}
                                    onSelectCapture={handleSelect}
                                    onChange={(e) => setInputContent(e.target.value)}
                                    ref={ref}
                                    value={inputContent}
                                    className="reply-input ms-0 p-1 ps-3 font-xsss text-grey-600 w-100 fw-500" 
                                    placeholder="Write a comment..." />
                            </Form.Group>
                       </Form>
                  </Card.Body>}
                    
        </div>
    );
};

export default CommentLine;
