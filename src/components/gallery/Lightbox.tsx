import { useEffect, useCallback } from "react";
import { GalleryImage } from "@/data/galleryData";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
 * Full-screen image viewer with navigation
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

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !image) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="lightbox animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${image.title}`}
    >
      {/* Close button */}
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <X className="w-5 h-5" />
      </button>

      {/* Previous button */}
      <button
        className="lightbox-nav left-4"
        onClick={onPrevious}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Image */}
      <img
        src={image.src}
        alt={image.title}
        className="max-w-[90vw] max-h-[85vh] object-contain"
      />

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
        {currentIndex + 1} / {totalImages}
      </div>

      {/* Next button */}
      <button
        className="lightbox-nav right-4"
        onClick={onNext}
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Lightbox;
