import {useState} from 'react';
import {Dialog} from 'primereact/dialog';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import './index.scss';
import MediaPost from '~/components/MediaDetails/MediaPost/index.jsx';

function MediaDetails({images=[], currentImageIndex, onClose}) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(currentImageIndex);

    const handleClose = () => {
        setSelectedImageIndex(-1);
        onClose();
    };

    const handlePrevImage = () => {
         if (selectedImageIndex > 0) {
             setSelectedImageIndex(prev => prev - 1);
         } else if (selectedImageIndex === 0) {
             setSelectedImageIndex(images.length - 1);
         }
    };

    const handleNextImage = () => {
        if (selectedImageIndex < images.length - 1) {
            setSelectedImageIndex(prev => prev + 1);
        } else if (selectedImageIndex === images.length - 1) {
            setSelectedImageIndex(0);
        }
    };

    return (
        <Dialog
            visible={selectedImageIndex >= 0}
            onHide={handleClose}
            className="p-dialog"
            modal={true}
            draggable={false}
            resizable={false}
            position="left"
            footer={null}
            style={{width: '80vw', maxWidth: "calc(100vh-280px)"}}
        >
            <div className="modal-backdrop">
                <div className="dialog-content-container">
                    <div >
                        <button id="post-md-btn" className="btn btn-outline-secondary btn-md h-100 prev-button"
                                onClick={handlePrevImage}>
                            <span className="pi pi-chevron-left"></span>
                        </button>
                    </div>
                    <div className="image-container">
                        <img
                            className="modal-image"
                            src={images[selectedImageIndex].imageUrl}
                            alt="Picture"
                        />
                    </div>
                    <div>
                        <button id="post-md-btn" className="btn btn-outline-success btn-md close-button"
                                onClick={handleClose}>
                            <span className="pi pi-times"></span>
                        </button>
                        <button id="post-md-btn" className="btn btn-outline-secondary btn-md h-100 next-button"
                                onClick={handleNextImage}>
                            <span className="pi pi-chevron-right"></span>
                        </button>
                    </div>
                </div>
                <div className="media-post-container">
                    <MediaPost
                        id={images[selectedImageIndex].id}
                    />
                </div>
            </div>
        </Dialog>


    );
}

export default MediaDetails;
