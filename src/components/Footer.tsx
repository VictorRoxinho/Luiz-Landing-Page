import React from 'react';
import styled from 'styled-components';
import { Scale, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.background};
  border-top: 1px solid ${(props) => props.theme.border};
  padding: 3rem 2rem 1.5rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterColumn = styled.div`
  h3 {
    font-family: 'Playfair Display', Georgia, serif;
    color: ${(props) => props.theme.accent};
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  p {
    color: ${(props) => props.theme.textSecondary};
    line-height: 1.7;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 0.75rem;

      a {
        color: ${(props) => props.theme.textSecondary};
        text-decoration: none;
        transition: color 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.95rem;

        &:hover {
          color: ${(props) => props.theme.accent};
        }

        svg {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => props.theme.accent}10;
  border: 1px solid ${(props) => props.theme.accent}30;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.accent};
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.accent}20;
    border-color: ${(props) => props.theme.accent};
    transform: translateY(-3px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${(props) => props.theme.border},
    transparent
  );
  margin: 2rem 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  p {
    color: ${(props) => props.theme.textSecondary};
    font-size: 0.9rem;
  }

  .credits {
    color: ${(props) => props.theme.textSecondary};
    font-size: 0.85rem;

    a {
      color: ${(props) => props.theme.accent};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterColumn>
            <h3>
              <Scale />
              Luiz Lima
            </h3>
            <p>
              Advogado criminalista especializado em Direito Penal e Processual
              Penal, com atuação focada na defesa humanizada e técnica de seus
              clientes.
            </p>
            <p>
              <strong>OAB/BA 44.444</strong>
            </p>
            <SocialLinks>
              <SocialIcon
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </SocialIcon>
              <SocialIcon
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </SocialIcon>
              <SocialIcon href="mailto:contato@luizlima.adv.br">
                <Mail />
              </SocialIcon>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <h3>Links Rápidos</h3>
            <ul>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#atuacao">Áreas de Atuação</a>
              </li>
              <li>
                <a href="#diferenciais">Diferenciais</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h3>Contato</h3>
            <ul>
              <li>
                <a href="tel:+5571999999999">
                  <Phone />
                  (71) 99999-9999
                </a>
              </li>
              <li>
                <a href="mailto:contato@luizlima.adv.br">
                  <Mail />
                  contato@luizlima.adv.br
                </a>
              </li>
            </ul>
          </FooterColumn>
        </FooterContent>

        <Divider />

        <FooterBottom>
          <p>
            © {currentYear} Luiz Lima - Advogado Criminalista. Todos os direitos
            reservados.
          </p>
          <p className="credits">Desenvolvido com ❤️ para defender a justiça</p>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};
