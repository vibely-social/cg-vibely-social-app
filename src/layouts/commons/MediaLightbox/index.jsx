import React, { useState } from 'react';

const MediaLightbox = () => {
    const [lightboxVisible, setLightboxVisible] = useState(false);

    const openLightbox = () => {
        setLightboxVisible(true);
    };

    const closeLightbox = () => {
        setLightboxVisible(false);
    };

    return (
        <div>
            {/* Button to open the lightbox */}
            <button onClick={openLightbox}>Open Lightbox</button>

            {/* Lightbox */}
            {lightboxVisible && (
                <div className="lightbox-overlay">
                    <div className="lightbox-content">
                        {/* Your HTML code */}
                        <div className="right-comment chat-left scroll-bar theme-dark-bg">
                            {/* ... your HTML content ... */}
                        </div>

                        {/* Close button */}
                        <button className="lightbox-close" onClick={closeLightbox}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MediaLightbox;