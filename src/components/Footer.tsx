import React from 'react';

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
        <div className="pt-8 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
          <p className="text-secondary-foreground/60 text-sm text-center animate-fade-in opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <span className="font-accent">© {new Date().getFullYear()}</span> <span className="text-primary/80">Mohamed Abdel Hamid</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
