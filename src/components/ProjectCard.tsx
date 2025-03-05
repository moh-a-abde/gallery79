import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../lib/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Tech stack icon mapping
const getTechIcon = (tech: string): React.ReactNode => {
  // Simple SVG icons for common tech stacks
  switch (tech.toLowerCase()) {
    case 'react':
    case 'react native':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#61DAFB]" fill="currentColor">
          <path d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394c-.36.66.11 1.1.73 1.76 1.27 1.27 3.1 2.1 5.27 2.1s4.05-.87 5.35-2.14c.62-.64 1.03-1.17.65-1.72-.31-.46-1.12-.41-1.72.07-1.08.86-2.5 1.37-4.27 1.37-1.8 0-3.25-.54-4.33-1.44-.57-.48-1.37-.52-1.68-.04zm10.99-9.43a1.789 1.789 0 100 3.578 1.789 1.789 0 100-3.578z"></path>
          <path d="M12 14.918a2.139 2.139 0 100-4.278 2.139 2.139 0 000 4.278zm1.021-9.121c-4.31-.03-10.5 1.06-10.5 6.21s6.19 6.24 10.5 6.21c4.31.03 10.5-1.06 10.5-6.21s-6.19-6.24-10.5-6.21zm0 10.99c-3.84 0-8.9-.96-8.9-4.78s5.06-4.78 8.9-4.78c3.84 0 8.9.96 8.9 4.78s-5.06 4.78-8.9 4.78z"></path>
        </svg>
      );
    case 'vue.js':
    case 'vue':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#4FC08D]" fill="currentColor">
          <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78zM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43z"></path>
        </svg>
      );
    case 'angular':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#DD0031]" fill="currentColor">
          <path d="M9.93 12.645h4.134L11.996 7.74zM11.996.009L.686 3.988l1.725 14.76 9.585 5.243 9.588-5.238L23.308 3.99 11.996.01zm7.058 18.297h-2.636l-1.42-3.501H8.995l-1.42 3.501H4.937l7.06-15.648 7.057 15.648z"></path>
        </svg>
      );
    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#3178C6]" fill="currentColor">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#F7DF1E]" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#3776AB]" fill="currentColor">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.41-.08-.41.08zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
        </svg>
      );
    case 'node.js':
    case 'node':
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#339933]" fill="currentColor">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"></path>
        </svg>
      );
    case 'data visualization':
    case 'visualization':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#FF7C00]" fill="currentColor">
          <path d="M3 3h18v18H3V3zm16.5 16.5V5H4.5v14.5h15zM9 11h1v5H9v-5zm4 2h1v3h-1v-3zm4-6h1v9h-1V7zm-8 3h1v6H9v-6z"></path>
        </svg>
      );
    case 'finance':
    case 'financial':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
        </svg>
      );
    case 'dashboard':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#5D4037]" fill="currentColor">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
        </svg>
      );
    case 'web design':
    case 'ui/ux':
    case 'ui':
    case 'ux':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0097A7]" fill="currentColor">
          <path d="M17.5 12c0 1.38-1.12 2.5-2.5 2.5S12.5 13.38 12.5 12s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5zM3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14zm-5.21-9.83l-2.59 6.02-1.42-3.23-1.17 2.69-1.95-4.39 1.37-.61 0.58 1.37 1.91-4.38 1.59 1.87z"></path>
        </svg>
      );
    default:
      // Default tech icon for unknown stacks
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-muted-foreground" fill="currentColor">
          <path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
        </svg>
      );
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Get tech stacks from project tags
  const techStacks = project.tags.filter(tag => 
    ['react', 'vue', 'angular', 'typescript', 'javascript', 'python', 'node.js', 'data visualization', 
    'finance', 'dashboard', 'web design', 'ui/ux'].includes(tag.toLowerCase())
  );
  
  // Ensure we have at least some tech stacks to display
  const displayTechs = techStacks.length > 0 ? 
    techStacks.slice(0, 4) : 
    project.tags.slice(0, 2); // Fallback to generic tags

  return (
    <Link 
      to={`/project/${project.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-card/95 via-card/90 to-card/80 backdrop-blur-md border border-white/5 transition-all duration-500 hover:shadow-2xl hover:translate-y-[-3px]"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced glass effect background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
      
      {/* Enhanced card glow effect with animated gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/40 via-secondary/30 to-primary/10 opacity-0 group-hover:opacity-70 blur-xl transition-all duration-700 group-hover:duration-500 animate-gradient-x"></div>
      
      <div className="aspect-[16/9] w-full overflow-hidden relative">
        {/* Enhanced image overlay gradient with improved depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-80 z-10"></div>
        
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 filter brightness-95 group-hover:brightness-110 contrast-105"
          loading="lazy"
        />
        
        {/* Enhanced hover overlay with multi-layer gradient and subtle animation */}
        <div className={`absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent opacity-0 transition-opacity duration-500 z-10 ${isHovered ? 'opacity-100' : ''}`}></div>
        
        {/* Grid lines overlay for dashboard-like appearance with subtle animation */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay z-10"></div>
        
        {/* Subtle vignette effect for depth */}
        <div className="absolute inset-0 bg-radial-gradient opacity-70 z-5"></div>
      </div>
      
      <div className="flex flex-col p-6 flex-grow relative z-10 backdrop-blur-sm bg-gradient-to-b from-transparent via-background/20 to-background/30">
        {/* Project categories with enhanced styling */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag} 
              className="chip text-xs px-3 py-1 bg-gradient-to-r from-secondary/90 to-secondary/70 text-secondary-foreground backdrop-blur-sm font-medium rounded-full border border-secondary/30 shadow-sm group-hover:shadow-glow transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-lg font-semibold mb-2 tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:text-muted-foreground/90 transition-colors duration-300">
          {project.shortDescription}
        </p>
        
        {/* Tech stack section with enhanced styling */}
        <div className="flex flex-wrap items-center gap-4 my-2 pb-4 border-b border-border/40 relative">
          <div className="w-full mb-1">
            <span className="text-xs font-medium text-muted-foreground">Tech Stack</span>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-1 w-full">
            {displayTechs.map((tech, idx) => (
              <div 
                key={idx} 
                className="flex items-center space-x-1.5 bg-gradient-to-r from-secondary/40 to-secondary/20 px-2 py-1 rounded-md transition-all duration-300 hover:from-secondary/60 hover:to-secondary/40 border border-secondary/10"
              >
                {getTechIcon(tech)}
                <span className="text-xs font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced View Project button with gradient */}
        <div className="mt-auto">
          <button className="w-full py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none relative overflow-hidden group-hover:shadow-md">
            {/* Button gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-100 transition-opacity duration-300 group-hover:opacity-80"></div>
            
            {/* Button hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            
            {/* Button content */}
            <span className="text-sm font-medium text-primary relative z-10">Visit Project</span>
            <svg 
              className="w-4 h-4 text-primary relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {project.featured && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-primary/90 to-primary/80 text-white text-xs px-4 py-1 rounded-full backdrop-blur-md shadow-md z-20 font-medium border border-primary/30 animate-pulse-subtle">
          Featured
        </div>
      )}
    </Link>
  );
};

export default ProjectCard;
