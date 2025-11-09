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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
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
