import React, { useState, useEffect } from 'react';
import CommentLine from "../CommentLine/index.jsx";

function CommentSection() {
    const [comments, setComments] = useState([
        {
            username: "Test1",
            avatar: "https://cdn5.vectorstock.com/i/1000x1000/43/94/default-avatar-photo-placeholder-icon-grey-vector-38594394.jpg",
            text: "Good one"
        },
        {
            username: "Test2",
            avatar: "https://cdn5.vectorstock.com/i/1000x1000/43/94/default-avatar-photo-placeholder-icon-grey-vector-38594394.jpg",
            text: "ZA WARUDO"
        }
    ]);

    const [newComment, setNewComment] = useState('');

    useEffect(() => {

    }, []);

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = () => {
        setNewComment('');
    };

    return (
        <div>
            {comments.map((comment, index) => (
                <CommentLine
                    key={index}
                    username={comment.username}
                    avatar={comment.avatar}
                    text={comment.text}
                />
            ))}
            <div className="card w-100 border-0 shadow-none right-scroll-bar">
                <div className="card-body border-top-xs pt-4 pb-3 pe-4 d-block ps-5">
                    <figure className="avatar position-absolute left-0 ms-2 mt-1">
                        <img src="https://cdn5.vectorstock.com/i/1000x1000/43/94/default-avatar-photo-placeholder-icon-grey-vector-38594394.jpg" alt="Your Avatar" className="shadow-sm rounded-circle w35" />
                    </figure>
                    <div className="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg">
                        <input
                            type="text"
                            placeholder="Write a comment..."
                            value={newComment}
                            onChange={handleCommentChange}
                            className="form-control border-0 bg-transparent font-xssss"
                        />
                        <button
                            onClick={handleCommentSubmit}
                            className="btn btn-primary btn-sm px-3 mt-2"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentSection;
