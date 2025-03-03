import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project, projects } from '../lib/projects';
import { useNavigate } from 'react-router-dom';

const FeaturedProjects: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigate = useNavigate();
  
  const featuredProjects = projects.filter(project => project.featured);
  
  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  
  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  
  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  
  React.useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);
  
  const handleProjectClick = (project: Project) => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="container-custom mb-16">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-2xl font-medium mb-4 animate-fade-in-up opacity-0" 
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Featured Projects
        </h2>
      </div>
      
      <div className="relative">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container">
            {featuredProjects.map((project) => (
              <div 
                key={project.id} 
                className="embla__slide"
              >
                <div 
                  className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="aspect-w-16">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-primary/10 transition-colors duration-300 z-10"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
        
        <button
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-primary/10 transition-colors duration-300 z-10"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ChevronRight className="h-7 w-7" />
        </button>
        
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? 'w-8 bg-primary' 
                  : 'w-2 bg-primary/30'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects; 