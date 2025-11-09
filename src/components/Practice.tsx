import React from 'react';
import styled from 'styled-components';
import {
  Shield,
  FileText,
  Users,
  Landmark,
  AlertCircle,
  Briefcase,
} from 'lucide-react';

const PracticeSection = styled.section`
  padding: 6rem 2rem;
  background: ${(props) => props.theme.background};
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

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: ${(props) => props.theme.cardBackground};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 15px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px ${(props) => props.theme.shadow};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.accent},
      ${(props) => props.theme.accentSecondary}
    );
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: ${(props) => props.theme.accent}80;
    box-shadow: 0 20px 40px ${(props) => props.theme.shadow},
      0 8px 24px ${(props) => props.theme.accent}20;

    &::before {
      transform: scaleX(1);
    }
  }

  .icon {
    width: 50px;
    height: 50px;
    color: ${(props) => props.theme.accent};
    margin-bottom: 1.5rem;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    color: ${(props) => props.theme.text};
    margin-bottom: 1rem;
    font-weight: 600;
    letter-spacing: 0.3px;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.textSecondary};
    line-height: 1.7;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    font-weight: 400;
  }

  ul {
    list-style: none;

    li {
      color: ${(props) => props.theme.textSecondary};
      font-size: 0.95rem;
      margin-bottom: 0.5rem;
      padding-left: 1.25rem;
      position: relative;

      &::before {
        content: '•';
        color: ${(props) => props.theme.accent};
        position: absolute;
        left: 0;
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
  }
`;

export const Practice: React.FC = () => {
  return (
    <PracticeSection id="atuacao">
      <Container>
        <SectionTitle>Áreas de Atuação</SectionTitle>
        <SectionSubtitle>
          Especialização em Direito Penal e Processual Penal com foco em casos
          complexos
        </SectionSubtitle>

        <CardsGrid>
          <Card>
            <Shield className="icon" />
            <h3>Defesa Criminal</h3>
            <p>
              Defesa técnica e humanizada em todas as fases do processo penal,
              desde o inquérito policial até os tribunais superiores.
            </p>
            <ul>
              <li>Audiências de custódia</li>
              <li>Liberdade provisória</li>
              <li>Defesa em júri popular</li>
              <li>Recursos em tribunais</li>
            </ul>
          </Card>

          <Card>
            <FileText className="icon" />
            <h3>Inquéritos Policiais</h3>
            <p>
              Acompanhamento desde a fase investigativa, garantindo seus
              direitos e evitando abusos durante as investigações.
            </p>
            <ul>
              <li>Habeas Corpus preventivo</li>
              <li>Trancamento de inquérito</li>
              <li>Acompanhamento de oitivas</li>
              <li>Defesa prévia estratégica</li>
            </ul>
          </Card>

          <Card>
            <Landmark className="icon" />
            <h3>Crimes contra Administração Pública</h3>
            <p>
              Experiência em casos complexos envolvendo gestão pública, com
              conhecimento especializado em Gestão Pública Municipal.
            </p>
            <ul>
              <li>Improbidade administrativa</li>
              <li>Peculato e corrupção</li>
              <li>Licitações e contratos</li>
              <li>Crimes de responsabilidade</li>
            </ul>
          </Card>

          <Card>
            <AlertCircle className="icon" />
            <h3>Crimes Econômicos</h3>
            <p>
              Defesa técnica em crimes de natureza econômica e financeira, com
              análise estratégica de cada caso.
            </p>
            <ul>
              <li>Estelionato</li>
              <li>Apropriação indébita</li>
              <li>Crimes tributários</li>
              <li>Lavagem de dinheiro</li>
            </ul>
          </Card>

          <Card>
            <Users className="icon" />
            <h3>Crimes contra a Pessoa</h3>
            <p>
              Atuação humanizada em crimes que envolvem ofensas à vida,
              integridade física e honra das pessoas.
            </p>
            <ul>
              <li>Homicídio e lesão corporal</li>
              <li>Crimes de trânsito</li>
              <li>Injúria, calúnia e difamação</li>
              <li>Ameaça e constrangimento</li>
            </ul>
          </Card>

          <Card>
            <Briefcase className="icon" />
            <h3>Direito Penal Empresarial</h3>
            <p>
              Defesa de empresários e empresas em questões criminais, com foco
              na preservação da atividade empresarial.
            </p>
            <ul>
              <li>Compliance criminal</li>
              <li>Crimes societários</li>
              <li>Responsabilidade penal da pessoa jurídica</li>
              <li>Acordos de colaboração</li>
            </ul>
          </Card>
        </CardsGrid>
      </Container>
    </PracticeSection>
  );
};
