import {useState} from "react";
import PostTab from "./Tab/PostTab/index.jsx";
import IntroductionTab from "./Tab/IntroductionTab/index.jsx";
import "./index.css"
import MediaTab from "./Tab/MediaTab/index.jsx";
import FriendTab from "./Tab/FriendTab/index.jsx";

function PersonalPage() {
    const tabs = ["posts", "introduction", "friend", "media"]
    const tabNames = ["Bài viết", "Giới thiệu", "Bạn bè", "Phương tiện"]

    const [type, setType] = useState("posts")

    return (<>

        <div className="row">
            <div className="col-lg-12">
                <div className="card w-100 border-0 p-0 bg-white shadow-xss rounded-xxl">
                    <div className="card-body h250 p-0 rounded-xxl overflow-hidden m-3">
                        <img src="https://via.placeholder.com/960x250.png" alt="image" style={{width: '100%'}}/>
                    </div>
                    <div className="card-body p-0 position-relative">
                        <figure className="avatar position-absolute w100 z-index-1"
                                style={{top: -40, left: 30}}>
                            <img src="https://via.placeholder.com/50x50.png" alt="image"
                                 className="float-right p-1 bg-white rounded-circle w-100"/>
                        </figure>
                        <h4 className="fw-700 font-sm mt-2 mb-lg-5 mb-4 pl-15">Huy vu<span
                            className="fw-500 font-xssss text-grey-500 mt-1 mb-3 d-block">support@gmail.com</span>
                        </h4>
                        <div
                            className="d-flex align-items-center justify-content-center position-absolute-md right-15 top-0 me-2">
                            <a href="#"
                               className="d-none invisible d-lg-block bg-success p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3">Add
                                Friend</a>
                            <a href="#"
                               className="d-none d-lg-block bg-greylight btn-round-lg ms-2 rounded-3 text-grey-700">
                                <i className="feather-mail font-md"></i>
                            </a>
                            <a href="#" id="dropdownMenu4"
                               className="d-none d-lg-block bg-greylight btn-round-lg ms-2 rounded-3 text-grey-700"
                               data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <i className="ti-more font-md tetx-dark"></i>
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
                                aria-labelledby="dropdownMenu4">
                                <div className="card-body p-0 d-flex">
                                    <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                                    <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Save
                                        Link <span
                                            className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Add this to your saved items</span>
                                    </h4>
                                </div>
                                <div className="card-body p-0 d-flex mt-2">
                                    <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                                    <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide
                                        Post <span
                                            className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                    </h4>
                                </div>
                                <div className="card-body p-0 d-flex mt-2">
                                    <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                                    <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide all
                                        from Group <span
                                            className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                    </h4>
                                </div>
                                <div className="card-body p-0 d-flex mt-2">
                                    <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                                    <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">Unfollow
                                        Group <span
                                            className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-body d-block w-100 shadow-none mb-0 p-0 border-top-xs">
                        <ul className="nav nav-tabs h55 d-flex product-info-tab border-bottom-0 ps-4"
                            id="pills-tab" role="tablist">
                            {tabs.map((tab, index) => (
                                <li key={tab} className="list-inline-item me-5 ">
                                    <span data-toggle="tab"
                                          onClick={() => setType(tab)}
                                          className={type === tab ?
                                              "fw-600 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block cursor-pointer focus-item" :
                                              "fw-600 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block cursor-pointer"}>
                                        {tabNames[index]}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                {
                    type === 'posts' ? <PostTab/>
                        : type === 'introduction' ? <IntroductionTab/>
                            : type === 'friend' ? <FriendTab/>
                                : <MediaTab/>
                }
            </div>
        </div>
    </>);
}

export default PersonalPage;