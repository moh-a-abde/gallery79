import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-secondary/40 backdrop-blur-xl text-secondary-foreground pt-16 pb-8 border-t border-accent/10 overflow-hidden">
      {/* Decorative gradient elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute -bottom-20 -right-20 w-[40vw] h-[40vw] bg-primary/3 rounded-full blur-[120px]"></div>
        <div className="absolute top-40 -left-20 w-[20vw] h-[20vw] bg-primary/3 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <h3 className="font-semibold text-lg mb-5 text-primary/90 relative inline-block">
              Explore
              <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 via-primary/30 to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  All Projects
                </Link>
              </li>
              <li>
                <Link to="/#featured" className="text-secondary-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Featured Work
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-secondary-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <h3 className="font-semibold text-lg mb-5 text-primary/90 relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 via-primary/30 to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              <li className="text-secondary-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-1 flex items-center group">
                <span className="text-primary/70 mr-2 opacity-60 group-hover:opacity-100 transition-opacity">✉</span> abde8473@stthomas.edu
              </li>
              <li className="text-secondary-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-1 flex items-center group">
                <span className="text-primary/70 mr-2 opacity-60 group-hover:opacity-100 transition-opacity">☎</span> +1 (612) 814-7908
              </li>
              <li>
                <Link to="/#contact" className="text-secondary-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center group">
                  <span className="text-primary/70 mr-2">→</span> Get in Touch
                  <span className="w-0 group-hover:w-full h-px bg-primary/40 transition-all duration-300 absolute bottom-0 left-0"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
          <p className="text-secondary-foreground/60 text-sm text-center animate-fade-in opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            © {new Date().getFullYear()} <span className="text-primary/80">Mohamed Abdel Hamid</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
