import {useEffect, useState} from "react";
import MediaDetails from "~/components/MediaDetails/index.jsx";

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
    let count = 0;
    let limit = 9;

    if (type === "tab") {
        firstDiv = 'col-md-3 col-xss-6';
        secondDiv = "card h240 w240 d-block border-0 mb-3 align";
    }
    if (type === "post") {
        firstDiv = "col-xs-4 col-sm-2 p-1";
        secondDiv = "card h175 w175"
    }
    if (type === "photos") {
        firstDiv = 'col-sm-4 col-xss-3';
        secondDiv = "card h100 w100 d-block border-0 mb-2 me-1 align ";
    }

    return (
        <>
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
                                        className="rounded-3 w-100 h-100 border border-1 border-gray shadow-md"
                                        src={url}
                                        style={{
                                            objectFit: "cover",
                                            width: "100%",
                                            height: "100%"
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
        </>
    )
}

export default MediaList;
