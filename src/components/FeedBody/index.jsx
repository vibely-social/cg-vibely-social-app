import CreatePost from "~/components/CreatePost/index.jsx";
import PostDetail from "~/components/PostDetail/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo} from "react";
import {fetchPosts, resetPost} from "~/features/get_posts/index.js";
import {useAuthorizeUser} from "~/hooks/authorizeUser.jsx";

import "./index.scss"
import {selectUserData} from "~/features/user_account/index.js";

function FeedBody() {
    const user = useSelector(selectUserData)
    useAuthorizeUser()

    const dispatch = useDispatch();
    const {isLoading, isSuccess, newPosts, createPost} = useSelector((state) => state.posts);


    useEffect(() => {
        dispatch(fetchPosts())
        return () => {
            dispatch(resetPost())
        };
    }, [user]);
    return (
        <>
            <CreatePost/>
            {createPost && <PostDetail data={createPost}/>}
            {isLoading ?
                (<div className="preloader-feed">
                    <div className="box shimmer">
                        <div className="lines">
                            <div className="line s_shimmer"></div>
                            <div className="line s_shimmer"></div>
                            <div className="line s_shimmer"></div>
                            <div className="line s_shimmer"></div>
                        </div>
                    </div>
                    <div className="box shimmer mb-3">
                        <div className="lines">
                            <div className="line s_shimmer"></div>
                            <div className="line s_shimmer"></div>
                            <div className="line s_shimmer"></div>
                            <div className="line s_shimmer"></div>
                        </div>
                    </div>
                </div>)
                : isSuccess
                    ? newPosts.map((post, index) => {
                        const postData = {...post}
                        return <PostDetail data={postData} key={index}/>
                    })
                    : <div>No post to show. Follow more friend!</div>

            }
        </>
    )
}

export default FeedBody;