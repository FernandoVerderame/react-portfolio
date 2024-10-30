import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

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
                        style={{ objectFit: "cover", height: "450px", width: "100%" }}
                    />
                    <Carousel.Caption>
                        <h3>Slide {img.id}</h3>
                        <p>Descrizione della slide {img.id}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ControlledCarousel;