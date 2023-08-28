import ppl from "~/assets/img/ppl.png"

function ReplyComment() {
    return ( 
        <div className='reply-comment ps-5'>
            <div className="comment-item ">
                <div className='d-flex'>
                    <div className="comment-user">
                        <figure className="avatar"><img src={ppl} /></figure>
                    <div>
                                        {/* <div className="time">01:35 PM</div> */}
                </div>
                    </div>
                        <div className="comment-wrap shadow-xs pe-2">
                            <h5 className='user-name'>Byrom Guittet</h5>
                                <p className='font-xsss' style={{}}>I've found some cool photos for our travel app.</p>
                        </div>
                    </div>
                 <div className='d-flex pt-0 me-5 justify-content-center font-xssss fw-600' style={{marginTop: "-10px"}}>
                        <div className="comment-btn ps-2 text-dark">Like</div>
                        <div className="comment-btn text-dark ">Reply</div>
                        <div className="comment-btn text-dark">3 hours ago</div>
                </div>
            </div>
         </div>
     );
}

export default ReplyComment;