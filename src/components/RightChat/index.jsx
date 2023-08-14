import {ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";

function RightChat() {
    const isOpenChat = useSelector((state) => state.openChat.isOn);
    return ( 
        <div className={"right-chat nav-wrap mt-2 right-scroll-bar " + (isOpenChat ? "active-sidebar" : "")}>
            <div className="middle-sidebar-right-content bg-white shadow-xss rounded-xxl">
                <div className="section full pe-3 ps-3 pt-3 position-relative feed-body " style={{height: '100vh'}}>
                <span className="font-md text-vibe fw-600 ls-3">Chats  <i className="feather-message-circle font-xs align-text-top"/></span> 
                <ListGroup as="ul" className="list-group-flush">
                    <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <figure className="avatar float-left mb-0 me-2">
                        <img src="https://via.placeholder.com/50x50.png" alt="image" className="w35" />
                    </figure>
                    <h3 className="fw-700 mb-0 mt-0">
                        <a className="font-xsss text-grey-600 d-block text-dark model-popup-chat" href="#">Hurin Seary</a>
                    </h3>
                    <span className="badge badge-primary text-white badge-pill fw-500 mt-0">2</span>
                    </li>
                    <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <figure className="avatar float-left mb-0 me-2">
                        <img src="https://via.placeholder.com/50x50.png" alt="image" className="w35" />
                    </figure>
                    <h3 className="fw-700 mb-0 mt-0">
                        <a className="font-xsss text-grey-600 d-block text-dark model-popup-chat" href="#">Victor Exrixon</a>
                    </h3>
                    <span className="bg-success ms-auto btn-round-xss" />
                    </li>
                    <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <figure className="avatar float-left mb-0 me-2">
                        <img src="https://via.placeholder.com/50x50.png" alt="image" className="w35" />
                    </figure>
                    <h3 className="fw-700 mb-0 mt-0">
                        <a className="font-xsss text-grey-600 d-block text-dark model-popup-chat" href="#">Surfiya Zakir</a>
                    </h3>
                    <span className="bg-warning ms-auto btn-round-xss" />
                    </li>
                    <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <figure className="avatar float-left mb-0 me-2">
                        <img src="https://via.placeholder.com/50x50.png" alt="image" className="w35" />
                    </figure>
                    <h3 className="fw-700 mb-0 mt-0">
                        <a className="font-xsss text-grey-600 d-block text-dark model-popup-chat" href="#">Goria Coast</a>
                    </h3>
                    <span className="bg-success ms-auto btn-round-xss" />
                    </li>
                    <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <figure className="avatar float-left mb-0 me-2">
                        <img src="https://via.placeholder.com/50x50.png" alt="image" className="w35" />
                    </figure>
                    <h3 className="fw-700 mb-0 mt-0">
                        <a className="font-xsss text-grey-600 d-block text-dark model-popup-chat" href="#">Hurin Seary</a>
                    </h3>
                    <span className="badge mt-0 text-grey-500 badge-pill pe-0 font-xsssss">4:09 pm</span>
                    </li>
                    <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <figure className="avatar float-left mb-0 me-2">
                        <img src="https://via.placeholder.com/50x50.png" alt="image" className="w35" />
                    </figure>
                    <h3 className="fw-700 mb-0 mt-0">
                        <a className="font-xsss text-grey-600 d-block text-dark model-popup-chat" href="#">David Goria</a>
                    </h3>
                    <span className="badge mt-0 text-grey-500 badge-pill pe-0 font-xsssss">2 days</span>
                    </li>
                    <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <figure className="avatar float-left mb-0 me-2">
                        <img src="https://via.placeholder.com/50x50.png" alt="image" className="w35" />
                    </figure>
                    <h3 className="fw-700 mb-0 mt-0">
                        <a className="font-xsss text-grey-600 d-block text-dark model-popup-chat" href="#">Seary Victor</a>
                    </h3>
                    <span className="bg-success ms-auto btn-round-xss" />
                    </li>
                    <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <figure className="avatar float-left mb-0 me-2">
                        <img src="https://via.placeholder.com/50x50.png" alt="image" className="w35" />
                    </figure>
                    <h3 className="fw-700 mb-0 mt-0">
                        <a className="font-xsss text-grey-600 d-block text-dark model-popup-chat" href="#">Ana Seary</a>
                    </h3>
                    <span className="bg-success ms-auto btn-round-xss" />
                    </li>
                </ListGroup>
                </div>
            </div>
        </div>

     );
    
}

export default RightChat;