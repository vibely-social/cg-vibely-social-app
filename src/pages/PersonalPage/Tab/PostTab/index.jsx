import NewPost from "../../../../components/CreatePost/index";
import PostDetail from "~/components/PostDetail/index.jsx";
import PersonalIntro from "~/components/PersonalIntro/index.jsx";
import { useEffect, useState } from "react";
import { VIBELY_API } from "~/app/constants";
import axios from "axios";


function PostTab() {
    const [posts, setPosts] = useState([]);


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
        fetchPosts()
      }, []);


    return (
        <>
            <div className="row">
                <div className="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                    <div className="shadow-xss mb-3 mt-3">
                        <PersonalIntro />
                    </div>

                    <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
                        <div className="card-body d-block p-4" style={{height: 300}}>
                            <h4 className="fw-700 mb-3 font-xsss text-grey-900">Friends</h4>
                        </div>
                    </div>

                    <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
                        <div className="card-body d-block p-4" style={{height: 300}}>
                            <h4 className="fw-700 mb-3 font-xsss text-grey-900">Media</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 col-xxl-9 col-lg-8">
                    <div className="shadow-xss mb-3 mt-3">
                        <NewPost />
                    </div>

                    {posts.map((post,index) => {
                    return <PostDetail data={post} key={index}/>
                    })}
                </div>
            </div>


        </>
    )
}

export default PostTab;