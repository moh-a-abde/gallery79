import React, { useState, useRef, useEffect } from 'react';
import { useTheme, ThemeColor } from '../lib/ThemeContext';
import { Button } from '@/components/ui/button';

export const ThemeSwitcher: React.FC = () => {
  const { colorTheme, setColorTheme, mode, toggleMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Theme options with their colors and icons
  const themeOptions: { value: ThemeColor; label: string; color: string }[] = [
    { value: 'lightBlue', label: 'Light Blue', color: 'rgb(153, 176, 255)' },
    { value: 'blue', label: 'Blue', color: 'rgb(100, 149, 237)' },
    { value: 'purple', label: 'Purple', color: 'rgb(165, 83, 255)' },
    { value: 'pink', label: 'Pink', color: 'rgb(255, 130, 180)' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle theme change
  const handleThemeChange = (newTheme: ThemeColor) => {
    setColorTheme(newTheme);
    setIsOpen(false);
  };

  // Get current theme color
  const currentThemeColor = themeOptions.find(option => option.value === colorTheme)?.color || 'rgb(165, 83, 255)';

  return (
    <div className="flex items-center gap-2">
      {/* Mode Toggle Button */}
      <Button
        onClick={toggleMode}
        variant="ghost"
        className="group relative overflow-hidden w-10 h-10 p-0 rounded-full border border-primary/20 hover:border-primary/50 transition-all duration-300"
        aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
      >
        <span className="relative z-10">
          {mode === 'dark' ? (
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-primary/80 to-primary/50 rounded-full group-hover:w-full transition-all duration-700 ease-custom-bezier"></span>
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-primary/10 transition-all duration-300 animate-shimmer"></div>
        <div className="absolute -inset-px rounded-full opacity-0 group-hover:opacity-30 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-border-pulse"></div>
      </Button>

      {/* Theme Switcher */}
      <div className="relative" ref={dropdownRef}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          className="group relative overflow-hidden py-2.5 px-6 rounded-full border border-primary/20 hover:border-primary/50 transition-all duration-300"
          aria-label="Change website theme"
        >
          <span className="relative z-10 font-medium tracking-tight flex items-center gap-3">
            <div 
              className="relative w-5 h-5 rounded-full shadow-sm"
              style={{ 
                backgroundColor: currentThemeColor,
                boxShadow: `0 0 8px ${currentThemeColor}, 0 0 4px ${currentThemeColor}`
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-pulse opacity-70"
                style={{ 
                  backgroundColor: currentThemeColor,
                  filter: 'blur(2px)'
                }}
              />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/70 via-primary to-primary/80 animate-fade-in-up opacity-0" 
                 style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Theme
            </span>
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-primary/80 to-primary/50 rounded-full group-hover:w-full transition-all duration-700 ease-custom-bezier"></span>
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-primary/10 transition-all duration-300 animate-shimmer"></div>
          <div className="absolute -inset-px rounded-full opacity-0 group-hover:opacity-30 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-border-pulse"></div>
        </Button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-card/95 backdrop-blur-lg border border-primary/20 rounded-lg shadow-lg z-50 overflow-hidden animate-fade-in-up">
            <div className="p-2 space-y-1">
              <div className="text-xs font-medium text-foreground/60 px-2 py-1">Website Color Theme</div>
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleThemeChange(option.value)}
                  className={`flex items-center w-full px-3 py-2 text-sm rounded-md transition-all duration-200 ${
                    colorTheme === option.value 
                      ? 'bg-primary/20 text-primary' 
                      : 'hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  <div 
                    className={`w-4 h-4 rounded-full mr-3 ${
                      colorTheme === option.value 
                        ? 'shadow-[0_0_6px]' 
                        : 'shadow-sm'
                    }`}
                    style={{ 
                      backgroundColor: option.color,
                      boxShadow: colorTheme === option.value ? `0 0 6px ${option.color}` : 'none'
                    }}
                  />
                  <span>{option.label}</span>
                  {colorTheme === option.value && (
                    <svg className="ml-auto w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher; 