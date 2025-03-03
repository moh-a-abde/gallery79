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
    <div className="w-full bg-card/40 backdrop-blur-xl border-y border-accent/10 sticky top-[72px] z-30 py-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
      <div className="container-custom">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-sm"></div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-sm"></div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground mr-1 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>View:</span>
              <button
                className={`chip ${
                  selectedCategory === 'All'
                    ? 'chip-gradient text-white'
                    : 'chip-gradient-inactive text-secondary-foreground hover:text-white'
                } transition-all duration-300 animate-fade-in opacity-0`}
                style={{ animationDelay: '0.85s', animationFillMode: 'forwards' }}
                onClick={() => setSelectedCategory('All')}
              >
                All
              </button>
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`chip ${
                    selectedCategory === category
                      ? 'chip-gradient text-white'
                      : 'chip-gradient-inactive text-secondary-foreground hover:text-white'
                  } transition-all duration-300 animate-fade-in opacity-0`}
                  style={{ animationDelay: `${0.9 + index * 0.05}s`, animationFillMode: 'forwards' }}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="md:ml-auto flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground mr-1 animate-fade-in opacity-0" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>Filter:</span>
              {tags.slice(0, 6).map((tag, index) => (
                <button
                  key={tag}
                  className={`chip ${
                    selectedTags.includes(tag)
                      ? 'chip-gradient text-white'
                      : 'chip-gradient-inactive text-secondary-foreground hover:text-white'
                  } transition-all duration-300 animate-fade-in opacity-0`}
                  style={{ animationDelay: `${1.15 + index * 0.05}s`, animationFillMode: 'forwards' }}
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
