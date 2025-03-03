
import React, { useState, useEffect } from 'react';
import { Project, projects } from '../lib/projects';
import ProjectCard from './ProjectCard';
import FilterBar from './FilterBar';

const ProjectGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
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
  }, [selectedCategory, selectedTags]);

  return (
    <section className="pb-20">
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      
      <div className="container-custom pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <h3 className="text-lg font-medium mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
