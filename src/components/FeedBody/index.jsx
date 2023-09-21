import CreatePost from "~/components/CreatePost/index.jsx";
import PostDetail from "~/components/PostDetail/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo, useState} from "react";
import {fetchPosts, resetPost} from "~/features/get_posts/index.js";

import "./index.scss"
import {selectUserData} from "~/features/user_account/index.js";

function FeedBody({personal = false}) {
    const user = useSelector(selectUserData)
    const dispatch = useDispatch();
    const {isLoading, isSuccess, newPosts, createPost} = useSelector((state) => state.posts);
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        if (isSuccess){
            setPosts(newPosts)
        }
    },[isSuccess])

    useEffect(() => {
        if (!isSuccess)
        dispatch(fetchPosts())
        return () => {
            dispatch(resetPost())
        };
    }, [user.accessToken]);
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
                    ? posts.map((post, index) => {
                        if (!personal) {
                            return <PostDetail data={post} key={index}/>
                        }else {
                            if (post.author.id === user.id){
                                return <PostDetail data={post} key={index}/>
                            }
                        }
                    })
                    : <div>No post to show. Follow more friend!</div>

            }
        </>
    )
}

export default FeedBody;