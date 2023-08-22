import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import MediaDetails from "~/components/MediaDetails/index.jsx";
import {getMedia} from "~/features/getMedia/index.jsx";

function MediaTab() {
    const tabs = ["Photos", "Videos"]

    const dispatch = useDispatch();
    const images = useSelector(state => state.media.images)
    const [type, setType] = useState("Photos")

    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(getMedia)
    }, [dispatch]);

    const handleClick = (index) => {
        setSelectedImageIndex(index);
        setShowModal(true);
    }

    const handleHide = () => {
        setSelectedImageIndex(-1);
        setShowModal(false);
    }

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
                <div className="card-body">
                    <div className="row ps-2 pe-2">
                        {images.map((image, index) => (
                            <div className="col-md-3 col-xss-6 pe-2 ps-2">
                                <div
                                    key={image.id}
                                    className="card h240 w240 d-block border-0 rounded-3 mb-3 bg-image-cover"
                                    style={{backgroundImage: `url(${image.imageUrl}`}}
                                    onClick={() => {
                                        handleClick(index);
                                    }}
                                >
                                    <a href="#" className="float-right mt-2 me-3"
                                       id="dropdownMenu4" data-bs-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="true">
                                        <i className="ti-more-alt text-grey-900 font-xss"></i>
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
                                        aria-labelledby="dropdownMenu4">
                                        <div className="card-body p-0 d-flex mt-2">
                                            <i className="ti-reload text-grey-500 me-3 font-lg"></i>
                                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                                Change Location
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                            </h4>
                                        </div>
                                        <div className="card-body p-0 d-flex mt-2">
                                            <i className="ti-trash text-grey-500 me-3 font-lg"></i>
                                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                                                Delete
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {showModal &&
                            <MediaDetails
                                images={images}
                                currentIndex={selectedImageIndex}
                                onClose={handleHide}
                            />}
                    </div>
                </div>
            </div>
        </>
    )
}


export default MediaTab;
