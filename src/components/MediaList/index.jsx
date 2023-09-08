import {useState, useEffect} from "react";
import MediaDetails from "~/components/MediaDetails/index.jsx";
import "./index.css"
import InfiniteScroll from "react-infinite-scroll-component";
import {getMedia} from "~/features/getMedia/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getStoredUserData} from "~/service/accountService.js";


//type: tab, photos, post
function MediaList({images, type}) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
    const [showModal, setShowModal] = useState(false);

    const pageIndex = useSelector(state => state.media.pageIndex)
    const status = useSelector(state => state.media.status)

    const handleClick = (imageIndex) => {
        setSelectedImageIndex(imageIndex);
        setShowModal(true);
    }

    const handleHide = () => {
        setSelectedImageIndex(-1);
        setShowModal(false);
    }

    let count = 0;
    let limit = 9;

    return (
        <div className="container-fluid row mx-0 px-0">

            {/*<InfiniteScroll*/}
            {/*    next={useDispatch(getMedia(getStoredUserData().id, pageIndex))}*/}
            {/*    hasMore={status !== "failed"}*/}
            {/*    loader={<h4>loading...</h4>}*/}
            {/*    dataLength={images.length}>*/}
                {images.map((image, imageIndex) => {
                        if (type === "photos" && count >= limit) {
                            console.log(`This was called ${count}`)
                            return null;
                        }
                        count++;

                        return (
                            <div className={(type === 'tab' ? 'col-3' : 'col-lg-4 col-sm-3') + ' mb-3 pe-2'} key={image.id}>
                                <img className="rounded-3 my-0 border border-1 border-gray shadow-md image-hover-effect"
                                     src={image.imageUrl}
                                     style={{
                                         objectFit: "cover",
                                         width: "100%",
                                         maxHeight: type === 'tab' ? 200 : 100,
                                         minHeight: type === 'tab' ? 200 : 100,
                                         cursor: "pointer"
                                     }}
                                     alt="picture"
                                     onClick={() => handleClick(imageIndex)}
                                />
                            </div>
                        );
                    }
                )
                }
            {/*</InfiniteScroll>*/}

            {showModal &&
                <MediaDetails
                    images={images}
                    currentImageIndex={selectedImageIndex}
                    onClose={handleHide}
                />}

        </div>
    )
}

export default MediaList;
