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
    let count = 0;
    let limit = 9;

    if (type === "tab") {
        firstDiv = 'col-3'
    }

    if (type === "photos") {
        firstDiv = 'col-4';
    }

    return (
        <div className="d-flex flex-row flex-wrap">

            {images.map((image, imageIndex) => {
                return (
                    image.gallery?.map((url, galleryIndex) => {
                        if (type === "photos" && count >= limit) {
                            return null;
                        }

                        count++;

                        return (
                            <div className={firstDiv} key={galleryIndex}
                                 style={{
                                     maxHeight: "100%",
                                     minHeight: "100%",
                                     // maxWidth: "25%",
                                     // minWidth: "25%"
                                 }}>
                                <img
                                    className="rounded-3 my-0 border border-1 border-gray shadow-md image-hover-effect"
                                    src={url}
                                    style={{
                                        objectFit: "cover",
                                        // maxHeight: "100%",
                                        // maxWidth: "100%",
                                        cursor: "pointer"
                                    }}
                                    alt="picture"
                                    onClick={() => handleClick(imageIndex, galleryIndex)}
                                />
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
