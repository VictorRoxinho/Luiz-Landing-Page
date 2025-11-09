import React from 'react';
import styled from 'styled-components';
import {
  CheckCircle,
  Heart,
  BookOpen,
  Target,
  Clock,
  Award,
} from 'lucide-react';

const DifferentialsSection = styled.section`
  padding: 6rem 2rem;
  background: ${(props) => props.theme.backgroundAlt};
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${(props) => props.theme.accent},
      transparent
    );
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(
      circle at 50% 50%,
      ${(props) => props.theme.accent}02 1px,
      transparent 1px
    );
    background-size: 50px 50px;
    opacity: 0.4;
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.accent};
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${(props) => props.theme.textSecondary};
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const DifferentialCard = styled.div`
  background: ${(props) => props.theme.cardBackground};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
  text-align: center;
  box-shadow: 0 4px 12px ${(props) => props.theme.shadow};

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) => props.theme.accent}80;
    box-shadow: 0 8px 24px ${(props) => props.theme.shadow};
  }

  .icon {
    width: 50px;
    height: 50px;
    color: ${(props) => props.theme.accent};
    margin: 0 auto 1.5rem;

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      margin-bottom: 1rem;
    }
  }

  h3 {
    font-size: 1.3rem;
    color: ${(props) => props.theme.text};
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.15rem;
      margin-bottom: 0.75rem;
    }
  }

  p {
    color: ${(props) => props.theme.textSecondary};
    line-height: 1.7;
    font-size: 0.95rem;

    @media (max-width: 768px) {
      font-size: 0.85rem;
      line-height: 1.6;
    }
  }
`;

const ExperienceBox = styled.div`
  background: ${(props) => props.theme.accent}10;
  border: 2px solid ${(props) => props.theme.accent}30;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin-top: 3rem;

  h3 {
    font-size: 2rem;
    color: ${(props) => props.theme.accent};
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .institutions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
`;

const ExperienceText = styled.p`
  color: ${(props) => props.theme.textSecondary};
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1rem;
`;

const InstitutionBadge = styled.div`
  background: ${(props) => props.theme.accent}10;
  border: 1px solid ${(props) => props.theme.accent}30;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  color: ${(props) => props.theme.accent};
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.accent}20;
    transform: scale(1.05);
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const ValueItem = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  padding: 1.5rem;
  background: ${(props) => props.theme.cardBackground};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border};

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.75rem;
  }

  .check-icon {
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.accent};
    flex-shrink: 0;
    margin-top: 0.25rem;

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  div {
    h4 {
      color: ${(props) => props.theme.text};
      font-size: 1.1rem;
      margin-bottom: 0.5rem;

      @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 0.35rem;
      }
    }

    p {
      color: ${(props) => props.theme.textSecondary};
      font-size: 0.9rem;
      line-height: 1.6;

      @media (max-width: 768px) {
        font-size: 0.8rem;
        line-height: 1.5;
      }
    }
  }
`;

export const Differentials: React.FC = () => {
  return (
    <DifferentialsSection id="diferenciais">
      <Container>
        <SectionTitle>Diferenciais</SectionTitle>
        <SectionSubtitle>
          O que torna nossa atuação única e eficaz na defesa criminal
        </SectionSubtitle>

        <Grid>
          <DifferentialCard>
            <Heart className="icon" />
            <h3>Defesa Humanizada</h3>
            <p>
              Atuação focada na dignidade da pessoa humana, tratando cada
              cliente com respeito e compreendendo o momento delicado que
              atravessa.
            </p>
          </DifferentialCard>

          <DifferentialCard>
            <BookOpen className="icon" />
            <h3>Formação Multidisciplinar</h3>
            <p>
              Conhecimento em Direito, Humanidades e Gestão Pública, permitindo
              análise ampla e estratégica de casos complexos.
            </p>
          </DifferentialCard>

          <DifferentialCard>
            <Target className="icon" />
            <h3>Visão Estratégica</h3>
            <p>
              Cada caso é analisado de forma única, com estratégias
              personalizadas baseadas em profundo conhecimento técnico e
              jurídico.
            </p>
          </DifferentialCard>

          <DifferentialCard>
            <Clock className="icon" />
            <h3>Atendimento Ágil</h3>
            <p>
              Compreendemos a urgência em questões criminais. Atendimento rápido
              e eficiente para proteger seus direitos imediatamente.
            </p>
          </DifferentialCard>

          <DifferentialCard>
            <Award className="icon" />
            <h3>Ética e Comprometimento</h3>
            <p>
              Total dedicação à causa do cliente, sempre pautada pelos mais
              elevados padrões éticos da advocacia.
            </p>
          </DifferentialCard>

          <DifferentialCard>
            <CheckCircle className="icon" />
            <h3>Técnica Apurada</h3>
            <p>
              Domínio profundo do Direito Penal e Processual Penal, com
              especialização reconhecida e experiência prática comprovada.
            </p>
          </DifferentialCard>
        </Grid>

        <ExperienceBox>
          <h3>Experiência em Instituições de Relevância Social e Jurídica</h3>
          <ExperienceText>
            Trajetória que inclui participação ativa em instituições que
            refletem o compromisso com a justiça social e a defesa dos direitos
            fundamentais.
          </ExperienceText>
          <div className="institutions">
            <InstitutionBadge>
              Comissão de Sistema Prisional - OAB/BA
            </InstitutionBadge>
            <InstitutionBadge>
              Comissão de Segurança Pública - OAB/BA
            </InstitutionBadge>
            <InstitutionBadge>
              Serviço de Apoio Jurídico - SAJU/UFBA
            </InstitutionBadge>
          </div>
        </ExperienceBox>

        <ValuesGrid>
          <ValueItem>
            <CheckCircle className="check-icon" />
            <div>
              <h4>Garantia desde o primeiro contato</h4>
              <p>Proteção dos seus direitos desde o momento inicial</p>
            </div>
          </ValueItem>

          <ValueItem>
            <CheckCircle className="check-icon" />
            <div>
              <h4>Experiência em casos complexos</h4>
              <p>Especialização em administração pública e direito penal</p>
            </div>
          </ValueItem>

          <ValueItem>
            <CheckCircle className="check-icon" />
            <div>
              <h4>Base acadêmica sólida</h4>
              <p>Formação pela UFBA e especializações reconhecidas</p>
            </div>
          </ValueItem>

          <ValueItem>
            <CheckCircle className="check-icon" />
            <div>
              <h4>Dedicação integral ao cliente</h4>
              <p>Acompanhamento próximo em todas as etapas do processo</p>
            </div>
          </ValueItem>
        </ValuesGrid>
      </Container>
    </DifferentialsSection>
  );
};
