import RightFeed from "./RightFeeds";
import {Card, Col, Row} from "react-bootstrap";
import NewPost from "~/components/NewPost";
import ReadMore from "~/components/ReadMore/index.jsx";
import {useSelector} from "react-redux";
import {selectUserData} from "~/store/slices/userAccount/index.js";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useAuthorizeUser} from "~/hooks/authorize_user/index.js";

const initContent = "Sự thay đổi bất ngờ với vị trí Giám đốc tài chính (CFO) của Tesla mới đây là một lời nhắc nhở nữa về thách thức mà Elon Musk phải đối mặt trong việc chuẩn bị cho thế hệ tiếp theo của công ty: Sự kế vị. Theo nhiều người kể lại, Zach Kirkhorn vốn là người tạo ra ảnh hưởng, giúp xoa dịu tình hình tại nhà sản xuất xe điện sau nhiều năm sóng gió xung quanh nhà lãnh đạo hay thay đổi như Elon Musk. Khi Kirkhorn phục vụ hơn bốn năm với tư cách là giám đốc tài chính. Musk thường là người đóng vai trò đưa ra bức tranh toàn cảnh còn Kirkhorn sẽ là người xử lý các chi tiết. Musk có thể hay bị phân tâm - cho dù đó là với X – công ty mới trở thành Twitter hay đối thủ của OpenAI là xAI hay cuộc nói chuyện về Mark Zuckerberg về trận đấu lồng. Tuy nhiên, Musk dường như đã \"nhờ\" Kirkhorn trông nom mọi thứ ở trụ sở Tesla."
function Feeds() {
    useAuthorizeUser();

    return (<Row className="feed-body pt-3">
        <Col xl={8} xxl={9} lg={8}>

            <NewPost/>
            <Card className="w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
                <div className="card-body p-0 d-flex">
                    <figure className="avatar me-3">
                        <img
                            src="https://media.discordapp.net/attachments/1006048991043145829/1006049027734913075/unknown.png?width=662&height=662"
                            alt="image"
                            className="shadow-sm rounded-circle w45"/>
                    </figure>
                    <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                        Chung Nguyen
                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                                        3 giờ trước
                                    </span>
                        <i data-feather="circle"></i>
                    </h4>
                    <a href="#" className="ms-auto" id="dropdownMenu2" data-bs-toggle="dropdown"
                       aria-expanded="false"><i
                        className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></a>
                    <div className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                         aria-labelledby="dropdownMenu2">
                        <div className="card-body p-0 d-flex">
                            <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Save Link <span
                                className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Add this to your saved items</span>
                            </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide Post <span
                                className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                            </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide all from Group <span
                                className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                            </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">Unfollow Group <span
                                className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="card-body p-0 me-lg-5">
                     <ReadMore content={initContent}/>
                </div>
                <div className="card-body d-block p-0">
                    <div className="row ps-2 pe-2">
                        <div className="col-xs-4 col-sm-4 p-1">
                            <a href="https://via.placeholder.com/1200x800.png"
                               data-lightbox="roadtrip">
                                <div className='rounded-3 w-100 h-100' style={{
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundImage: "url('https://media.discordapp.net/attachments/646934670679998474/1127544766817644594/keyboard.png?width=1006&height=662')"
                                }}>
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-4 col-sm-4 p-1">
                            <a href="https://via.placeholder.com/1200x800.png"
                               data-lightbox="roadtrip">
                                <div className='rounded-3 w-100 h-100' style={{
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundImage: "url('https://media.discordapp.net/attachments/646934670679998474/1127544766817644594/keyboard.png?width=1006&height=662')"
                                }}>
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-4 col-sm-4 p-1"><a href="https://via.placeholder.com/1200x800.png"
                                                                  data-lightbox="roadtrip"
                                                                  className="position-relative d-block"><img
                            src="https://via.placeholder.com/1200x800.png" className="rounded-3 w-100"
                            alt="image"/><span
                            className="img-count font-sm text-white ls-3 fw-600"><b>+2</b></span></a></div>
                    </div>
                </div>
                <div className="card-body d-flex p-0 mt-3">
                    <a href="#"
                       className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2">
                        <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>
                        <i className="feather-heart text-white bg-pinterest me-2 btn-round-xs font-xss"></i>
                        2.8K Like
                    </a>
                    <div className="emoji-wrap">
                        <ul className="emojis list-inline mb-0">
                            <li className="emoji list-inline-item"><i className="em em---1"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-angry"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-anguished"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-astonished"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-blush"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-clap"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-cry"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-full_moon_with_face"></i></li>
                        </ul>
                    </div>
                    <a href="#" className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i
                        className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i><span
                        className="d-none-xss">22 Comment</span></a>
                    <a href="#" id="dropdownMenu21" data-bs-toggle="dropdown" aria-expanded="false"
                       className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i
                        className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i><span
                        className="d-none-xs">Share</span></a>
                    <div className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                         aria-labelledby="dropdownMenu21">
                        <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">Share <i
                            className="feather-x ms-auto font-xssss btn-round-xs bg-greylight text-grey-900 me-2"></i>
                        </h4>
                        <div className="card-body p-0 d-flex">
                            <ul className="d-flex align-items-center justify-content-between mt-2">
                                <li className="me-1"><a href="#" className="btn-round-lg bg-facebook"><i
                                    className="font-xs ti-facebook text-white"></i></a></li>
                                <li className="me-1"><a href="#" className="btn-round-lg bg-twitter"><i
                                    className="font-xs ti-twitter-alt text-white"></i></a></li>
                                <li className="me-1"><a href="#" className="btn-round-lg bg-linkedin"><i
                                    className="font-xs ti-linkedin text-white"></i></a></li>
                                <li className="me-1"><a href="#" className="btn-round-lg bg-instagram"><i
                                    className="font-xs ti-instagram text-white"></i></a></li>
                                <li><a href="#" className="btn-round-lg bg-pinterest"><i
                                    className="font-xs ti-pinterest text-white"></i></a></li>
                            </ul>
                        </div>
                        <div className="card-body p-0 d-flex">
                            <ul className="d-flex align-items-center justify-content-between mt-2">
                                <li className="me-1"><a href="#" className="btn-round-lg bg-tumblr"><i
                                    className="font-xs ti-tumblr text-white"></i></a></li>
                                <li className="me-1"><a href="#" className="btn-round-lg bg-youtube"><i
                                    className="font-xs ti-youtube text-white"></i></a></li>
                                <li className="me-1"><a href="#" className="btn-round-lg bg-flicker"><i
                                    className="font-xs ti-flickr text-white"></i></a></li>
                                <li className="me-1"><a href="#" className="btn-round-lg bg-black"><i
                                    className="font-xs ti-vimeo-alt text-white"></i></a></li>
                                <li><a href="#" className="btn-round-lg bg-whatsup"><i
                                    className="font-xs feather-phone text-white"></i></a></li>
                            </ul>
                        </div>
                        <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">Copy
                            Link</h4>
                        <i className="feather-copy position-absolute right-35 mt-3 font-xs text-grey-500"></i>
                        <input type="text" value="https://socia.be/1rGxjoJKVF0" readOnly
                               className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"/>
                    </div>
                </div>
            </Card>
        </Col>
        <RightFeed/>
    </Row>);
}

export default Feeds;
