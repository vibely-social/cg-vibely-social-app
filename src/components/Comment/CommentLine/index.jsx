import React from 'react';
import ppl from "~/assets/img/ppl.png"
import "./index.css"
import ReplyComment from '../ReplyComment';
import ReactTimeAgo from 'react-time-ago';
import { likeComment } from '~/api/postApi';
import { useState , Fragment } from 'react';
import { Card ,Form} from 'react-bootstrap';
import { getStoredUserData , getAccessToken } from '~/service/accountService';
import { VIBELY_API } from '~/app/constants';
import axios from 'axios';
import WrapText from "~/utils/WrapText.jsx";
import { useRef } from 'react';
import { Popover , Transition } from '@headlessui/react';
import { ListGroup} from 'react-bootstrap';




function CommentLine({data,commentData}) {

    const [like,setLike] = useState(commentData.likeCount)
    const [isLiked,setIsLiked] = useState(commentData.liked)
    const [content, setContent] = useState(commentData.content)
    const [isReply,setIsReply] = useState(false)
    const [inputContent,setInputContent] = useState("")
    const [file,setFile] = useState(null)
    const [replys,setReply] = useState(commentData.replyCommentDTOs)
    const [isShowReply,setIsShowReply] = useState(false)
    const [showToolkit,setShowToolkit] = useState(false)
    const user = getStoredUserData() 
    const token = getAccessToken()
    const ref = useRef();

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

    const handleShowReply = () => {
        setIsShowReply(state => state = !isShowReply)
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
                  if(!replys){
                    setReply([])
                  }
                  setReply((replys) => [...replys, response.data])
                })
                } catch (error) {
                  setInputContent("")
            }
        }
      }

      const handleEditComment = async () => {
        let payload = {
            authorId: commentData.author.id,
            commentId: commentData.commentId,
            content: "Edited",
        }
        const formData = new FormData();
        formData.append("payload" , JSON.stringify(payload))
            try {
                const response = await axios.put(`${VIBELY_API}/posts/${data.id}/comment`,formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer '+ token,
            }}).then((response) => {
                setContent(response.data.content)
                })
            } catch (error) {
                return error.response
            }
      }

    return (    
        <div className="comment-content">
            <div className="comment-item mb-0 pb-1 mt-1"
                onMouseEnter={() => setShowToolkit(true)}
                onClick={() => setShowToolkit(true)}
                onMouseLeave={() => setShowToolkit(false)}>
                <div className='d-flex '>
                 <div className="comment-user d-flex align-items-start mt-3">
                     <figure className="avatar">
                        <img src={commentData.author.avatar ? commentData.author.avatar : ppl} />
                    </figure>
                    <div>
                    </div>
                         </div>
                            <div className="comment-wrap shadow-xs pe-2 ps-2 p-2 mt-1 pt-2 mb-1">
                                <h5 className='user-name '>
                                    {commentData.author.firstName + " " + commentData.author.lastName}
                                </h5>
                                <p className='font-xss roboto-font' style={{overflowWrap: 'anywhere'}}>
                                    <WrapText content={content} />
                                </p>
                            </div>
                                <Popover className="edit-box">
                                    {showToolkit && (commentData.author.id == user.id) && 
                                            <Popover.Button as='div'>
                                                <i className='feather-more-horizontal hover-vibe rounded-circle edit-btn'/>
                                            </Popover.Button>}
                                    <Transition
                                         as={Fragment}
                                         enter="transition ease-out duration-200"
                                         enterFrom="opacity-0 translate-x-1"
                                        enterTo="opacity-100 translate-x-20"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                        >
                                         <Popover.Panel className="absolute z-10 mt-3 me-5 pe-3">
                                             <div className="overflow-hidden border-2 rounded-md  shadow-lg ring-1 ring-opacity-5">
                                              <div className="relative ">
                                                  <ListGroup className='bg-white p-1'>
                                                            <ListGroup.Item  
                                                                className='p-1 hover-vibe text-dark font-xsss border-0'
                                                                onClick={handleEditComment}>
                                                                    Edit
                                                            </ListGroup.Item>
                                                      <ListGroup.Item className='p-1 hover-vibe text-dark font-xsss border-0'>Delete</ListGroup.Item>
                                                </ListGroup>
                                              </div>
                                         </div>
                                     </Popover.Panel>
                                 </Transition>
                         </Popover>
                        </div>
                        <div className='d-flex pt-1 justify-content-start font-xssss fw-500' 
                            style={{
                                    marginTop: "-10px",
                                    marginLeft: "45px"
                                    }}>
                                <div 
                                    className={"comment-btn ps-1 rounded-xl me-0 hover-vibe rounded-xl me-2 " + (isLiked ? "text-vibe" : "text-dark")}
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
                  
                    {(replys?.length > 0) && <div className='replyshow-btn hover-vibe font-xssss fw-500 text-grey-800'
                        onClick={handleShowReply}>
                            {!isShowReply 

                            ?  <><i className='feather-corner-down-right'></i>
                                    <span> Show {replys?.length} Replies</span></> 

                            : <><i className='feather-corner-left-up'></i>
                                    <span> Hide {replys?.length} Replies</span></>   
                            }
                    </div>}
            </div>  
                {isShowReply && replys?.map((reply,index) => {
                            return <ReplyComment 
                                            key={reply.commentId} 
                                            data={data} 
                                            replyData={reply}
                                            commentData={commentData}
                                            setIsReply={setIsReply}
                                            setInputContent={setInputContent}
                                            />})}

                 {isReply && 
                 <Card.Body className="d-flex p-0 ms-3 mb-1 ps-5" 
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
