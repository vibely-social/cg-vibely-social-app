import {useEffect, useState} from "react";
import MediaDetails from "~/components/MediaDetails/index.jsx";

//type: tab, photos, post
function MediaList({images, type}) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
    const [showModal, setShowModal] = useState(false);

    const handleClick = (index) => {
        setSelectedImageIndex(index);
        setShowModal(true);
    }

    const handleHide = () => {
        setSelectedImageIndex(-1);
        setShowModal(false);
    }

    let firstDiv;
    let secondDiv;

    if (type === "tab") {
        firstDiv = 'col-md-3 col-xss-6';
        secondDiv = "card h240 w240 d-block border-0 mb-3 align";
    }
    if (type === "post") {
        firstDiv = "col-xs-4 col-sm-2 p-1";
        secondDiv = "card h175 w175"
    }
    if (type === "photos") {
        firstDiv = 'col-md-2 col-xss-6';
        secondDiv = "card h175 w175 d-block border-0 mb-3 align";
    }

    return (
        <>
            {images.map((image, index) => (
                <div className={firstDiv}>
                    <div
                        className={secondDiv}
                        key={image.id}
                        onClick={() => {
                            handleClick(index);
                        }}
                    >
                        <img
                            className="rounded-3 w-100 h-100 border border-1 border-gray shadow-md"
                            src={image.fileName}
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%"
                            }}
                            alt={`${image.id}`}
                        />
                    </div>
                </div>
            ))}
            {showModal &&
                <MediaDetails
                    images={images}
                    currentIndex={selectedImageIndex}
                    onClose={handleHide}
                />}
        </>
    )
}

export default MediaList;
