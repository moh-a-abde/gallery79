import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we should show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      // Determine if page is scrolled for styling
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-xl border-b border-primary/10 py-3' 
          : 'bg-background/50 backdrop-blur-lg py-5'
      } ${!visible ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-center">
        <Link 
          to="/" 
          className="group flex items-center gap-3 py-1"
        >
          <div className="h-8 w-8 relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <img 
              src="/gallery79/gallery79-icon.svg" // huh
              alt="Gallery79 Logo" 
              className="w-full h-full object-contain filter drop-shadow-lg animate-rotate-in"
              style={{ animationDelay: '0.1s' }}
            />
          </div>
          <span className="font-heading text-3xl font-medium tracking-tight relative overflow-hidden">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/90 via-primary to-primary/70 animate-fade-in-up opacity-0" 
                 style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Gallery79
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-primary/80 to-primary/50 rounded-full group-hover:w-full transition-all duration-700 ease-custom-bezier"></span>
          </span>
        </Link>
      </div>
      
      {/* Glowing effect behind the navbar */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-60"></div>
    </header>
  );
};

export default Navbar;
