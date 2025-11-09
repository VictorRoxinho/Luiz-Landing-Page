import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  backgroundAlt: string;
  cardBackground: string;
  text: string;
  textSecondary: string;
  accent: string;
  accentSecondary: string;
  border: string;
  shadow: string;
}

export const lightTheme: Theme = {
  primary: '#ffffff',
  secondary: '#f8f9fa',
  background: '#f8f9fa',
  backgroundAlt: '#ffffff',
  cardBackground: '#ffffff',
  text: '#1a1a1a',
  textSecondary: '#495057',
  accent: '#b8860b',
  accentSecondary: '#d4af37',
  border: 'rgba(184, 134, 11, 0.15)',
  shadow: 'rgba(0, 0, 0, 0.1)',
};

export const darkTheme: Theme = {
  primary: '#1a1a1a',
  secondary: '#2a2a2a',
  background: '#1a1a1a',
  backgroundAlt: '#2a2a2a',
  cardBackground: 'rgba(45, 45, 45, 0.9)',
  text: '#ffffff',
  textSecondary: '#cccccc',
  accent: '#d4af37',
  accentSecondary: '#f4d03f',
  border: 'rgba(212, 175, 55, 0.3)',
  shadow: 'rgba(212, 175, 55, 0.2)',
};

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // Default to dark theme
  });

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newValue = !prev;
      localStorage.setItem('theme', newValue ? 'dark' : 'light');
      return newValue;
    });
  };

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
