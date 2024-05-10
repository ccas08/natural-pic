import { useImages } from '../components/imageContext';

const Favorites = () => {
    const { images } = useImages();

    return (
        <div>
            {images.filter(img => img.isFavorite).map(image => (
                <div key={image.id}>
                    <img src={image.src} alt="landscape" />
                    <p>Favorito</p>
                </div>
            ))}
        </div>
    );
};

export default Favorites;
