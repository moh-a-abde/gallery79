
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../lib/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Link 
      to={`/project/${project.id}`}
      className="group relative flex flex-col overflow-hidden rounded-lg shadow-card bg-card transition-all duration-300 hover:shadow-elevation"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="flex flex-col p-6 flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 2).map((tag) => (
            <span 
              key={tag} 
              className="chip text-xs bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-lg font-semibold mb-2 tracking-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
        
        <div className="mt-auto flex items-center text-sm font-medium text-primary">
          View Project
          <svg
            className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
      
      {project.featured && (
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md">
          Featured
        </div>
      )}
    </Link>
  );
};

export default ProjectCard;
