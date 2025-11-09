import React from 'react';
import styled from 'styled-components';
import { Phone, MessageCircle } from 'lucide-react';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
      135deg,
      rgba(26, 26, 26, 0.8),
      rgba(35, 35, 35, 0.9)
    ),
    url('/background-hero.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 8rem 2rem 4rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 50%,
      rgba(212, 175, 55, 0.1) 0%,
      transparent 50%
    );
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    line-height: 1.1;
    background: linear-gradient(135deg, #ffffff, #d4af37);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  .subtitle {
    font-size: 1.5rem;
    color: #d4af37;
    margin-bottom: 1.5rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  .oab {
    font-size: 1.1rem;
    color: #999;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #cccccc;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.a`
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #0a0a0a;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const SecondaryButton = styled.a`
  background: transparent;
  color: #d4af37;
  border: 2px solid #d4af37;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  &:hover {
    background: #d4af37;
    color: #0a0a0a;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 968px) {
    margin-top: 2rem;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  max-width: 450px;
  aspect-ratio: 3/4;
  border-radius: 15px;
  background: linear-gradient(
      135deg,
      rgba(212, 175, 55, 0.15),
      rgba(0, 0, 0, 0.4)
    ),
    url('/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 20px 60px rgba(212, 175, 55, 0.3);
  border: 3px solid rgba(212, 175, 55, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(212, 175, 55, 0.1) 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
    border-radius: 15px;
  }
`;

const Badge = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background: rgba(212, 175, 55, 0.95);
  color: #0a0a0a;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);

  @media (max-width: 968px) {
    bottom: 1rem;
    right: 1rem;
    padding: 0.75rem 1.25rem;
    font-size: 0.85rem;
  }
`;

export const Hero: React.FC = () => {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <HeroText>
          <h1>Luiz Lima</h1>
          <div className="subtitle">Advogado Criminalista</div>
          <div className="oab">OAB/BA 44.444</div>
          <p>
            Defesa humanizada e técnica, com foco na dignidade e liberdade.
            Atuação estratégica baseada em sólida formação acadêmica e
            experiência em casos complexos envolvendo Direito Penal e Processual
            Penal.
          </p>
          <HeroButtons>
            <PrimaryButton href="https://wa.me/5571999999999" target="_blank">
              <MessageCircle />
              WhatsApp
            </PrimaryButton>
            <SecondaryButton href="tel:+5571999999999">
              <Phone />
              Ligar Agora
            </SecondaryButton>
          </HeroButtons>
        </HeroText>

        <HeroImageContainer>
          <HeroImage />
          <Badge>10+ Anos de Experiência</Badge>
        </HeroImageContainer>
      </HeroContent>
    </HeroSection>
  );
};
