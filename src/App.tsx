import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Practice } from './components/Practice';
import { Differentials } from './components/Differentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Header />
      <Hero />
      <About />
      <Practice />
      <Differentials />
      <Contact />
      <Footer />
    </StyledThemeProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
