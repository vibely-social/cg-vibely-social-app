import {useCallback, useEffect, useState} from "react";
import "./index.scss"
import {userInfoApi} from "~/api/userInfoApi.js";
import {useDispatch, useSelector} from "react-redux";
import {setUserInfo} from "~/features/userInfo/UserInfoSlice.js";
import {Modal, Row} from "react-bootstrap";
import {getStoredUserData} from "~/service/accountService.js";
import {selectUserData} from "~/features/userAccount/index.js";
import PostTab from "~/components/PostTab/index.jsx";
import FriendTab from "~/components/FriendTab/index.jsx";
import MediaTab from "~/components/MediaTab/index.jsx";
import AboutTab from "~/components/AboutTab/index.jsx";
import UpdateAvatar from "~/components/UpdateAvatar/index.jsx";
import {useAuthorizeUser} from "~/hooks/authorizeUser.jsx";

function PersonalPage() {
    const tabs = ["Posts", "About", "Friends", "Media"]
    const [type, setType] = useState("Posts")
    const user = useSelector(selectUserData);
    const dispatch = useDispatch();
    const [showAvatarModal, setShowAvatarModal] = useState(false)
    const [viewAvatar, setViewAvatar] = useState(false)

    useAuthorizeUser()
    const toggleToAbout = () => {
        setType("About")
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
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

    const handleUpdateAvatar = () => {
        setShowAvatarModal(true)
    }
    const handleClose = useCallback(() => {
        setShowAvatarModal(false)
    }, [])

    return (<>
        <Row style={{marginTop: "12px"}}>
            <div className="col-lg-12">
                <div className="card w-100 border-0 p-0 bg-white shadow-xss rounded-xxl">
                    <div className="card-body h260 p-0 rounded-xxl overflow-hidden m-3">
                        <img src={user.background}
                             className="object-fit-cover w-100"
                             style={{maxHeight: 260}}
                             alt="image"
                        />
                    </div>
                    <div className="card-body p-0 position-relative">
                        <figure className="position-absolute d-flex align-items-center justify-content-center dropend"
                                style={{
                                    top: -40,
                                    left: 30,
                                    minWidth: 104,
                                    minHeight: 104
                                }}>
                            <img src={user.avatarUrl} alt="image"
                                 className="main-avatar float-right p-1 bg-white w-100 z-index-1"/>
                            <span
                                className="position-absolute w-100 h-100 bg-primary-gradiant rounded-circle spinner-border"></span>
                            <a className="change-avatar position-absolute"
                               id="change-avatar" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <i className="feather-camera font-md text-white"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end w200 rounded-4 p-0 border-0 shadow-lg"
                                 aria-labelledby="change-avatar">
                                <div
                                    className="card-body d-flex hover-button cursor-pointer pt-3 px-3 rounded-top-4 align-items-center"
                                    onClick={() => setViewAvatar(true)}>
                                    <i className="feather-aperture text-grey-500 me-3 font-lg"></i>
                                    <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">View avatar</h4>
                                </div>
                                <div
                                    className="card-body d-flex mt-1 hover-button cursor-pointer pb-3 px-3 rounded-bottom-4 align-items-center"
                                    onClick={handleUpdateAvatar}>
                                    <i className="feather-image text-grey-500 me-3 font-lg"></i>
                                    <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">Update avatar</h4>
                                </div>
                                <UpdateAvatar show={showAvatarModal} handleClose={handleClose}/>
                                <Modal show={viewAvatar}
                                       onHide={() => setViewAvatar(false)}
                                       centered>
                                    <div>
                                        <img src={user.avatarUrl} alt="image"/>
                                    </div>
                                </Modal>
                            </div>
                        </figure>
                        <h4 className="fw-700 font-sm mt-2 mb-lg-5 mb-4 pl-15">{`${user.firstName} ${user.lastName}`}<span
                            className="fw-500 font-xssss text-grey-500 mt-1 mb-3 d-block">{user.email}</span>
                        </h4>
                    </div>

                    <div className="d-flex">
                        <div className="card-body d-block w-100 mb-0 p-0 border-top-xs">
                            <ul className="nav nav-tabs h55 d-flex product-info-tab border-bottom-0 ps-4"
                                id="pills-tab" role="tablist">
                                {tabs.map((tab) => (
                                    <li key={tab} className="list-inline-item me-5 ">
                                    <span data-toggle="tab"
                                          onClick={() => setType(tab)}
                                          className={type === tab ?
                                              "fw-600 font-xss text-dark pt-2 pb-3 ls-1 d-inline-block cursor-pointer border-bottom-dark " :
                                              "fw-600 font-xsss text-grey-500 pt-3 pb-3 ls-1 d-inline-block cursor-pointer"}>
                                        {tab}
                                    </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="align-items-center justify-content-center me-3">
                            <a href="#" id="dropdownMenu4"
                               className="d-none d-lg-block bg-greylight btn-round-lg ms-2 rounded-3 text-grey-700"
                               data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <i className="ti-more font-md tetx-dark"></i>
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-end w250 p-4 rounded-xxl border-0 shadow-lg"
                                aria-labelledby="dropdownMenu4">
                                <div className="card-body p-0 d-flex">
                                    <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                                    <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Save
                                        Link <span
                                            className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Add this to your saved items</span>
                                    </h4>
                                </div>

                                <div className="card-body p-0 d-flex mt-2">
                                    <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                                    <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">Unfollow
                                        <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                            Save to your saved items
                                        </span>
                                    </h4>
                                </div>

                                <div className="card-body p-0 d-flex mt-2">
                                    <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                                    <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Remove friend
                                        <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                            Save to your saved items
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 min-vh-100">
                {
                    type === 'Posts' ? <PostTab toggleAbout={toggleToAbout} toggleMedia={toggleToMedia}/>
                        : type === 'About' ? <AboutTab/>
                            : type === 'Friends' ? <FriendTab/>
                                : <MediaTab/>
                }
            </div>
        </Row>
    </>);
}

export default PersonalPage;
