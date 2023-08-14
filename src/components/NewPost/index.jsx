import { Card } from "react-bootstrap";

function NewPost() {
    
    return ( 
        <Card className="w-100 shadow-xss rounded-xxl border-0 ps-2 pe-4 pb-2 mb-3">
            <Card.Body className="p-0">
                </Card.Body>
                <Card.Body className="p-0 mt-3 d-flex justify-content-center pb-2">
                    <figure className="avatar ms-0 mt-1 top-2" ><img style={{width: '35px',height: "40px",overflow: 'hidden'}} src="https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/366348238_2171933089864277_2962341750518570036_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=svmS3UxE1twAX9tiiXs&_nc_ht=scontent.fhan3-4.fna&oh=00_AfBJOfNNdo0j4u8mJG7cARKhHWtfYfuo6VuATBlrqxeWXQ&oe=64DED8A7"  className="shadow-sm rounded-circle" /></figure>
                    <textarea name="message" style={{height: "50px",width: "90%"}} className="float-right ms-2 bor-0 rounded-xxl p-2 ps-3 font-xssss text-grey-500 fw-500 border-light-md " placeholder="What's on your mind?" />
                </Card.Body>
                <div className=" d-flex justify-content-center border-top p-2 pt-3 mt-0">
                        <a href="#" className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"><i className="font-md text-danger feather-video me-2" /><span className="d-none-xs">Live Video</span></a>
                        <a href="#" className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"><i className="font-md text-success feather-image me-2" /><span className="d-none-xs">Photo/Video</span></a>
                        <a href="#" className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"><i className="font-md text-warning feather-camera me-2" /><span className="d-none-xs">Feeling/Activity</span></a>
                </div>
        </Card>
     );
}

export default NewPost;