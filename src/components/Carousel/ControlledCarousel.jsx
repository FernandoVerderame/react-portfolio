import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselStyle from "./ControlledCarousel.module.scss";

function ControlledCarousel({ images }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
        >
            {images.map((img) => (
                <Carousel.Item key={img.id}>
                    <img
                        src={img.image}
                        alt={`Slide-${img.id}`}
                        className={`${carouselStyle.image}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ControlledCarousel;