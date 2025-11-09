import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Scale, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const HeaderContainer = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(props) =>
    props.$scrolled ? 'rgba(26, 26, 26, 0.95)' : 'transparent'};
  backdrop-filter: ${(props) => (props.$scrolled ? 'blur(10px)' : 'none')};
  transition: all 0.3s ease;
  padding: 1.5rem 2rem;
  border-bottom: ${(props) =>
    props.$scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : 'none'};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;

  .logo-icon {
    width: 32px;
    height: 32px;
    color: #d4af37;
  }

  .logo-image {
    height: 48px;
    width: auto;
    object-fit: contain;

    @media (max-width: 480px) {
      height: 42px;
    }
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${(props) => (props.$isOpen ? '0' : '-100%')};
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: rgba(30, 30, 30, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 5rem 2rem;
    transition: right 0.3s ease;
    border-left: 1px solid rgba(212, 175, 55, 0.2);
    gap: 2.5rem;
  }
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: #d4af37;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #d4af37;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    width: 28px;
    height: 28px;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: 2px solid #d4af37;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d4af37;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 1rem;

  &:hover {
    background: #d4af37;
    color: #0a0a0a;
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin-left: 0.5rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CTAButton = styled.a`
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #0a0a0a;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: inline-block;
  font-size: 0.95rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.65rem 1.25rem;
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <HeaderContainer $scrolled={scrolled}>
        <Nav>
          <Logo onClick={() => scrollToSection('hero')}>
            <img
              src="/Logo.png"
              alt="Luiz Lima - Advogado Criminalista"
              className="logo-image"
            />
          </Logo>

          <NavLinks $isOpen={menuOpen}>
            <NavLink onClick={() => scrollToSection('sobre')}>Sobre</NavLink>
            <NavLink onClick={() => scrollToSection('atuacao')}>
              Atuação
            </NavLink>
            <NavLink onClick={() => scrollToSection('diferenciais')}>
              Diferenciais
            </NavLink>
            <NavLink onClick={() => scrollToSection('contato')}>
              Contato
            </NavLink>
            <CTAButton href="https://wa.me/5571999999999" target="_blank">
              Consulta Urgente
            </CTAButton>
          </NavLinks>

          <HeaderControls>
            <ThemeToggle
              onClick={toggleTheme}
              title={
                isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'
              }
            >
              {isDark ? <Sun /> : <Moon />}
            </ThemeToggle>

            <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </MenuButton>
          </HeaderControls>
        </Nav>
      </HeaderContainer>

      <Overlay $isOpen={menuOpen} onClick={() => setMenuOpen(false)} />
    </>
  );
};
