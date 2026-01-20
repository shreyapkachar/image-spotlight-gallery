import { GalleryImage } from "@/data/galleryData";

// Props interface for the GalleryItem component
interface GalleryItemProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
  index: number;
}

/**
 * GalleryItem Component
 * Displays a single gallery image with hover effects and overlay
 * Clicking opens the lightbox view
 */
const GalleryItem = ({ image, onClick, index }: GalleryItemProps) => {
  // Calculate animation delay based on index for staggered entrance
  const animationDelay = `${index * 50}ms`;

  // Determine row span based on aspect ratio for masonry effect
  const getRowSpan = () => {
    switch (image.aspectRatio) {
      case "portrait":
        return "row-span-2";
      case "landscape":
        return "row-span-1";
      default:
        return "row-span-1";
    }
  };

  return (
    <div
      className={`gallery-item ${getRowSpan()} opacity-0 animate-fade-in`}
      style={{ animationDelay }}
      onClick={() => onClick(image)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick(image);
        }
      }}
      aria-label={`View ${image.title}`}
    >
      {/* Image */}
      <img
        src={image.src}
        alt={image.title}
        loading="lazy"
        className="w-full h-full object-cover"
      />

      {/* Hover overlay with title */}
      <div className="gallery-overlay">
        <div className="w-full">
          <span className="inline-block px-2 py-1 mb-2 text-xs font-medium rounded-full bg-primary/20 text-primary uppercase tracking-wider">
            {image.category}
          </span>
          <h3 className="text-lg font-display font-medium text-foreground">
            {image.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
