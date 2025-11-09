import React, { useState } from 'react';
import styled from 'styled-components';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: ${(props) => props.theme.background};
  position: relative;
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: ${(props) => props.theme.cardBackground};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  align-items: start;
  gap: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.accent}80;
    transform: translateX(5px);
  }

  .icon {
    width: 40px;
    height: 40px;
    color: ${(props) => props.theme.accent};
    flex-shrink: 0;
  }

  .content {
    flex: 1;

    h3 {
      color: ${(props) => props.theme.accent};
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: ${(props) => props.theme.textSecondary};
      line-height: 1.7;
      font-size: 1rem;

      a {
        color: ${(props) => props.theme.accent};
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: ${(props) => props.theme.accent}cc;
        }
      }
    }
  }
`;

const ContactForm = styled.form`
  background: ${(props) => props.theme.cardBackground};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 15px;
  padding: 2.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    color: ${(props) => props.theme.accent};
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }

  input,
  textarea {
    width: 100%;
    background: ${(props) => props.theme.background};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 8px;
    padding: 0.875rem;
    color: ${(props) => props.theme.text};
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.accent};
      box-shadow: 0 0 0 3px ${(props) => props.theme.accent}10;
    }

    &::placeholder {
      color: ${(props) => props.theme.textSecondary};
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #0a0a0a;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const WhatsAppCTA = styled.div`
  background: #25d36610;
  border: 2px solid #25d36630;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin-top: 4rem;

  h3 {
    font-size: 2rem;
    color: #25d366;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: ${(props) => props.theme.textSecondary};
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.7;
  }
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: #25d366;
  color: #ffffff;
  padding: 1.25rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(37, 211, 102, 0.5);
    background: #20c75a;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const SuccessMessage = styled.div`
  background: rgba(37, 211, 102, 0.1);
  border: 1px solid rgba(37, 211, 102, 0.3);
  color: #25d366;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
`;

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.

Email: ${formData.email}
Telefone: ${formData.phone}

Mensagem: ${formData.message}`;

    const whatsappURL = `https://wa.me/5571999999999?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');

    // Mostrar mensagem de sucesso
    setSubmitted(true);

    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });

    // Esconder mensagem após 5 segundos
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <ContactSection id="contato">
      <Container>
        <SectionTitle>Entre em Contato</SectionTitle>
        <SectionSubtitle>
          Estamos prontos para atendê-lo. Entre em contato e garanta a defesa
          dos seus direitos.
        </SectionSubtitle>

        <ContactGrid>
          <ContactInfo>
            <InfoCard>
              <Phone className="icon" />
              <div className="content">
                <h3>Telefone</h3>
                <p>
                  <a href="tel:+5571999999999">(71) 99999-9999</a>
                  <br />
                  Atendimento de segunda a sexta
                </p>
              </div>
            </InfoCard>

            <InfoCard>
              <MessageCircle className="icon" />
              <div className="content">
                <h3>WhatsApp</h3>
                <p>
                  <a
                    href="https://wa.me/5571999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (71) 99999-9999
                  </a>
                  <br />
                  Resposta rápida e atendimento ágil
                </p>
              </div>
            </InfoCard>

            <InfoCard>
              <Mail className="icon" />
              <div className="content">
                <h3>E-mail</h3>
                <p>
                  <a href="mailto:contato@luizlima.adv.br">
                    contato@luizlima.adv.br
                  </a>
                  <br />
                  Resposta em até 24 horas
                </p>
              </div>
            </InfoCard>

            <InfoCard>
              <MapPin className="icon" />
              <div className="content">
                <h3>Localização</h3>
                <p>
                  Salvador - Bahia
                  <br />
                  Atendimento presencial e online
                </p>
              </div>
            </InfoCard>

            <InfoCard>
              <Clock className="icon" />
              <div className="content">
                <h3>Horário de Atendimento</h3>
                <p>
                  Segunda a Sexta: 9h às 18h
                  <br />
                  Urgências: 24h via WhatsApp
                </p>
              </div>
            </InfoCard>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            {submitted && (
              <SuccessMessage>
                Mensagem enviada! Você será redirecionado para o WhatsApp.
              </SuccessMessage>
            )}

            <FormGroup>
              <label htmlFor="name">Nome Completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">E-mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="phone">Telefone/WhatsApp *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(71) 99999-9999"
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">Mensagem *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Descreva brevemente seu caso ou dúvida..."
                required
              />
            </FormGroup>

            <SubmitButton type="submit">
              <Send />
              Enviar via WhatsApp
            </SubmitButton>
          </ContactForm>
        </ContactGrid>

        <WhatsAppCTA>
          <h3>Precisa de Atendimento Urgente?</h3>
          <p>
            Em casos de prisão em flagrante ou situações emergenciais, entre em
            contato imediatamente via WhatsApp. Estamos preparados para agir
            rapidamente e garantir seus direitos.
          </p>
          <WhatsAppButton
            href="https://wa.me/5571999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle />
            Falar no WhatsApp Agora
          </WhatsAppButton>
        </WhatsAppCTA>
      </Container>
    </ContactSection>
  );
};

export default Contact;
