import {useEffect, useState} from "react";
import MediaDetails from "~/components/MediaDetails/index.jsx";
import "./index.css"

//type: tab, photos, post
function MediaList({images, type}) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
    const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(-1)
    const [showModal, setShowModal] = useState(false);

    const handleClick = (imageIndex, galleryIndex) => {
        setSelectedImageIndex(imageIndex);
        setSelectedGalleryIndex(galleryIndex);
        setShowModal(true);
    }

    const handleHide = () => {
        setSelectedImageIndex(-1);
        setSelectedGalleryIndex(-1);
        setShowModal(false);
    }


    let firstDiv;
    let secondDiv;
    let containerDiv;
    let count = 0;
    let limit = 9;

    if (type === "tab") {
        containerDiv = 'row';
        // firstDiv = 'col-md-3 col-xss-6 col-lg-3';
        firstDiv = 'col-lg-3 col-md-2'
        secondDiv = "card d-block border-0 align";
    }

    if (type === "photos") {
        containerDiv = "h400 row justify-content-around d-flex";
        firstDiv = 'col-4 my-0 py-0';
        secondDiv = "card d-block border-0 align";
    }

    return (
        <div className={containerDiv}>

            {images.map((image, imageIndex) => {
                return (
                    image.gallery?.map((url, galleryIndex) => {
                        if (type === "photos" && count >= limit) {
                            return null;
                        }

                        count++;

                        return (
                            <div className={firstDiv} key={galleryIndex}>

                                <div
                                    className={secondDiv}
                                    onClick={() => {
                                        handleClick(imageIndex, galleryIndex);
                                    }}
                                >
                                    <img
                                        className="rounded-3 my-0 w-100 h-100 border border-1 border-gray shadow-md image-hover-effect"
                                        src={url}
                                        style={{
                                            objectFit: "cover",
                                            width: "100%",
                                            height: "100%",
                                            cursor: "pointer"
                                        }}
                                        alt="picture"
                                    />

                                </div>
                            </div>
                        );
                    })
                );
            })}

            {showModal &&
                <MediaDetails
                    images={images}
                    currentImageIndex={selectedImageIndex}
                    currentGalleryIndex={selectedGalleryIndex}
                    onClose={handleHide}
                />}

        </div>
    )
}

export default MediaList;
