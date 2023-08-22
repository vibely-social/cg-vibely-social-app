import React from 'react';
import CommentSection from "../../Comment/CommentSection/index.jsx";
import "./index.css"
import {getPostDetails} from "~/features/getPostDetails/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";

const MediaPost = ({id}) => {
    const dispatch = useDispatch();
    const postDetail = useSelector(state => state.postDetails.post);

    useEffect(() => {
        dispatch(getPostDetails(id))
        console.log(id);
    }, [dispatch, id]);

    return (
        <div className="right-comment chat-left scroll-bar theme-dark-bg"
            style={{margin: '20px'}}>
            {/* Comment Header */}
            <div className="card-body ps-2 pe-4 pb-0 d-flex">
                <figure className="avatar me-3">
                    <img src="https://cdn5.vectorstock.com/i/1000x1000/43/94/default-avatar-photo-placeholder-icon-grey-vector-38594394.jpg" alt="image" className="shadow-sm rounded-circle w45" />
                </figure>
                <h4 className="fw-700 text-grey-900 font-xssss mt-1 text-left">Hurin Seary <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">2 hours ago</span></h4>
                <a href="#" className="ms-auto"><i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></a>
            </div>
            <p>{postDetail.textContent}</p>
            {/* Like and Comment Counts */}
            <div className="card-body d-flex ps-2 pe-4 pt-0 mt-0">
                <a href="#" className="d-flex align-items-center fw-600 text-grey-900 lh-26 font-xssss me-3 text-dark">
                    <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>
                    <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
                    2.8K Like
                </a>
                <a href="#" className="d-flex align-items-center fw-600 text-grey-900 lh-26 font-xssss text-dark">
                    <i className="feather-message-circle text-grey-900 btn-round-sm font-lg text-dark"></i>
                    22 Comment
                </a>
            </div>

            <CommentSection/>

        </div>
    );
}

export default MediaPost;
