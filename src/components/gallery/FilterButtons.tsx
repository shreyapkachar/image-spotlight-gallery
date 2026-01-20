import { Category, categories } from "@/data/galleryData";

interface FilterButtonsProps {
  activeFilter: Category;
  onFilterChange: (category: Category) => void;
}

/**
 * FilterButtons Component
 * Simple tab-style filters for gallery categories
 */
const FilterButtons = ({ activeFilter, onFilterChange }: FilterButtonsProps) => {
  const formatCategoryName = (category: string): string => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="flex overflow-x-auto border-b border-border">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`filter-tab whitespace-nowrap ${
            activeFilter === category ? "active" : ""
          }`}
          aria-pressed={activeFilter === category}
        >
          {formatCategoryName(category)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
