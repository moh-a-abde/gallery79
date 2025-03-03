
import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="animate-fade-in inline-block chip bg-accent text-foreground mb-6">
            Showcase of Creative Projects
          </span>
          
          <h1 className="animate-slide-up opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            Crafting Digital Experiences with Precision & Purpose
          </h1>
          
          <p className="animate-slide-up opacity-0 [animation-delay:200ms] text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            A curated collection of projects showcasing attention to detail, 
            thoughtful design, and technical excellence.
          </p>
          
          <div className="animate-slide-up opacity-0 [animation-delay:400ms] flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary px-6 py-3 w-full sm:w-auto">
              Explore Projects
            </button>
            <button className="px-6 py-3 w-full sm:w-auto rounded-md border border-border hover:bg-accent/50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
    </section>
  );
};

export default Hero;
