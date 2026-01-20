import { Category, categories } from "@/data/galleryData";

// Props interface for the FilterButtons component
interface FilterButtonsProps {
  activeFilter: Category;
  onFilterChange: (category: Category) => void;
}

/**
 * FilterButtons Component
 * Displays category filter buttons that allow users to filter gallery images
 * Highlights the active filter with an accent color
 */
const FilterButtons = ({ activeFilter, onFilterChange }: FilterButtonsProps) => {
  // Format category name for display (capitalize first letter)
  const formatCategoryName = (category: string): string => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`filter-button ${activeFilter === category ? "active" : ""}`}
          aria-pressed={activeFilter === category}
        >
          {formatCategoryName(category)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
