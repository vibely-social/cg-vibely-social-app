import NewPost from "../../../../components/CreatePost/index";
import PostDetail from "~/components/PostDetail/index.jsx";
import PersonalIntro from "~/components/PersonalIntro/index.jsx";
import { VIBELY_API } from "~/app/constants";
import MediaList from "~/components/MediaList/index.jsx";
import {useSelector, useDispatch} from "react-redux";
import {getMedia} from "~/features/getMedia/index.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import "~/pages/PersonalPage/Tab/IntroductionTab/index.css"


function PostTab({toggleAbout, toggleMedia}) {
    const [posts, setPosts] = useState([]);
    const images = useSelector(state => state.media.images)
    const status = useSelector(state => state.media.status)

    const dispatch = useDispatch();


    const fetchPosts = async () => {
       try {
          const response = await axios.get(`${VIBELY_API}/posts`);
          setPosts(response.data)
          setIsLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {
        // if (status === "idle") {
        //     dispatch(getMedia())
        // }
        fetchPosts()
    }, [dispatch]);


    return (
        <>
            <div className="row">
                <div className="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                    <div className="shadow-xss mb-3 mt-3">
                        <PersonalIntro toggle={toggleAbout}/>
                    </div>

                    <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
                        <div className="card-body d-block p-4" style={{height: 300}}>
                            <h4 className="fw-700 mb-3 font-xsss text-grey-900">Friends</h4>
                        </div>
                    </div>

                    <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
                        <div className="card-body d-block p-4 ps-3" style={{height: 380}}>
                            <h4 className="fw-700 mb-3 font-xsss text-grey-900 d-flex justify-content-between">
                                <span>
                                    Photos
                                </span>
                                <span className="text-end cursor-pointer hover-underline text-cyan"
                                      onClick={toggleMedia}
                                >
                                    See more
                                </span>
                            </h4>
                            <div className="row ps-2 pe-2">
                                <MediaList images={images} type="photos"/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-xl-8 col-xxl-9 col-lg-8">
                    <div className="shadow-xss mb-3 mt-3">
                        <NewPost/>
                    </div>

                    {posts.map((post, index) => {
                        return <PostDetail data={post} key={index}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default PostTab;