import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';
import FeaturedProjects from '../components/FeaturedProjects';

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Set loaded after a slight delay to trigger entrance animations
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col bg-background transition-opacity duration-700 ${
      loaded ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Top-right gradient blob */}
        <div className="absolute -top-20 -right-20 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] opacity-50"></div>
        
        {/* Bottom-left gradient blob */}
        <div className="absolute -bottom-40 -left-20 w-[30vw] h-[30vw] bg-primary/5 rounded-full blur-[100px] opacity-40"></div>
        
        {/* Center gradient */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] bg-primary/3 rounded-full blur-[150px] opacity-20 animate-pulse" style={{ animationDuration: '15s' }}></div>
      </div>
      
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16 relative z-10">
        {/* Curated Collection Text */}
        <div className="container-custom mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <p 
              className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              A curated collection of projects showcasing attention to detail, 
              thoughtful design, and technical excellence.
            </p>
            <div 
              className="mt-8 h-px w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto animate-fade-in opacity-0"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            ></div>
          </div>
        </div>
        
        {/* Featured Projects */}
        <FeaturedProjects />
        
        {/* Project Grid */}
        <ProjectGrid />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
