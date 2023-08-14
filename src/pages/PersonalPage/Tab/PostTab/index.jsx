
import Feeds from "../../../Feeds/index.jsx";

function PostTab() {
    return (
        <>
            <div className="row">
                <div className="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                    <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
                        <div className="card-body d-block p-4" style={{height: 400}}>
                            <h4 className="fw-700 mb-3 font-xsss text-grey-900">Over view</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 col-xxl-9 col-lg-8">
                    <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
                        <div className="card-body d-block p-4" style={{height: 400}}>
                            <h4 className="fw-700 mb-3 font-xsss text-grey-900">Post List</h4>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default PostTab;