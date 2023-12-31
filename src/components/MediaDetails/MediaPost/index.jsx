import React, {useEffect} from 'react';
import Comment from "../../Comment";
import "./index.css"
import {getMediaPostDetails} from "~/features/getMediaPostDetails/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import ReactTimeAgo from "react-time-ago";

const MediaPost = ({id}) => {
    const dispatch = useDispatch();
    const mediaPostDetail = useSelector(state => state.mediaPostDetails.post);

    useEffect(() => {
        dispatch(getMediaPostDetails(id))
    }, [dispatch, id]);

    return (
        <div className="col-3 right-comment chat-left scroll-bar theme-dark-bg"
             style={{padding: '20px'}}>
            {/* Comment Header */}
            <div className="card-body ps-2 pe-4 pb-0 d-flex">
                <figure className=" me-3">
                    <img src={`${mediaPostDetail.author?.avatar || "https://i.pravatar.cc/100"}`}
                         alt="image" className="shadow-sm avatar-45"/>
                </figure>

                <h4 className="fw-700 text-grey-900 font-xssss mt-1 text-left">
                    {`${mediaPostDetail.author.firstName || ""} ${mediaPostDetail.author.lastName || ""}`}
                    <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                        {
                            <ReactTimeAgo date={Date.parse(mediaPostDetail.createdDate)} locale="en"/>
                        }
                    </span>
                </h4>
                <a href="#" className="ms-auto"><i
                    className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></a>
            </div>
            <p style={{
                color: "black",
                margin: "5px",
                whiteSpace: "pre-line"
            }}>
                {mediaPostDetail.content}
            </p>
            {/* Like and Comment Counts */}
            <div className="card-body d-flex ps-2 pe-4 pt-0 pb-2 mt-2 border-bottom">
                <a href="#" className="d-flex align-items-center fw-600 text-grey-900 lh-26 font-xssss me-3 text-dark">
                    <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>
                    <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
                    {mediaPostDetail.like}
                </a>
                <a href="#" className="d-flex align-items-center fw-600 text-grey-900 lh-26 font-xssss text-dark">
                    <i className="feather-message-circle text-grey-900 btn-round-sm font-lg text-dark"></i>
                    {mediaPostDetail.commentCount}
                </a>
            </div>

            <Comment data={mediaPostDetail} isShowComment={false}/>

        </div>
    );
}

export default MediaPost;
