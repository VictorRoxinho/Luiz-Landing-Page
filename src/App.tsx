import React from 'react';
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
    <>
      <GlobalStyles theme={theme} />
      <Header />
      <Hero />
      <About />
      <Practice />
      <Differentials />
      <Contact />
      <Footer />
    </>
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
