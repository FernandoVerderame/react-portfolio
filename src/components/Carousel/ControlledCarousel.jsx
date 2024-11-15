import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselStyle from "./ControlledCarousel.module.scss";

function ControlledCarousel({ images }) {
    const [index, setIndex] = useState(0);
    const [showFullscreen, setShowFullscreen] = useState(false);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const handleOpenFullscreen = () => {
        setShowFullscreen(true);
    };

    const handleCloseFullscreen = () => {
        setShowFullscreen(false);
    };

    return (
        <>
            {/* Copertina con bottone per aprire il carosello a schermo intero */}
            <div className={carouselStyle.coverContainer}>
                <img
                    src={`/images/${images[0].image}`} // Prima immagine come copertina
                    alt="Copertina"
                    className={carouselStyle.image}
                />
                <button onClick={handleOpenFullscreen} className={carouselStyle.openButton}>
                    Visualizza galleria
                </button>
            </div>

            {/* Modale a schermo intero per il carosello */}
            {showFullscreen && (
                <div className={carouselStyle.fullscreenOverlay}>
                    <div className={carouselStyle.closeButton} onClick={handleCloseFullscreen}>✕</div>
                    <div onClick={(e) => e.stopPropagation()} className='d-flex justify-content-center'>
                        <Carousel
                            activeIndex={index}
                            onSelect={handleSelect}
                            interval={null}
                            className={carouselStyle.fullscreenCarousel}
                        >
                            {images.map((img) => (
                                <Carousel.Item key={img.id}>
                                    <img
                                        src={`/images/${img.image}`}
                                        alt={`Slide-${img.id}`}
                                        className={`${carouselStyle.fullscreenImage}`}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            )}
        </>
    );
}

export default ControlledCarousel;
