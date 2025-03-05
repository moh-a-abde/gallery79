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
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="inline-block text-xl font-medium px-2 py-2 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/90 animate-pulse">
            Featured Projects
          </span>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></div>
        </h2>
      </div>
      
      <div className="relative group">
        <div className="embla overflow-hidden rounded-2xl" ref={emblaRef}>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-medium mb-2">{project.title}</h3>
                      <p className="text-white/90 text-sm line-clamp-2">{project.shortDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-background/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 z-10 opacity-80 group-hover:opacity-100 hover:scale-110"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-7 w-7 text-primary group-hover:animate-pulse" />
        </button>
        
        <button
          className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-background/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 z-10 opacity-80 group-hover:opacity-100 hover:scale-110"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ChevronRight className="h-7 w-7 text-primary group-hover:animate-pulse" />
        </button>
        
        {/* Elegant gradient glow behind the carousel */}
        <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-3xl opacity-50"></div>
        
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? 'w-10 bg-gradient-to-r from-primary/70 to-primary' 
                  : 'w-2.5 bg-primary/20 hover:bg-primary/40'
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