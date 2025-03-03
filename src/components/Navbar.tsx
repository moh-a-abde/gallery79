
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="font-heading text-xl font-semibold tracking-tight"
        >
          Portfolio.
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-sm font-medium hover:text-primary/80 transition-colors"
          >
            Projects
          </Link>
          <Link 
            to="/#about" 
            className="text-sm font-medium hover:text-primary/80 transition-colors"
          >
            About
          </Link>
          <Link 
            to="/#contact" 
            className="text-sm font-medium hover:text-primary/80 transition-colors"
          >
            Contact
          </Link>
        </nav>
        
        <button 
          className="hidden md:flex btn-primary px-4 py-2"
        >
          Get in Touch
        </button>
        
        <button 
          className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
          aria-label="Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
