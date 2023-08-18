import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import "../MediaModal/index.css";

function MediaModal({images, currentIndex, onClose}) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(currentIndex);

    const handleClose = () => {
        setSelectedImageIndex(-1);
        onClose();
    };

    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <Modal
            show={selectedImageIndex >= 0}
            onHide={handleClose}
            size="xl"
            centered
            dialogClassName="modal-dialo"

        >

            <div className="modal-content">
                <Modal.Body className="p-1 col-2 col-7">
                    <div className="modal-image-container">
                        <button
                            className="prev-button"
                            onClick={handlePrevImage}>&#x2190;</button>
                        <img
                            className="modal-image"
                            src={images[selectedImageIndex]?.imageUrl}
                            alt={`Image ${selectedImageIndex}`}/>
                        <button
                            className="next-button"
                            onClick={handleNextImage}>&#x2192;</button>
                    </div>
                    <button
                        className="close-button"
                        onClick={handleClose}>&#x2716;</button>
                </Modal.Body>
            </div>
        </Modal>
    );
}

export default MediaModal;