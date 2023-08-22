import React, {useState} from 'react';
import {Dialog} from 'primereact/dialog';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';
import MediaPost from '~/components/MediaDetails/MediaPost/index.jsx';

function MediaDetails({images, currentIndex, onClose}) {
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

    const closeIcon = (
        <button className="close-button" onClick={handleClose}>
            <span className="pi pi-times"></span>
        </button>
    );

    return (
        <div className="modal-backdrop">
            <Dialog
                visible={selectedImageIndex >= 0}
                onHide={handleClose}
                closeIcon={closeIcon}
                className="p-dialog modal-backdrop"
                modal
                draggable={false}
                resizable={false}
                position="left"
                footer={null}
                style={{width: '80vw',maxWidth: "calc(100vh-280px)"}}
            >
                <div className="image-container">
                    <button className="prev-button left-0" onClick={handlePrevImage}>
                        <span className="pi pi-chevron-left"></span>
                    </button>
                    <img
                        className="modal-image"
                        src={images[selectedImageIndex]?.imageUrl}
                        alt={`Image ${selectedImageIndex}`}
                    />
                    <button className="next-button" onClick={handleNextImage}>
                        <span className="pi pi-chevron-right"></span>
                    </button>
                </div>
                <MediaPost
                    id={images[selectedImageIndex].id}
                />
            </Dialog>
        </div>

    );
}

export default MediaDetails;
