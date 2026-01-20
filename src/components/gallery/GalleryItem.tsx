import { GalleryImage } from "@/data/galleryData";

interface GalleryItemProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
}

/**
 * GalleryItem Component
 * Simple square image thumbnail with no overlays
 */
const GalleryItem = ({ image, onClick }: GalleryItemProps) => {
  return (
    <button
      className="aspect-square overflow-hidden bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-inset"
      onClick={() => onClick(image)}
      aria-label={`View ${image.title}`}
    >
      <img
        src={image.src}
        alt={image.title}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </button>
  );
};

export default GalleryItem;
