import { GalleryImage } from "@/data/galleryData";
import GalleryItem from "./GalleryItem";

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

/**
 * GalleryGrid Component
 * Simple 3-column grid with minimal gaps, like a phone photo gallery
 */
const GalleryGrid = ({ images, onImageClick }: GalleryGridProps) => {
  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">No images found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-[2px]">
      {images.map((image) => (
        <GalleryItem key={image.id} image={image} onClick={onImageClick} />
      ))}
    </div>
  );
};

export default GalleryGrid;
