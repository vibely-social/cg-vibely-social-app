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
            // style={{width: '100%', maxWidth: "calc(100vh-280px)"}}
        >
            <div className="modal-backdrop dialog-content-container d-flex container-fluid px-0 color-theme-green">
                <div className='d-flex col-9 position-relative justify-content-center'>
                    <div className="image-container justify-content-center align-items-center">
                        <img className="modal-image w-100"
                             src={images[selectedImageIndex].imageUrl}
                             alt="Picture"
                        />
                    </div>

                    <div className='position-absolute w60 right-15 top-10'>
                        <button className="close-button" onClick={handleClose}>
                            <span className="pi pi-times"></span>
                        </button>
                    </div>
                    <div className='position-absolute w60 h-100 left-0 dialog-btn' onClick={handlePrevImage}>
                        <button className="prev-button" >
                            <span className="pi pi-chevron-left"></span>
                        </button>
                    </div>
                    <div className='position-absolute w60 h-100 right-0 dialog-btn' onClick={handleNextImage}>
                        <button className="next-button" >
                            <span className="pi pi-chevron-right"></span>
                        </button>
                    </div>
                </div>

                <MediaPost id={images[selectedImageIndex].postId}/>

                {/*<PostDetail/>*/}
            </div>
        </Dialog>
    );
}

export default MediaDetails;
