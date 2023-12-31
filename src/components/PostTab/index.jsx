import CreatePost from "../CreatePost/index.jsx";
import PostDetail from "~/components/PostDetail/index.jsx";
import Intro from "~/components/PostTab/Intro/index.jsx";
import {VIBELY_API} from "~/app/constants";
import MediaList from "~/components/MediaList/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getStoredUserData} from "~/service/accountService.js";
import axios from "axios";
import "~/pages/PersonalPage/index.scss"
import {getMedia} from "~/features/getMedia/index.jsx";
import FeedBody from "~/components/FeedBody/index.jsx";


function PostTab({toggleAbout, toggleMedia}) {
    const [posts, setPosts] = useState([]);
    const status = useSelector(state => state.media.status)
    const currentUser = getStoredUserData();
    const userInfo = useSelector(state => state.userInfo);

    const dispatch = useDispatch();


    const fetchPosts = async () => {
        try {
            const response = await axios.get(`${VIBELY_API}/posts`);
            setPosts(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {
        if (status === "idle") {
            dispatch(getMedia(currentUser.id))
        }
        // fetchPosts()
    }, []);


    return (
        <>
            <div className="row">
                <div className="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                    <div className="shadow-xss mb-3 mt-3">
                        <Intro toggle={toggleAbout}/>
                    </div>

                    <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
                        <div className="card-body d-block p-2" style={{height: "auto"}}>
                            <h4 className="fw-700 mb-3 px-4 font-xsss text-grey-900 d-flex justify-content-between">
                                <span>
                                    Photos
                                </span>
                                <span className="text-end cursor-pointer hover-underline text-cyan"
                                      onClick={toggleMedia}
                                >
                                    See more
                                </span>
                            </h4>
                            <MediaList type="photos"/>
                        </div>

                    </div>
                </div>
                <div className="col-xl-8 col-xxl-9 col-lg-8 mt-3">
                    {
                        currentUser.id === userInfo.id ?
                            <FeedBody/>
                            : <></>
                    }
                    <div className="w-100 shadow-xss rounded-xxl border-0 ps-2 x pe-4 pb-2 mb-3 card h400">

                    </div>
                </div>
            </div>
        </>
    )
}

export default PostTab;