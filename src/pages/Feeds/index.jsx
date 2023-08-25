import RightFeed from "./RightFeeds";
import {Col, Row, Button} from "react-bootstrap";
import CreatePost from "../../components/CreatePost";
import PostDetail from "../../components/PostDetail";
import {useAuthorizeUser} from "~/hooks/authorizeUser.jsx";
import { useEffect, useState } from "react";
import "./index.scss"
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import { useDispatch,useSelector } from 'react-redux';
import { fetchPosts } from "~/features/getPosts";
import {createPost} from "../../features/getPosts"

function Feeds() {

    TimeAgo.addDefaultLocale(en)
    useAuthorizeUser()
    const dispatch = useDispatch();
    const { isLoading, isSuccess, newPosts, isFailed } = useSelector((state) => state.posts);
    const [loaded,setLoaded] = useState(false)
    
    

    useEffect(() => {
        dispatch(fetchPosts())
        // fake loader
        if(isLoading == false){
            setTimeout(() => setLoaded(true),500) 
        }
        else{
            setLoaded(true)
        }
      },[dispatch]);



    return (
        <Row className="feed-body pt-3">
            <Col xl={8} xxl={9} lg={8}>

                <CreatePost />
            
             {!loaded ? 
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
                 : 
                 
                 newPosts?.map((post,index) => {
                   return <PostDetail data={post} key={index}/>
                 })
                }

            </Col>
            <RightFeed/>
        </Row>
    );
}

export default Feeds;
