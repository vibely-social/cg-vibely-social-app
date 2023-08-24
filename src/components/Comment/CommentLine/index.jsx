import React from 'react';

function CommentLine({ username, avatar, text }) {
    return (
        <div className="card w-100 border-0 shadow-none right-scroll-bar">
            <div className="card-body pt-4 pb-3 pe-4 d-block ps-5">
                <figure className="avatar position-absolute left-0 ms-2 mt-1">
                    <img src={avatar} alt="Avatar" className="shadow-sm rounded-circle w35" />
                </figure>
                <div className="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg">
                    <h4 className="fw-700 text-grey-900 font-xssss mt-0 mb-1">
                        {username} <a href="#" className="ms-auto"><i className="ti-more-alt float-right text-grey-800 font-xsss"></i></a>
                    </h4>
                    <p className="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default CommentLine;
