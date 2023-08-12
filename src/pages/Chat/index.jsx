function Chat() {
    return (
        <div className="middle-sidebar-bottom d-flex pt-0 mt-3">
            <div className="middle-sidebar-left ms-0 ps-0 pe-0 me-0 d-flex justify-content-center" style={{maxWidth: '100%'}}>
                <div className="container ms-2 mb-0 pb-0 me-1" style={{maxWidth:'96%'}}>
                    <div className="col-lg-12 position-relative">
                        <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar bg-white theme-dark-bg rounded-start-3">
                            <div className="chat-body p-3 ">
                                <div className="messages-content pb-0">
                                    <div className="message-item">
                                        <div className="message-user">
                                            <figure className="avatar">
                                                <img src="https://via.placeholder.com/50x50.png" alt="image"/>
                                            </figure>
                                            <div>
                                                <h5>Byrom Guittet</h5>
                                                <div className="time">01:35 PM</div>
                                            </div>
                                        </div>
                                        <div className="message-wrap">Im fine, how are you 😃</div>
                                    </div>

                                    <div className="message-item outgoing-message">
                                        <div className="message-user">
                                            <figure className="avatar">
                                                <img src="https://via.placeholder.com/50x50.png" alt="image"/>
                                            </figure>
                                            <div>
                                                <h5>Byrom Guittet</h5>
                                                <div className="time">01:35 PM<i
                                                    className="ti-double-check text-info"></i></div>
                                            </div>
                                        </div>
                                        <div className="message-wrap">I want those files for you. I want you to
                                            send 1
                                            PDF and 1 image file.
                                        </div>
                                    </div>

                                    <div className="message-item">
                                        <div className="message-user">
                                            <figure className="avatar">
                                                <img src="https://via.placeholder.com/50x50.png" alt="image"/>
                                            </figure>
                                            <div>
                                                <h5>Byrom Guittet</h5>
                                                <div className="time">01:35 PM</div>
                                            </div>
                                        </div>
                                        <div className="message-wrap">Ive found some cool photos for our travel
                                            app.
                                        </div>
                                    </div>

                                    <div className="message-item outgoing-message">
                                        <div className="message-user">
                                            <figure className="avatar">
                                                <img src="https://via.placeholder.com/50x50.png" alt="image"/>
                                            </figure>
                                            <div>
                                                <h5>Byrom Guittet</h5>
                                                <div className="time">01:35 PM<i
                                                    className="ti-double-check text-info"></i></div>
                                            </div>
                                        </div>
                                        <div className="message-wrap">Hey mate! How are things going ?</div>
                                    </div>

                                    <div className="message-item">
                                        <div className="message-user">
                                            <figure className="avatar">
                                                <img src="https://via.placeholder.com/50x50.png" alt="image"/>
                                            </figure>
                                            <div>
                                                <h5>Byrom Guittet</h5>
                                                <div className="time">01:35 PM</div>
                                            </div>
                                        </div>
                                        <figure>
                                            <img src="https://via.placeholder.com/300x300.png"
                                                 className="w-25 img-fluid rounded-3" alt="image"/>
                                        </figure>


                                    </div>

                                    <div className="message-item outgoing-message">
                                        <div className="message-user">
                                            <figure className="avatar">
                                                <img src="https://via.placeholder.com/50x50.png" alt="image"/>
                                            </figure>
                                            <div>
                                                <h5>Byrom Guittet</h5>
                                                <div className="time">01:35 PM<i
                                                    className="ti-double-check text-info"></i></div>
                                            </div>
                                        </div>
                                        <div className="message-wrap">Hey mate! How are
                                            things going ?
                                        </div>

                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                        <div className="chat-bottom dark-bg p-3 shadow-none theme-dark-bg rounded-3" style={{width: "98%"}}>
                            <form className="chat-form">
                                <button className="bg-grey float-left"><i
                                    className="ti-microphone text-grey-600"></i>
                                </button>
                                <div className="form-group">
                                    <input type="text" placeholder="Start typing.."/>
                                </div>
                                <button className="bg-current"><i className="ti-arrow-right text-white"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;