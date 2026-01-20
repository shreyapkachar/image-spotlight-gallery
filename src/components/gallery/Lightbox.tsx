import { useEffect, useCallback } from "react";
import { GalleryImage } from "@/data/galleryData";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Props interface for the Lightbox component
interface LightboxProps {
  image: GalleryImage | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  totalImages: number;
  currentIndex: number;
}

/**
 * Lightbox Component
 * Full-screen overlay that displays a single image with navigation
 * Supports keyboard navigation and clicking outside to close
 */
const Lightbox = ({
  image,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  totalImages,
  currentIndex,
}: LightboxProps) => {
  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    },
    [onClose, onNext, onPrevious]
  );

  // Add and remove keyboard event listener
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  // Don't render if not open or no image
  if (!isOpen || !image) return null;

  // Handle backdrop click (close when clicking outside the image)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="lightbox animate-fade-in-scale"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${image.title}`}
    >
      {/* Close button */}
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Previous button */}
      <button
        className="lightbox-nav left-4 sm:left-6"
        onClick={onPrevious}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image container */}
      <div className="max-w-[90vw] max-h-[80vh] animate-fade-in-scale">
        <img
          src={image.src}
          alt={image.title}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />

        {/* Image info */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
          <span className="inline-block px-3 py-1 mb-2 text-xs font-medium rounded-full bg-primary/20 text-primary uppercase tracking-wider">
            {image.category}
          </span>
          <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground mb-1">
            {image.title}
          </h2>
          <p className="text-sm text-muted-foreground">
            {currentIndex + 1} of {totalImages}
          </p>
        </div>
      </div>

      {/* Next button */}
      <button
        className="lightbox-nav right-4 sm:right-6"
        onClick={onNext}
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Lightbox;
