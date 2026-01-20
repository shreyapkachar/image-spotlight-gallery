import { GalleryImage } from "@/data/galleryData";
import GalleryItem from "./GalleryItem";

// Props interface for the GalleryGrid component
interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

/**
 * GalleryGrid Component
 * Displays a responsive grid of gallery images
 * Uses CSS Grid with auto-fill for responsive layout
 */
const GalleryGrid = ({ images, onImageClick }: GalleryGridProps) => {
  // Show message if no images match the filter
  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground text-lg">
          No images found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]">
      {images.map((image, index) => (
        <GalleryItem
          key={image.id}
          image={image}
          onClick={onImageClick}
          index={index}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
