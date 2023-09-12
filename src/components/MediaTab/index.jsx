import {useDispatch, useSelector} from "react-redux";
import {getMedia} from "~/features/getMedia/index.jsx";
import {useCallback, useEffect, useState} from "react";
import MediaList from "~/components/MediaList/index.jsx";
import {getStoredUserData} from "~/service/accountService.js";
import InfiniteScroll from "react-infinite-scroll-component";
import {ColorRing} from "react-loader-spinner";

function MediaTab() {
    const tabs = ["Photos", "Videos"]

    const dispatch = useDispatch();
    const images = useSelector(state => state.media.images)
    const status = useSelector(state => state.media.status)
    const page = useSelector(state => state.media.pageIndex)
    const hasMore = useSelector(state => state.media.hasMoreData)
    const [type, setType] = useState("Photos")

    const [loading, setLoading] = useState(false);
    const user = getStoredUserData();

    function fetchImages() {
        if (loading) {
            return;
        }
        setLoading(true);
        const para = {
            id : `${user.id}`,
            page : `${page}`
        }
        dispatch(getMedia(para)).then(() => {
            setLoading(false);
        });
    }

    useEffect(() => {
        if (status === "idle") {
            // dispatch(getMedia(user.id, 0))
            dispatch(getMedia(`${user.id}`))
        }
    }, [status]);

    return (
        <>
            <div className="card w-100 d-block d-flex shadow-xss rounded-xxl border-0 mt-3">
                <div className="card-body d-flex p-4">
                    <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900">Media</h2>
                </div>
                <div className="card-body d-block w-100 mb-0 p-0">
                    <ul className="nav nav-tabs h55 d-flex product-info-tab border-bottom-0 ps-4"
                        id="pills-tab" role="tablist">
                        {tabs.map((tab) => (
                            <li key={tab} className="list-inline-item me-5 ">
                                <span data-toggle="tab"
                                      onClick={() => setType(tab)}
                                      className={type === tab ?
                                          "fw-600 font-xsss text-dark pt-3 pb-3 ls-1 d-inline-block cursor-pointer border-bottom-dark" :
                                          "fw-600 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block cursor-pointer"}>
                                    {tab}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                {type === tabs[0] && (
                    <InfiniteScroll
                        next={fetchImages}
                        hasMore={hasMore}
                        loader={
                            <ColorRing
                                visible={loading}
                                height="80"
                                width="80"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />
                        }
                        dataLength={images.length}>
                        <MediaList
                            images={images}
                            type="tab"
                        />
                    </InfiniteScroll>
                )}
            </div>
        </>
    )
}


export default MediaTab;