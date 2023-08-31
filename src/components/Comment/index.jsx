import React, { useState, useEffect, useRef } from 'react';
import { Card,Form } from 'react-bootstrap';
import ppl from "~/assets/img/ppl.png"
import CommentLine from './CommentLine';
import "./index.css"
import { VIBELY_API } from '~/app/constants.js';
import axios from 'axios';
import { getAccessToken , getStoredUserData } from '~/service/accountService.js';
import { commentPosts } from '~/api/postApi';
import { BeatLoader } from 'react-spinners';
import { set } from 'date-fns';


function Comment({data,isShowComment}) {   
    const token = getAccessToken()
    const [comments,setComments] = useState([])
    const [inputContent,setInputContent] = useState("")
    const [file,setFile] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const user = getStoredUserData()
     
    const getComments = async() => {
      setIsLoading(true)
      const response = await commentPosts(data.id)
      .then(response => {
        setComments(response)
        setIsLoading(false)
      })
    }
    
    useEffect(() => {
      if(isShowComment) getComments()
    },[isShowComment])


    const  handleEnterDown = async (event)  => {
      let newComment =  inputContent
        if(event.key == "Enter" && inputContent != "") {
          const formData = new FormData();
          formData.append('newComment', newComment)
        try {
              const response =  await axios.post(`${VIBELY_API}/posts/${data.id}/comment`, formData, 
              {
                headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer '+ token,
              },})
              .then((response) => {
                setInputContent("")
                setComments((comments) => [...comments, response.data])
              })
              } catch (error) {
                setInputContent("")
              }
      }
    }


    
    const handleSelect = (event) => {
      event.target.style.height = 'auto'
      event.target.style.height = event.target.scrollHeight + "px"
      event.target.style.paddingBottom  = "px"
    }
    // const socket = io('http://localhost:4000');    
    // socket.emit('joinChannel', channelName);
    // const handleEnterDown = (event) => {
    //          let comment = event
    //          socket.emit('sendComment', ({ channelName, comment }));
    // }

    // useEffect(() => {
    //     socket.on('newComment', (comment) => {
    //         setComments((prevComments) => [...prevComments, comment]);
    //     });
    //     return () => {
    //       socket.off('newComment');
    //     };
    // }, []);
    
      return (
            <>
              {!isShowComment && <Card.Body className="p-0 pt-3 d-flex pb-0 border-dark mt-3" style={{overflowX: "hidden"}}>
                  <figure className="avatar ms-0 mt-1 top-2 " >
                          <img  
                              style={{width: '40px',height: "38px",overflow: 'hidden'}} 
                              src={user.avatar ? user?.avatar : ppl}  
                              className="shadow-sm rounded-circle" />
                    </figure>
                    <Form className='comment-box rounded-xxl ms-2 bor-0 border-light-md'>
                          <textarea 
                                  id="input"
                                  onKeyDown={handleEnterDown}  
                                  onBlur={(e)=> e.target.style.height = "40px"}
                                  onSelectCapture={handleSelect}
                                  value={inputContent}
                                  onChange={(e) => setInputContent(e.target.value)}
                                  className="comment-input ms-0 p-1 ps-3 font-xsss text-grey-600 fw-500" 
                                  placeholder="Write a comment..." />
                                  
                    </Form>
              </Card.Body>}
              <Card.Body 
                      className="d-flex  p-0 mt-2" 
                      id="comment-section">
                <div 
                      className="pt-0 w-100 position-relative scroll-bar bg-white " 
                      style={{maxHeight: "400px"}}>
                    <div 
                        className="comment-body p-0 pt-1">
                          {isLoading && <div className='d-flex justify-content-center p-2'><BeatLoader color="#36d7b7" /></div>}
                          {comments && comments.map((comment,index) => {
                            return <CommentLine key={index} data={data} commentData={comment}/>
                         })}
                    </div>
                </div>
              </Card.Body>
              
              {isShowComment && <Card.Body className="d-flex p-0 mt-2">
                        <figure className="avatar ms-0 mt-1 top-2 " >
                          <img  
                              style={{width: '35px',height: "32px",overflow: 'hidden'}} 
                              src={user.avatar ? user?.avatar : ppl}  
                              className="shadow-sm input-comment-avatar rounded-circle" />
                        </figure>
                  <Form className='comment-box rounded-xxl mt-1 ms-2 border-light-md' >
                        <Form.Group className='d-flex '>
                             <textarea id="input"
                                onKeyDown={handleEnterDown}  
                                onBlur={(e)=>e.target.style.height = "50px"}
                                onSelectCapture={handleSelect}
                                onChange={(e) => setInputContent(e.target.value)}
                                value={inputContent}
                                className="comment-input ms-0 p-1 ps-3 font-xsss text-grey-600 fw-500" 
                                placeholder="Write a comment..." />
                        </Form.Group>
                  </Form>
              </Card.Body>}
              
            </>
          );
      }

export default Comment;