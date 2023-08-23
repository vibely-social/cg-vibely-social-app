import {Dialog} from 'primereact/dialog';
import {Carousel} from 'primereact/carousel';
import React, {useState} from "react";
import "./index.css";

function MediaCarousel({images, onHide, visible}) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1)

    const hideDialog = () => {
        setSelectedImageIndex(-1);
        onHide();
    }

    const displayImage = (image) => {
        return (
            <div className="mb-3">
                <img src={`${image.imageUrl}`} alt={`${image.id}`} className="carousel"/>
            </div>
        )
    }

    return (
        <Dialog
            visible={visible}
            modalStyle={{ width: '70vw', maxHeight: '100vh', top: '0', left: '50%'}}
            onHide={hideDialog}
            contentStyle={{padding: 0}}
            draggable={false}
        >
            <Carousel
                value={images}
                numVisible={1}
                numScroll={1}
                orientation="vertical"
                circular={true}
                verticalViewPortHeight="360px"
                itemTemplate={displayImage}
                page={selectedImageIndex}
                onPageChange={(e) => setSelectedImageIndex(e.page)}
            />
        </Dialog>
    )

}

export default MediaCarousel;