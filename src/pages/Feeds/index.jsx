import RightFeed from "./RightFeeds";
import {Col, Row} from "react-bootstrap";
import CreatePost from "../../components/CreatePost";
import PostDetail from "../../components/PostDetail";
import {useAuthorizeUser} from "~/hooks/authorizeUser.jsx";
import { useEffect, useState } from "react";
import { POST_API } from "~/app/constants";
import axios from "axios";
import "./index.scss"

function Feeds() {

    useAuthorizeUser()

    const [posts, setPosts] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const [newPost,setNewPost] = useState(null)

    const fetchPosts = async () => {
       try {
          const response = await axios.get(POST_API);
          setPosts(response.data)
          setIsLoading(false)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };


      useEffect(() => {
        setTimeout(() => fetchPosts(),500)
        
      }, []);
    

   
    return (
        <Row className="feed-body pt-3">
            <Col xl={8} xxl={9} lg={8}>

                <CreatePost setNewPost={setNewPost} />

                    {(newPost != null)
                            &&  <PostDetail data={newPost} />
                    }

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
                 : 
                 
                 posts.map((post,index) => {
                   return <PostDetail data={post} key={index}/>
                 })
                }

            </Col>
            <RightFeed/>
        </Row>
    );
}

export default Feeds;
