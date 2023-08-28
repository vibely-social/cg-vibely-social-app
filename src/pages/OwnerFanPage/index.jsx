import {useEffect, useState} from "react";
import "./FanPage.css"
import {useDispatch, useSelector} from "react-redux";
import {userInfoApi} from "~/api/userInfoApi.js";
import {setUserInfo} from "~/features/userInfo/UserInfoSlice.js";
import PostTabFanPage from "~/pages/OwnerFanPage/Tab/PostTabFanPage/index.jsx";
import MediaTabFanPage from "~/pages/OwnerFanPage/Tab/MediaTabFanPage/index.jsx";
import MentionsTabFanPage from "~/pages/OwnerFanPage/Tab/MentionsTabFanPage/index.jsx";
import ReviewsTabFanPage from "~/pages/OwnerFanPage/Tab/ReviewsTabFanPage/index.jsx";
import ReelsTabFanPage from "~/pages/OwnerFanPage/Tab/ReelsTabFanPage/index.jsx";
import IntroductionTabFanPage from "~/pages/OwnerFanPage/Tab/IntroductionTabFanPage/index.jsx";
import {getStoredUserData} from "~/service/accountService.js";

function OwnerFanPage() {
    const tabs = ["Posts", "About", "Mentions", "Reviews", "Reels", "Media"]
    const [type, setType] = useState("Posts")
    const userInfo = useSelector(state => state.userInfo);
    const dispatch = useDispatch();

    const toggleToAbout = () => {
        setType("About")
    }

    const toggleToMedia = () => {
        setType("Media");
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        const getUserInfo = async () => {
            const user = getStoredUserData();
            const result = await userInfoApi(user.id);
            dispatch(setUserInfo(result));
        }
        getUserInfo()
    }, [])

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
                        <h4
                            className="fw-700 font-sm mt-2 mb-lg-5 mb-4 pl-15">{userInfo.lastName + " " + userInfo.firstName}
                            <span
                                className="fw-500 font-xssss text-grey-500 mt-1 mb-3 d-block">2,4K lượt thích • 3,7K người theo dõi
                            </span>
                        </h4>
                        <div
                            className="d-flex align-items-center justify-content-center position-absolute-md right-15 top-0 me-2">
                            <a href="#"
                               className="d-flex align-items-center bg-success p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3">
                                <i className="ti-announcement p-1 font-xss"></i>
                                Advertise
                            </a>
                            <a href="#"
                               className="d-none d-lg-block bg-success p-3 ms-2 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3">
                                <i className="feather-server p-1 font-xss"></i>
                                Manage
                            </a>
                            <a href="#"
                               className="d-none d-lg-block bg-success p-3 ms-2 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3">
                                <i className="feather-edit-2 p-1 font-xss"></i>
                                Edit
                            </a>
                        </div>
                    </div>


                    <div className="card-body d-block w-100 mb-0 p-0 border-top-xs">
                        <ul className="nav nav-tabs h55 d-flex product-info-tab border-bottom-0 ps-4"
                            id="pills-tab" role="tablist">
                            {tabs.map((tab) => (
                                <li key={tab} className="list-inline-item me-5 ">
                                    <span data-toggle="tab"
                                          onClick={() => setType(tab)}
                                          className={type === tab ?
                                              "fw-600 font-xss text-dark pt-2 pb-3 ls-1 d-inline-block cursor-pointer border-bottom-dark" :
                                              "fw-600 font-xsss text-grey-500 pt-3 pb-3 ls-1 d-inline-block cursor-pointer"}>
                                        {tab}
                                    </span>
                                </li>
                            ))}
                            <a href="#" id="dropdownMenu4"
                               className=" bg-greylight btn-round-lg ms-2 m-1 rounded-3 text-grey-700 ms-auto me-4"
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
                        </ul>

                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                {
                    type === 'Posts' ? <PostTabFanPage toggleAbout={toggleToAbout} toggleMedia={toggleToMedia}/>
                        : type === 'About' ? <IntroductionTabFanPage/>
                            : type === 'Mentions' ? <MentionsTabFanPage/>
                                : type === 'Reviews' ? <ReviewsTabFanPage/>
                                    : type === 'Reels' ? <ReelsTabFanPage/>
                                        : <MediaTabFanPage/>
                }
            </div>
        </div>
    </>);
}

export default OwnerFanPage;