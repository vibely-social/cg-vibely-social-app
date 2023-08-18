import {useEffect, useState} from "react";
import axios from "axios";
import MediaModal from "../../../../layouts/commons/MediaModal/index.jsx";
import MediaCarousel from "../../../../layouts/commons/MediaCarousel/index.jsx";

function MediaTab() {
    const tabs = ["Photos", "Videos"]

    const [type, setType] = useState("Photos")
    const [images, setImages] = useState([
        {
            id: '1',
            imageUrl: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'
        },
        {
            id: '2',
            imageUrl: 'https://placehold.co/600x400'
        },
        {
            id: '3',
            imageUrl: 'https://placehold.co/400'
        }
    ])

    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8080/api/mediatab/1")
            .then(response => {
                setImages(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

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
                            <MediaModal
                                images={images}
                                currentIndex={selectedImageIndex}
                                onClose={handleHide}
                            />}


                        {/*<MediaCarousel*/}
                        {/*    images={images}*/}
                        {/*    visible={showModal}*/}
                        {/*    onHide={handleHide}*/}
                        {/*/>*/}
                    </div>
                </div>
            </div>
        </>
    )
}


export default MediaTab;
