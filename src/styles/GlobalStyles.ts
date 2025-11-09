import { createGlobalStyle } from 'styled-components';
import { Theme } from '../contexts/ThemeContext';

interface GlobalStylesProps {
  theme: Theme;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
    position: relative;
    max-width: 100vw;
    
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(circle at 20% 50%, ${(props) =>
          props.theme.accent}02 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, ${(props) =>
          props.theme.accent}02 0%, transparent 50%),
        linear-gradient(135deg, ${(props) =>
          props.theme.accent}01 0%, transparent 100%);
      pointer-events: none;
      z-index: 0;
    }
  }

  /* Classe para títulos elegantes usando Playfair Display (similar ao Carmilla) */
  .elegant-title {
    font-family: 'Playfair Display', Georgia, serif;
  }

  /* Classe para texto corpo usando Montserrat */
  .body-text {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.accent};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.accentSecondary};
  }
`;
