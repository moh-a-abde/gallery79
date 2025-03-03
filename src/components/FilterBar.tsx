
import React from 'react';
import { categories, tags } from '../lib/projects';

interface FilterBarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedTags,
  setSelectedTags,
}) => {
  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="w-full bg-card/70 backdrop-blur-sm border-y border-accent/20 sticky top-[72px] z-30 py-4">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">View:</span>
            <button
              className={`chip ${
                selectedCategory === 'All'
                  ? 'bg-primary text-primary-foreground shadow-purple-glow'
                  : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
              }`}
              onClick={() => setSelectedCategory('All')}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`chip ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-purple-glow'
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="md:ml-auto flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Filter:</span>
            {tags.slice(0, 6).map((tag) => (
              <button
                key={tag}
                className={`chip ${
                  selectedTags.includes(tag)
                    ? 'bg-primary text-primary-foreground shadow-purple-glow'
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                }`}
                onClick={() => handleTagToggle(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
