
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-sm py-4' 
          : 'bg-white/80 backdrop-blur-md py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-center">
        <Link 
          to="/" 
          className="group flex items-center gap-2 text-center"
        >
          <Sparkles 
            className="text-primary h-5 w-5 animate-pulse" 
            strokeWidth={1.5} 
          />
          <span className="font-heading text-2xl font-semibold tracking-tight relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 animate-slide-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              Project Gallery
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-500 ease-custom-bezier"></span>
          </span>
          <Sparkles 
            className="text-primary h-5 w-5 animate-pulse" 
            strokeWidth={1.5} 
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
