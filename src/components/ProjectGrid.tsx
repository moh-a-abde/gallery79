import React, { useState, useEffect } from 'react';
import { Project, projects } from '../lib/projects';
import ProjectCard from './ProjectCard';
import FilterBar from './FilterBar';
import { Sparkles } from 'lucide-react';

const ProjectGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  
  useEffect(() => {
    // Create a slight delay to allow for animation effects
    const timeoutId = setTimeout(() => {
      let filtered = [...projects];
      
      if (selectedCategory !== 'All') {
        filtered = filtered.filter(
          (project) => project.category === selectedCategory
        );
      }
      
      if (selectedTags.length > 0) {
        filtered = filtered.filter((project) =>
          selectedTags.some(tag => project.tags.includes(tag))
        );
      }
      
      setFilteredProjects(filtered);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [selectedCategory, selectedTags]);

  return (
    <section className="py-8">
      <div className="container-custom mb-10">``
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="inline-block text-xl font-medium px-2 py-2 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/90 animate-pulse">
              All Projects
            </span>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></div>
          </h2>
        </div>
      </div>

      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      
      <div className="container-custom pt-10 relative">
        {/* Elegant gradient glow behind the project grid */}
        <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl blur-3xl opacity-30"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-scale-in opacity-0"
                style={{ 
                  animationDelay: `${index * 100 + 200}ms`, 
                  animationFillMode: 'forwards',
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center animate-fade-in">
              <h3 className="text-xl font-medium mb-3">No projects found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Try adjusting your filters to find what you're looking for.
              </p>
              <div className="mt-6 inline-block animate-border-pulse rounded-full p-px">
                <button 
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedTags([]);
                  }}
                  className="btn-primary px-6 py-2 rounded-full"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
