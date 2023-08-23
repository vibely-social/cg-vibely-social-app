import {useEffect, useState} from "react";
import MediaDetails from "~/components/MediaDetails/index.jsx";

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
                            className="rounded-4"
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
