import PersonalIntro from "~/components/PersonalIntro/index.jsx";
import NewPost from "~/components/CreatePost/index.jsx";
import PostDetail from "~/components/PostDetail/index.jsx";

function PostTabFanPage() {
    return (
        <>
            <div className="row">
                <div className="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                    <div className="shadow-xss mb-3 mt-3">
                        <PersonalIntro />
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

                    <div className="shadow-xssmb-3 mt-3">
                        <PostDetail/>
                    </div>

                    <div className="shadow-xssmb-3 mt-3">
                        <PostDetail/>
                    </div>

                    <div className="shadow-xssmb-3 mt-3">
                        <PostDetail/>
                    </div>
                </div>
            </div>


        </>
    )
}
export default PostTabFanPage;