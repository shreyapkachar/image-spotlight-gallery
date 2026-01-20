// Gallery image data with categories for filtering
// Each image has an id, source, title, category, and aspect ratio for optimal display

import nature1 from "@/assets/gallery/nature-1.jpg";
import nature2 from "@/assets/gallery/nature-2.jpg";
import nature3 from "@/assets/gallery/nature-3.jpg";
import nature4 from "@/assets/gallery/nature-4.jpg";
import animals1 from "@/assets/gallery/animals-1.jpg";
import animals2 from "@/assets/gallery/animals-2.jpg";
import animals3 from "@/assets/gallery/animals-3.jpg";
import tech1 from "@/assets/gallery/tech-1.jpg";
import tech2 from "@/assets/gallery/tech-2.jpg";
import architecture1 from "@/assets/gallery/architecture-1.jpg";
import architecture2 from "@/assets/gallery/architecture-2.jpg";
import architecture3 from "@/assets/gallery/architecture-3.jpg";

// Define the image type for type safety
export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: "nature" | "animals" | "tech" | "architecture";
  aspectRatio: "landscape" | "portrait" | "square";
}

// Array of all gallery images
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: nature1,
    title: "Mountain Majesty",
    category: "nature",
    aspectRatio: "portrait",
  },
  {
    id: 2,
    src: nature2,
    title: "Ocean Sunset",
    category: "nature",
    aspectRatio: "landscape",
  },
  {
    id: 3,
    src: nature3,
    title: "Rainforest Light",
    category: "nature",
    aspectRatio: "square",
  },
  {
    id: 4,
    src: nature4,
    title: "Coral Paradise",
    category: "nature",
    aspectRatio: "landscape",
  },
  {
    id: 5,
    src: animals1,
    title: "King of the Savanna",
    category: "animals",
    aspectRatio: "portrait",
  },
  {
    id: 6,
    src: animals2,
    title: "Tropical Beauty",
    category: "animals",
    aspectRatio: "portrait",
  },
  {
    id: 7,
    src: animals3,
    title: "Winter Fox",
    category: "animals",
    aspectRatio: "landscape",
  },
  {
    id: 8,
    src: tech1,
    title: "Future Interface",
    category: "tech",
    aspectRatio: "square",
  },
  {
    id: 9,
    src: tech2,
    title: "RGB Keyboard",
    category: "tech",
    aspectRatio: "landscape",
  },
  {
    id: 10,
    src: architecture1,
    title: "Sky High",
    category: "architecture",
    aspectRatio: "portrait",
  },
  {
    id: 11,
    src: architecture2,
    title: "Golden Spiral",
    category: "architecture",
    aspectRatio: "portrait",
  },
  {
    id: 12,
    src: architecture3,
    title: "Ancient Temple",
    category: "architecture",
    aspectRatio: "landscape",
  },
];

// Available categories for filtering
export const categories = ["all", "nature", "animals", "tech", "architecture"] as const;
export type Category = (typeof categories)[number];
