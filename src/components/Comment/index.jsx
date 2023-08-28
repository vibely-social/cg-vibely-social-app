import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';
import ppl from "~/assets/img/ppl.png"
import CommentLine from './CommentLine';
import "./index.css"
import { VIBELY_API } from '~/app/constants.js';
import axios from 'axios';
import { getAccessToken , getStoredUserData } from '~/service/accountService.js';
import { commentPosts } from '~/api/postApi';
import { BeatLoader } from 'react-spinners';


function Comment({data,isShowComment}) {   
    const token = getAccessToken()
    const ref = useRef()
    const [comments,setComments] = useState([])
    const [file,setFile] = useState(null)
    const [inputComment,setInputComment] = useState("")
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
        if(event.key == "Enter" && inputComment != "") {
          let newComment =  ref.current.value
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
                ref.current.value = ""
                setComments((comments) => [...comments, response.data])
              })
              } catch (error) {
                ref.current.value = ""
              }
      }
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
              <Card.Body className="p-0 pt-3 d-flex justify-content-center pb-0 border-dark shadow-xs mt-3">
                  <figure className="avatar ms-0 mt-1 top-2 " ><img  style={{width: '40px',height: "40px",overflow: 'hidden'}} src={user.avatar ? user?.avatar : ppl}  className="shadow-sm rounded-circle" /></figure>
                  <input id="input" type='text' onKeyDown={handleEnterDown}  onChange={(e) => setInputComment(e.target.value)} ref={ref} style={{height: "50px",width: "90%",resize: "none"}} className="float-right ms-2 bor-0 rounded-xxl p-2 ps-3 font-xsss text-grey-600 fw-500 border-light-md " placeholder="Write a comment..." />
              </Card.Body>
              <Card.Body className="d-flex p-0 mt-0" id="comment-section">
                <div className="pt-0 w-100 position-relative scroll-bar bg-white " style={{maxHeight: "400px"}}>
                    <div className="comment-body p-0 pt-1">
                      {isLoading && <div className='d-flex justify-content-center p-2'><BeatLoader color="#36d7b7" /></div>}
                      {comments && comments.map((comment,index) => {
                        return <CommentLine key={index} data={comment}/>
                    })}
                    </div>
                </div>
              </Card.Body>
            </>
          );
      }

export default Comment;