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
  }

  body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
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
