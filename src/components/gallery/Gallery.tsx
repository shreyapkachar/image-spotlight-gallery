import { useState, useMemo, useCallback } from "react";
import { galleryImages, Category, GalleryImage } from "@/data/galleryData";
import FilterButtons from "./FilterButtons";
import GalleryGrid from "./GalleryGrid";
import Lightbox from "./Lightbox";

/**
 * Gallery Component
 * Main gallery container that manages filtering and lightbox state
 * Combines FilterButtons, GalleryGrid, and Lightbox components
 */
const Gallery = () => {
  // State for active filter category
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Filter images based on active category
  const filteredImages = useMemo(() => {
    if (activeFilter === "all") {
      return galleryImages;
    }
    return galleryImages.filter((image) => image.category === activeFilter);
  }, [activeFilter]);

  // Find current image index in filtered array
  const currentIndex = useMemo(() => {
    if (!selectedImage) return -1;
    return filteredImages.findIndex((img) => img.id === selectedImage.id);
  }, [selectedImage, filteredImages]);

  // Handle filter change
  const handleFilterChange = useCallback((category: Category) => {
    setActiveFilter(category);
  }, []);

  // Handle image click to open lightbox
  const handleImageClick = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  }, []);

  // Handle lightbox close
  const handleCloseLightbox = useCallback(() => {
    setLightboxOpen(false);
    // Delay clearing selected image for exit animation
    setTimeout(() => setSelectedImage(null), 300);
  }, []);

  // Navigate to next image in lightbox
  const handleNextImage = useCallback(() => {
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  }, [currentIndex, filteredImages]);

  // Navigate to previous image in lightbox
  const handlePreviousImage = useCallback(() => {
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  }, [currentIndex, filteredImages]);

  return (
    <section className="w-full">
      {/* Filter buttons */}
      <div className="mb-8 sm:mb-12">
        <FilterButtons
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
      </div>

      {/* Gallery grid */}
      <GalleryGrid images={filteredImages} onImageClick={handleImageClick} />

      {/* Lightbox overlay */}
      <Lightbox
        image={selectedImage}
        isOpen={lightboxOpen}
        onClose={handleCloseLightbox}
        onNext={handleNextImage}
        onPrevious={handlePreviousImage}
        totalImages={filteredImages.length}
        currentIndex={currentIndex}
      />
    </section>
  );
};

export default Gallery;
