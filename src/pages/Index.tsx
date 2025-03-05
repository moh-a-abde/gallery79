import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';
import FeaturedProjects from '../components/FeaturedProjects';
import ProfileStatus from '../components/ProfileStatus';

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [showStatusMessage, setShowStatusMessage] = useState(false);
  
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
        {/* Header with avatar */}
        <div className="container-custom mb-8">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
              <div className="relative group" onMouseEnter={() => setShowStatusMessage(true)} onMouseLeave={() => setShowStatusMessage(false)}>
                <div className="transition-transform hover:scale-105 relative">
                  <img 
                    src="/gallery79/logo.png" 
                    alt="Mohamed Abdel Hamid" 
                    className="w-24 h-24 rounded-full border-2 border-primary/30 shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1">
                    <ProfileStatus />
                  </div>
                </div>
                
                {/* Status Message Popup - Only show when hovering and fully visible */}
                {showStatusMessage && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-card/95 backdrop-blur-lg border border-primary/20 rounded-xl shadow-xl z-20 animate-fade-in-up overflow-hidden">
                    {/* Triangle pointer */}
                    <div 
                      className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card/95 border-t border-l border-primary/20 transform rotate-45"
                    ></div>
                    
                    {/* Header with status */}
                    <div className="px-4 pt-4 pb-2 flex items-center justify-between border-b border-primary/10">
                      <div className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary/90 via-primary to-primary/70">
                        Daily Message
                      </div>
                      {(() => {
                        try {
                          const savedStatus = localStorage.getItem('profileStatus');
                          if (savedStatus) {
                            const parsedStatus = JSON.parse(savedStatus);
                            const statusType = parsedStatus.status || 'online';
                            const statusColor = 
                              statusType === 'online' ? 'bg-green-500' : 
                              statusType === 'busy' ? 'bg-red-500' : 
                              'bg-gray-500';
                            const statusTextColor = 
                              statusType === 'online' ? 'text-green-500' : 
                              statusType === 'busy' ? 'text-red-500' : 
                              'text-gray-500';
                            
                            return (
                              <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-background/50 border border-primary/10 text-xs">
                                <div className={`w-2 h-2 ${statusColor} rounded-full ${statusType === 'online' ? 'animate-pulse' : ''}`}></div>
                                <span className={`capitalize ${statusTextColor}`}>{statusType}</span>
                              </div>
                            );
                          }
                          return null;
                        } catch (error) {
                          return null;
                        }
                      })()}
                    </div>
                    
                    {/* Message content */}
                    <div className="px-4 py-4">
                      <div className="bg-background/50 rounded-xl p-3 text-sm text-foreground/90 border border-primary/10 shadow-inner">
                        {(() => {
                          try {
                            const savedStatus = localStorage.getItem('profileStatus');
                            if (savedStatus) {
                              const parsedStatus = JSON.parse(savedStatus);
                              const message = parsedStatus.message || "Hello! I'm currently available for new projects.";
                              return (
                                <div className="relative">
                                  <div className="absolute -top-1 -left-1 text-primary/30 opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-50">
                                      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                                    </svg>
                                  </div>
                                  <p className="pl-5">{message}</p>
                                </div>
                              );
                            }
                            return "Hello! I'm currently available for new projects.";
                          } catch (error) {
                            return "Hello! I'm currently available for new projects.";
                          }
                        })()}
                      </div>
                      
                      {/* Last updated timestamp */}
                      <div className="text-[10px] text-muted-foreground/70 text-right mt-2 flex items-center justify-end gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {(() => {
                          try {
                            const savedStatus = localStorage.getItem('profileStatus');
                            if (savedStatus) {
                              const parsedStatus = JSON.parse(savedStatus);
                              const date = new Date(parsedStatus.lastUpdated);
                              return `Updated: ${date.toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric',
                                year: 'numeric',
                              })}`;
                            }
                            return '';
                          } catch (error) {
                            return '';
                          }
                        })()}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </h2>
            <div className="flex items-center mt-2 text-muted-foreground">
              <a href="https://moh-a-abde.github.io" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                St. Paul, MN
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="container-custom mb-8">
          <div className="max-w-2xl mx-auto">
            <div 
              className="h-px w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto animate-fade-in opacity-0"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            ></div>
          </div>
        </div>
        
        {/* Curated Collection Text */}
        <div className="container-custom mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <p 
              className="font-accent italic text-lg text-muted-foreground leading-relaxed animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              A curated collection of projects showcasing attention to detail, 
              thoughtful design, and technical excellence.
            </p>
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
