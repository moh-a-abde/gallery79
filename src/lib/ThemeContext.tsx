import React, { createContext, useContext, useState, useEffect } from 'react';

// Define theme types
export type ThemeColor = 'purple' | 'pink' | 'lightBlue' | 'blue';
export type ThemeMode = 'dark' | 'light';

// Define theme context type
type ThemeContextType = {
  colorTheme: ThemeColor;
  setColorTheme: (theme: ThemeColor) => void;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
};

// Create the context with default values
const ThemeContext = createContext<ThemeContextType>({
  colorTheme: 'purple',
  setColorTheme: () => {},
  mode: 'dark',
  setMode: () => {},
  toggleMode: () => {},
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get theme from localStorage or use default
  const [colorTheme, setColorTheme] = useState<ThemeColor>(() => {
    const savedTheme = localStorage.getItem('gallery79-color-theme');
    return (savedTheme as ThemeColor) || 'purple';
  });

  const [mode, setMode] = useState<ThemeMode>(() => {
    const savedMode = localStorage.getItem('gallery79-mode');
    return (savedMode as ThemeMode) || 'dark';
  });

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');
  };

  // Update CSS variables when theme changes
  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('gallery79-color-theme', colorTheme);
    localStorage.setItem('gallery79-mode', mode);
    
    // Update the data-theme attribute on the document element
    document.documentElement.setAttribute('data-theme', colorTheme);
    document.documentElement.setAttribute('data-mode', mode);
    
    // Apply theme-specific CSS variables
    const root = document.documentElement;
    
    // Set color theme
    switch (colorTheme) {
      case 'pink':
        root.style.setProperty('--primary', '340 85% 75%');
        root.style.setProperty('--ring', '340 85% 75%');
        break;
      case 'lightBlue':
        root.style.setProperty('--primary', '220 85% 75%');
        root.style.setProperty('--ring', '220 85% 75%');
        break;
      case 'blue':
        root.style.setProperty('--primary', '210 85% 65%');
        root.style.setProperty('--ring', '210 85% 65%');
        break;
      case 'purple':
      default:
        root.style.setProperty('--primary', '267 100% 65%');
        root.style.setProperty('--ring', '267 100% 65%');
        break;
    }

    // Set light/dark mode
    if (mode === 'light') {
      root.style.setProperty('--background', '0 0% 98%');
      root.style.setProperty('--foreground', '224 71% 4%');
      root.style.setProperty('--card', '0 0% 100%');
      root.style.setProperty('--card-foreground', '224 71% 4%');
      root.style.setProperty('--popover', '0 0% 100%');
      root.style.setProperty('--popover-foreground', '224 71% 4%');
      root.style.setProperty('--secondary', '220 14% 96%');
      root.style.setProperty('--secondary-foreground', '220 9% 46%');
      root.style.setProperty('--muted', '220 14% 96%');
      root.style.setProperty('--muted-foreground', '220 9% 46%');
      root.style.setProperty('--accent', '220 14% 96%');
      root.style.setProperty('--accent-foreground', '224 71% 4%');
      root.style.setProperty('--destructive', '0 84% 60%');
      root.style.setProperty('--destructive-foreground', '210 40% 98%');
      root.style.setProperty('--border', '220 13% 91%');
    } else {
      root.style.setProperty('--background', '224 71% 4%');
      root.style.setProperty('--foreground', '213 31% 91%');
      root.style.setProperty('--card', '224 71% 4%');
      root.style.setProperty('--card-foreground', '213 31% 91%');
      root.style.setProperty('--popover', '224 71% 4%');
      root.style.setProperty('--popover-foreground', '213 31% 91%');
      root.style.setProperty('--secondary', '226 58% 10%');
      root.style.setProperty('--secondary-foreground', '215 20.2% 65.1%');
      root.style.setProperty('--muted', '223 47% 11%');
      root.style.setProperty('--muted-foreground', '215.4 16.3% 56.9%');
      root.style.setProperty('--accent', '226 58% 10%');
      root.style.setProperty('--accent-foreground', '210 40% 98%');
      root.style.setProperty('--destructive', '0 63% 31%');
      root.style.setProperty('--destructive-foreground', '210 40% 98%');
      root.style.setProperty('--border', '240 3.7% 15.9%');
    }
  }, [colorTheme, mode]);

  return (
    <ThemeContext.Provider value={{ colorTheme, setColorTheme, mode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}; 