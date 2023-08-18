import React, {useState} from 'react';
import Lightbox from "react-18-image-lightbox";
import 'react-18-image-lightbox/style.css';
import {Modal} from "react-bootstrap";

function MediaLightbox({images, currentIndex}) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(currentIndex);

    const imagesUrls = images.map((image) => image.imageUrl);


    const prevImage = (index) => {
        return (index > 0) ? (index - 1) : (images.length - 1);
    }

    const nextImage = (index) => {
        return (index < images.length - 1) ? (index + 1) : 0;
    }

    const handlePrevImage = () => {
        setSelectedImageIndex(prevImage(selectedImageIndex));
    }

    const handleNextImage = () => {
        setSelectedImageIndex(nextImage(selectedImageIndex));
    }

    const handleCloseLightbox = () => {
        setSelectedImageIndex(-1);
    }

    return (
        <>
            {selectedImageIndex >= 0 && (
                <Lightbox
                    mainSrc={imagesUrls[selectedImageIndex]}
                    nextSrc={imagesUrls[nextImage(selectedImageIndex)]}
                    prevSrc={imagesUrls[prevImage(selectedImageIndex)]}
                    onCloseRequest={handleCloseLightbox}
                    onMoveNextRequest={handleNextImage}
                    onMovePrevRequest={handlePrevImage}
                />
            )}
        </>
    );

    // const [selectedImageIndex, setSelectedImageIndex] = useState(currentIndex);
    //
    // const handleClose = () => {
    //     setSelectedImageIndex(-1);
    //     onClose();
    // };
    //
    // const handlePrevImage = () => {
    //     setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    // };
    //
    // const handleNextImage = () => {
    //     setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    // };
    //
    // return (
    //     <Modal show={selectedImageIndex >= 0} onHide={handleClose}>
    //         <Modal.Body>
    //             <img src={images[selectedImageIndex]?.imageUrl}
    //                  alt={`Image ${selectedImageIndex}`}
    //                  height={'300px'}
    //                  width={'200px'}
    //             />
    //         </Modal.Body>
    //         <Modal.Footer>
    //             <button className="btn btn-secondary" onClick={handlePrevImage}>
    //                 Previous
    //             </button>
    //             <button className="btn btn-secondary" onClick={handleNextImage}>
    //                 Next
    //             </button>
    //             <button className="btn btn-primary" onClick={handleClose}>
    //                 Close
    //             </button>
    //         </Modal.Footer>
    //     </Modal>
    // );
}

export default MediaLightbox;