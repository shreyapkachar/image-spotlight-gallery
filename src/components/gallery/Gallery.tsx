import { useState, useMemo, useCallback } from "react";
import { galleryImages, Category, GalleryImage } from "@/data/galleryData";
import FilterButtons from "./FilterButtons";
import GalleryGrid from "./GalleryGrid";
import Lightbox from "./Lightbox";

/**
 * Gallery Component
 * Main gallery container with filtering and lightbox
 */
const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === "all") return galleryImages;
    return galleryImages.filter((image) => image.category === activeFilter);
  }, [activeFilter]);

  const currentIndex = useMemo(() => {
    if (!selectedImage) return -1;
    return filteredImages.findIndex((img) => img.id === selectedImage.id);
  }, [selectedImage, filteredImages]);

  const handleFilterChange = useCallback((category: Category) => {
    setActiveFilter(category);
  }, []);

  const handleImageClick = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 200);
  }, []);

  const handleNextImage = useCallback(() => {
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  }, [currentIndex, filteredImages]);

  const handlePreviousImage = useCallback(() => {
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  }, [currentIndex, filteredImages]);

  return (
    <section className="w-full">
      <FilterButtons activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      <GalleryGrid images={filteredImages} onImageClick={handleImageClick} />
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
