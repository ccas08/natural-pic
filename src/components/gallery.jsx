import { useImages } from '../components/imageContext';
import './gallery.css'; // Asegúrate de que la ruta sea correcta
import { useEffect } from 'react';
import imagen1 from '../assets/img/imagen1.jpg';
import imagen2 from '../assets/img/imagen2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';


const imagesData = [
    {
        id: 1,
        src: imagen1,
        alt: "Landscape 1",
        isFavorite: false
    },
    {
        id: 2,
        src: imagen2,
        alt: "Landscape 2",
        isFavorite: false
    }
];

const Gallery = () => {
    const { images, setImages } = useImages();


    const toggleFavorite = (id) => {
        const updatedImages = images.map(image => {
            if (image.id === id) {
                return { ...image, isFavorite: !image.isFavorite };
            }
            return image;
        });
        setImages(updatedImages);
    };

    useEffect(() => {
        
        setImages(imagesData);
    }, [setImages]);

    return (
        <div className="gallery-container">
            {images.map((image) => (
                <div key={image.id} className="gallery-item">
                    <img src={image.src} alt={image.alt} />
                    <FontAwesomeIcon
                        icon={image.isFavorite ? fasHeart : farHeart}
                        onClick={() => toggleFavorite(image.id)}
                        style={{ color: image.isFavorite ? 'red' : 'grey', cursor: 'pointer' }}
                    />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
