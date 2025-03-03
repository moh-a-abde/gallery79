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
  const [lightboxOpen, setLightboxOpen] = useState(false);

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

  const handleImageChange = (image: string) => {
    // Ensure the image is actually changing
    if (image === activeImage) {
      console.log('Image already active:', image);
      return; // No need to change to the same image
    }
    
    console.log('Changing image from', activeImage, 'to:', image);
    
    try {
      // Set active image directly first for immediate feedback
      setActiveImage(image);
      
      // Add a visual feedback for the click - using a safer approach
      const clickedButton = document.querySelector(`[data-image="${CSS.escape(image)}"]`);
      if (clickedButton) {
        clickedButton.classList.add('scale-90');
        setTimeout(() => {
          clickedButton.classList.remove('scale-90');
        }, 150);
      }
      
      // Add a smooth transition effect when changing images
      const mainImage = document.getElementById('main-project-image');
      if (mainImage) {
        mainImage.classList.add('opacity-0');
        setTimeout(() => {
          mainImage.classList.remove('opacity-0');
        }, 200);
      }
    } catch (error) {
      console.error('Error changing image:', error);
      // Fallback - just set the image directly
      setActiveImage(image);
    }
  };

  const toggleLightbox = () => {
    setLightboxOpen(!lightboxOpen);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-background/90">
        <div className="animate-pulse space-y-6 max-w-3xl w-full px-4">
          <div className="h-8 w-48 bg-gradient-to-r from-muted/80 to-muted/40 rounded-md"></div>
          <div className="h-[50vh] w-full bg-gradient-to-br from-muted/50 to-muted/20 rounded-xl"></div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-16 w-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-md"></div>
            ))}
          </div>
          <div className="h-8 w-3/4 bg-gradient-to-r from-muted/80 to-muted/40 rounded-md"></div>
          <div className="h-20 w-full bg-gradient-to-r from-muted/50 to-muted/20 rounded-md"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-background via-background/95 to-background/90">
        <div className="bg-card/30 backdrop-blur-md border border-border/20 p-8 rounded-xl max-w-md w-full text-center shadow-lg">
          <div className="bg-muted/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <p className="text-muted-foreground mb-6">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary/80 to-primary/60 text-white font-medium transition-all hover:from-primary hover:to-primary/80 shadow-md hover:shadow-lg"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background/95 to-background/90">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container-custom py-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm mb-8 text-muted-foreground hover:text-primary transition-colors"
          >
            <div className="bg-card/30 backdrop-blur-sm p-2 rounded-full mr-2 border border-border/20">
              <svg
                className="h-4 w-4"
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
            </div>
            <span>Back to Projects</span>
          </Link>
          
          <div className="grid grid-cols-1 gap-10">
            <div className="space-y-6">
              <div className="relative">
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-muted mb-4 border border-white/5 shadow-xl group cursor-pointer" 
                  onClick={() => {
                    // Just open the lightbox without changing the image
                    toggleLightbox();
                  }}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay z-10"></div>
                  <img 
                    id="main-project-image"
                    src={activeImage} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-opacity duration-300"
                    key={activeImage} /* Ensure re-render on image change */
                    onError={(e) => {
                      console.error('Failed to load image:', activeImage);
                      e.currentTarget.src = project.images[0]; // Fallback to first image
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
                    Image {project.images.findIndex(img => img === activeImage) + 1} of {project.images.length}
                  </div>
                  {/* Improved hover overlay with text instruction */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm font-medium">Click to enlarge</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-3 mt-1">
                  <h3 className="col-span-4 text-sm font-medium text-foreground mb-2 flex items-center">
                    Project Images 
                    <span className="ml-2 text-xs inline-flex items-center bg-primary/20 text-primary px-2 py-0.5 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                      Click to view
                    </span>
                  </h3>
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleImageChange(image);
                      }}
                      data-image={image}
                      data-index={index}
                      className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 
                        ${activeImage === image 
                          ? 'border-primary shadow-glow scale-105 z-10' 
                          : 'border-transparent hover:border-primary/40'
                        } 
                        group/thumbnail hover:shadow-md cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50 hover:brightness-110`}
                      aria-label={`View image ${index + 1}`}
                      type="button"
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} ${index + 1}`}
                        className={`w-full h-full object-cover transition-all duration-300 ${activeImage !== image ? 'filter brightness-75' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleImageChange(image);
                        }}
                      />
                      
                      {/* Hover overlay for thumbnails - Make more prominent */}
                      <div className={`absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/20 to-primary/10 opacity-0 group-hover/thumbnail:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                        <div className="flex flex-col items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mb-1 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <div className="text-white text-xs font-medium px-2 py-1 bg-black/60 rounded-full backdrop-blur-sm">Click me</div>
                        </div>
                      </div>
                      
                      {/* Image Number Badge */}
                      <div className="absolute top-1 right-1 bg-black/60 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center backdrop-blur-sm">
                        {index + 1}
                      </div>
                      
                      {/* Click-to-enlarge option for individual thumbnails */}
                      <div 
                        className="absolute bottom-1 left-1 bg-black/70 text-white p-1 rounded z-20 cursor-pointer hover:bg-primary/80"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          // First change the image
                          handleImageChange(image);
                          // Then open lightbox after a small delay to ensure image is changed
                          setTimeout(() => toggleLightbox(), 50);
                        }}
                        title="Enlarge this image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Debug Information - can be removed in production */}
                <div className="mt-4 p-2 bg-black/20 rounded-md text-xs text-muted-foreground">
                  <p>Current active image: {activeImage ? activeImage.split('/').pop() : 'none'}</p>
                  <p>Total images: {project.images.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card/30 backdrop-blur-md rounded-xl border border-white/5 p-6 shadow-lg">
              <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{project.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-secondary/90 to-secondary/70 text-secondary-foreground backdrop-blur-sm font-medium border border-secondary/30 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="prose prose-sm max-w-none mb-8 text-foreground/90 leading-relaxed bg-black/5 p-4 rounded-lg border border-white/5">
                {project.description}
              </div>
              
              <div className="space-y-3 mb-8 bg-white/5 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-white/80 mb-2 uppercase tracking-wider">Project Details</h3>
                
                <div className="flex justify-between py-2.5 border-b border-border/30">
                  <span className="font-medium text-muted-foreground">Category</span>
                  <span className="text-foreground">{project.category}</span>
                </div>
                
                <div className="flex justify-between py-2.5 border-b border-border/30">
                  <span className="font-medium text-muted-foreground">Date</span>
                  <span className="text-foreground">{project.date}</span>
                </div>
                
                {project.client && (
                  <div className="flex justify-between py-2.5 border-b border-border/30">
                    <span className="font-medium text-muted-foreground">Client</span>
                    <span className="text-foreground">{project.client}</span>
                  </div>
                )}
              </div>
              
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-full py-3.5 rounded-lg overflow-hidden group/btn mb-6"
                >
                  {/* Button background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 transition-all duration-300 group-hover/btn:scale-105"></div>
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-all duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                  
                  {/* Button content */}
                  <div className="relative z-10 flex items-center justify-center">
                    <span className="font-semibold tracking-wide text-white group-hover/btn:translate-x-[-4px] transition-transform duration-300">Visit Project</span>
                    <svg 
                      className="w-5 h-5 ml-2 text-white/90 group-hover/btn:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </a>
              )}
              
              <div className="flex space-x-4">
                <button className="flex-1 relative py-3 rounded-lg border border-border/40 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <span className="relative z-10 flex justify-center items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <polyline points="16 6 12 2 8 6" />
                      <line x1="12" y1="2" x2="12" y2="15" />
                    </svg>
                    <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">Share</span>
                  </span>
                </button>
                
                <button className="flex-1 relative py-3 rounded-lg border border-border/40 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <span className="relative z-10 flex justify-center items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
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
                    <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">Like</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          
          {relatedProjects.length > 0 && (
            <div className="mt-20">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Related Projects
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/40 to-transparent ml-6"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-10" 
          onClick={toggleLightbox}
        >
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={toggleLightbox}
              className="bg-black/60 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          {/* Previous Image Button */}
          {project.images.length > 1 && (
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-primary/80 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = project.images.findIndex(img => img === activeImage);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : project.images.length - 1;
                handleImageChange(project.images[prevIndex]);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
          )}
          
          {/* Next Image Button */}
          {project.images.length > 1 && (
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-primary/80 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = project.images.findIndex(img => img === activeImage);
                const nextIndex = (currentIndex + 1) % project.images.length;
                handleImageChange(project.images[nextIndex]);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          )}
          
          <div className="relative max-w-4xl w-full max-h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={activeImage} 
              alt={project.title} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" 
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleImageChange(image);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeImage === image 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/70'
                  }`}
                ></button>
              ))}
            </div>
            
            {/* Image count indicator */}
            <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm backdrop-blur-sm">
              {project.images.findIndex(img => img === activeImage) + 1} / {project.images.length}
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;
