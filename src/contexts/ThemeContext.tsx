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
  secondary: '#f5f8fc',
  background: '#fafbfd',
  backgroundAlt: '#f0f4f8',
  cardBackground: '#ffffff',
  text: '#0c3151',
  textSecondary: '#5a708a',
  accent: '#0c3151',
  accentSecondary: '#1a4d6b',
  border: 'rgba(12, 49, 81, 0.08)',
  shadow: 'rgba(12, 49, 81, 0.15)',
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
    return saved ? saved === 'dark' : true;
  });

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
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
