import React from 'react';
import styled from 'styled-components';
import { GraduationCap, Award, Users, Scale } from 'lucide-react';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: #2a2a2a;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #d4af37, transparent);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #d4af37;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #cccccc;
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  p {
    color: #cccccc;
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    text-align: justify;
  }
`;

const HighlightBox = styled.div`
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.1),
    rgba(212, 175, 55, 0.05)
  );
  border-left: 4px solid #d4af37;
  padding: 2rem;
  border-radius: 8px;

  h3 {
    color: #d4af37;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;

    li {
      color: #cccccc;
      margin-bottom: 0.75rem;
      padding-left: 1.5rem;
      position: relative;
      line-height: 1.6;

      &::before {
        content: '▸';
        color: #d4af37;
        position: absolute;
        left: 0;
        font-weight: bold;
      }
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StatCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(45, 45, 45, 0.9),
    rgba(35, 35, 35, 0.9)
  );
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(212, 175, 55, 0.5);
  }

  .icon {
    width: 50px;
    height: 50px;
    margin: 0 auto 1rem;
    color: #d4af37;
  }

  h3 {
    font-size: 2rem;
    color: #d4af37;
    margin-bottom: 0.5rem;
  }

  p {
    color: #cccccc;
    font-size: 1rem;
  }
`;

export const About: React.FC = () => {
  return (
    <AboutSection id="sobre">
      <Container>
        <SectionTitle>Sobre Dr. Luiz Lima</SectionTitle>
        <SectionSubtitle>
          Formação sólida e experiência prática para defender seus direitos
        </SectionSubtitle>

        <AboutContent>
          <AboutText>
            <p>
              <strong>Luiz Lima</strong> é um advogado criminalista com uma
              atuação focada na
              <strong> defesa humanizada, dignidade e liberdade</strong> de seus
              clientes. Sua prática profissional é construída sobre uma base
              acadêmica sólida, com a compreensão de que o Direito Penal deve
              ser aplicado de forma justa e técnica.
            </p>
            <p>
              Formado em Direito pela <strong>UFBA</strong>, uma das mais
              tradicionais do país, Luiz é especialista em Direito Penal e
              Processual Penal, com pós-graduação pela FL. Além disso, seu
              conhecimento multidisciplinar é reforçado pela graduação em
              <strong> Humanidades (UFBA)</strong> e pela pós-graduação em
              <strong> Gestão Pública Municipal (UNEB)</strong>.
            </p>
            <p>
              Esses diferenciais o permitem atuar de forma estratégica em casos
              complexos, como os que envolvem a administração pública, com visão
              ampla e técnica apurada.
            </p>
          </AboutText>

          <HighlightBox>
            <h3>Formação Acadêmica</h3>
            <ul>
              <li>Graduação em Direito - UFBA</li>
              <li>Graduação em Humanidades - UFBA</li>
              <li>Especialização em Direito Penal e Processual Penal - FL</li>
              <li>Pós-graduação em Gestão Pública Municipal - UNEB</li>
            </ul>
          </HighlightBox>
        </AboutContent>

        <StatsGrid>
          <StatCard>
            <GraduationCap className="icon" />
            <h3>4</h3>
            <p>Titulações Acadêmicas</p>
          </StatCard>

          <StatCard>
            <Scale className="icon" />
            <h3>OAB/BA</h3>
            <p>44.444</p>
          </StatCard>

          <StatCard>
            <Award className="icon" />
            <h3>Especialista</h3>
            <p>Direito Penal e Processual</p>
          </StatCard>

          <StatCard>
            <Users className="icon" />
            <h3>100%</h3>
            <p>Dedicação ao Cliente</p>
          </StatCard>
        </StatsGrid>
      </Container>
    </AboutSection>
  );
};
