import React from 'react';
import styled from 'styled-components';
import { Phone, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5571983561288';
const PHONE_NUMBER = '+5571983561288';

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
    gap: 2rem;
    grid-template-rows: auto auto auto auto;
  }
`;

const HeroText = styled.div`
  @media (max-width: 968px) {
    display: none;
  }

  h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 3.5rem;
    margin-bottom: 1rem;
    line-height: 1.1;
    font-weight: 700;
    background: linear-gradient(
      135deg,
      #ffffff,
      ${(props) => props.theme.accent}
    );
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
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    color: ${(props) => props.theme.accent};
    margin-bottom: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  .oab {
    font-size: 1.1rem;
    color: ${(props) => props.theme.textSecondary};
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${(props) => props.theme.textSecondary};
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const MobileHeroHeader = styled.div`
  display: none;

  @media (max-width: 968px) {
    display: block;
    text-align: center;
    margin-bottom: 2rem;
    order: 1;
  }

  h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.1;
    font-weight: 700;
    background: linear-gradient(
      135deg,
      #ffffff,
      ${(props) => props.theme.accent}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  .subtitle {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme.accent};
    margin-bottom: 1rem;
    font-weight: 500;
    letter-spacing: 0.5px;

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  .oab {
    font-size: 1rem;
    color: ${(props) => props.theme.textSecondary};
    margin-bottom: 0;
    font-weight: 500;
  }
`;

const MobileHeroDescription = styled.div`
  display: none;

  @media (max-width: 968px) {
    display: block;
    text-align: center;
    margin-bottom: 2rem;
    order: 3;
  }

  p {
    font-size: 1rem;
    line-height: 1.8;
    color: ${(props) => props.theme.textSecondary};
    margin-bottom: 0;

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    display: none;
  }
`;

const MobileHeroButtons = styled.div`
  display: none;

  @media (max-width: 968px) {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    order: 4;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.a`
  font-family: 'Montserrat', sans-serif;
  background: ${(props) => props.theme.accent};
  color: #ffffff;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px ${(props) => props.theme.accent}40;
    background: ${(props) => props.theme.accentSecondary};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const SecondaryButton = styled.a`
  font-family: 'Montserrat', sans-serif;
  background: transparent;
  color: ${(props) => props.theme.accent};
  border: 2px solid ${(props) => props.theme.accent};
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  &:hover {
    background: ${(props) => props.theme.accent};
    color: #ffffff;
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
    margin-top: 0;
    order: 2;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  max-width: 450px;
  aspect-ratio: 3/4;
  border-radius: 15px;
  background: linear-gradient(
      135deg,
      ${(props) => props.theme.accent}15,
      rgba(0, 0, 0, 0.4)
    ),
    url('/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 20px 60px ${(props) => props.theme.accent}30;
  border: 3px solid ${(props) => props.theme.accent}30;
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
      ${(props) => props.theme.accent}10 0%,
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
  background: ${(props) => props.theme.accent}f0;
  color: #ffffff;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 10px 30px ${(props) => props.theme.accent}40;

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
        {/* Layout Desktop */}
        <HeroText>
          <h1>Luiz Lima</h1>
          <div className="subtitle">Advogado Criminalista</div>
          <div className="oab">OAB/BA 71.291</div>
          <p>
            Defesa humanizada e técnica, com foco na dignidade e liberdade.
            Atuação estratégica baseada em sólida formação acadêmica e
            experiência em casos complexos envolvendo Direito Penal e Processual
            Penal.
          </p>
          <HeroButtons>
            <PrimaryButton href={WHATSAPP_URL} target="_blank">
              <MessageCircle />
              WhatsApp
            </PrimaryButton>
            <SecondaryButton href={`tel:${PHONE_NUMBER}`}>
              <Phone />
              Ligar Agora
            </SecondaryButton>
          </HeroButtons>
        </HeroText>

        <HeroImageContainer>
          <HeroImage />
          <Badge>10+ Anos de Experiência</Badge>
        </HeroImageContainer>

        {/* Layout Mobile - Header */}
        <MobileHeroHeader>
          <h1>Luiz Lima</h1>
          <div className="subtitle">Advogado Criminalista</div>
          <div className="oab">OAB/BA 71.291</div>
        </MobileHeroHeader>

        {/* Layout Mobile - Description */}
        <MobileHeroDescription>
          <p>
            Defesa humanizada e técnica, com foco na dignidade e liberdade.
            Atuação estratégica baseada em sólida formação acadêmica e
            experiência em casos complexos envolvendo Direito Penal e Processual
            Penal.
          </p>
        </MobileHeroDescription>

        {/* Layout Mobile - Buttons */}
        <MobileHeroButtons>
          <PrimaryButton href={WHATSAPP_URL} target="_blank">
            <MessageCircle />
            WhatsApp
          </PrimaryButton>
          <SecondaryButton href={`tel:${PHONE_NUMBER}`}>
            <Phone />
            Ligar Agora
          </SecondaryButton>
        </MobileHeroButtons>
      </HeroContent>
    </HeroSection>
  );
};
