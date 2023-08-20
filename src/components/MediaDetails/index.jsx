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
        <Dialog
                visible={selectedImageIndex >= 0}
                onHide={handleClose}
                closeIcon={closeIcon}
                className="p-dialog"
                modal
                draggable={false}
                resizable={false}
                position="left"
                footer={null}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
            >
                <div className="image-container">
                    <button className="prev-button" onClick={handlePrevImage}>
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
    );
}

export default MediaDetails;
