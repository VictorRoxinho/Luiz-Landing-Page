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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const DifferentialCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(45, 45, 45, 0.8),
    rgba(35, 35, 35, 0.8)
  );
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(212, 175, 55, 0.4);
    background: linear-gradient(
      135deg,
      rgba(55, 55, 55, 0.9),
      rgba(45, 45, 45, 0.9)
    );
  }

  .icon {
    width: 50px;
    height: 50px;
    color: #d4af37;
    margin: 0 auto 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  p {
    color: #cccccc;
    line-height: 1.7;
    font-size: 0.95rem;
  }
`;

const ExperienceBox = styled.div`
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.1),
    rgba(212, 175, 55, 0.05)
  );
  border: 2px solid rgba(212, 175, 55, 0.3);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin-top: 3rem;

  h3 {
    font-size: 2rem;
    color: #d4af37;
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

const InstitutionBadge = styled.div`
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  color: #d4af37;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.2);
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
  background: rgba(35, 35, 35, 0.7);
  border-radius: 8px;
  border: 1px solid rgba(212, 175, 55, 0.2);

  .check-icon {
    width: 24px;
    height: 24px;
    color: #d4af37;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }

  div {
    h4 {
      color: #ffffff;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: #999;
      font-size: 0.9rem;
      line-height: 1.6;
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
          <p
            style={{
              color: '#cccccc',
              fontSize: '1.05rem',
              lineHeight: '1.8',
              marginBottom: '1rem',
            }}
          >
            Trajetória que inclui participação ativa em instituições que
            refletem o compromisso com a justiça social e a defesa dos direitos
            fundamentais.
          </p>
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
