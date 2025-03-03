
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById, getRelatedProjects, Project } from '../lib/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [activeImage, setActiveImage] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Simulate API fetch with a slight delay
      const timer = setTimeout(() => {
        const foundProject = getProjectById(id);
        if (foundProject) {
          setProject(foundProject);
          setActiveImage(foundProject.images[0]);
          setRelatedProjects(getRelatedProjects(id));
        }
        setLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse space-y-4">
          <div className="h-12 w-48 bg-muted rounded"></div>
          <div className="h-80 w-full max-w-3xl bg-muted rounded"></div>
          <div className="h-8 w-64 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <p className="text-muted-foreground mb-6">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link 
          to="/" 
          className="btn-primary px-4 py-2"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container-custom py-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm mb-8 hover:text-primary transition-colors"
          >
            <svg
              className="mr-1 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Projects
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="w-full aspect-video rounded-lg overflow-hidden bg-muted mb-4">
                  <img 
                    src={activeImage} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(image)}
                      className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                        activeImage === image 
                          ? 'border-primary' 
                          : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <h1 className="text-3xl font-bold mb-3">{project.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="chip bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="prose prose-sm max-w-none mb-6">
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-border py-2">
                  <span className="font-medium">Category</span>
                  <span>{project.category}</span>
                </div>
                
                <div className="flex justify-between border-b border-border py-2">
                  <span className="font-medium">Date</span>
                  <span>{project.date}</span>
                </div>
                
                {project.client && (
                  <div className="flex justify-between border-b border-border py-2">
                    <span className="font-medium">Client</span>
                    <span>{project.client}</span>
                  </div>
                )}
              </div>
              
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-3 justify-center mb-4"
                >
                  Visit Project
                </a>
              )}
              
              <div className="flex space-x-4">
                <button className="flex-1 flex justify-center items-center py-3 rounded-md border border-border hover:bg-accent/50 transition-colors">
                  <svg
                    className="mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 3H8C6.9 3 6 3.9 6 5V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V5C18 3.9 17.1 3 16 3Z" />
                    <path d="M12 18H12.01" />
                  </svg>
                  Share
                </button>
                
                <button className="flex-1 flex justify-center items-center py-3 rounded-md border border-border hover:bg-accent/50 transition-colors">
                  <svg
                    className="mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  Like
                </button>
              </div>
            </div>
          </div>
          
          {relatedProjects.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;
