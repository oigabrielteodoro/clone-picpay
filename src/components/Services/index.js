import React from 'react';

import { 
  Container,
  Title,
  ServiceContainer,
  Service,
  Img,
  ServiceDetails,
  ServiceTitle,
  ServiceDescription,
} from './styles';

import img1 from '../../assets/images/01.png';
import img6 from '../../assets/images/06.png';
import img7 from '../../assets/images/07.png';

const services = [
  {
    key: String(Math.random()),
    img: img1,
    title: 'Recarga de Celular',
    description: 'Vivo, Claro, Tim, Oi, Nextel, Algar, Sercomtel e etc.'
  },
  {
    key: String(Math.random()),
    img: img6,
    title: 'Pagar Conta',
    description: 'Pague sua conta de luz, água, boletons bancários etc.'
  },
  {
    key: String(Math.random()),
    img: img7,
    title: 'Cobrar',
    description: 'Cobre um amigo'
  },
]

export default function Services() {
  return (
    <Container>
      <Title>Serviços</Title>
      
      <ServiceContainer>
        {services.map(service => (
          <Service key={service.key}>
            <Img source={service.img} />

            <ServiceDetails>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceDetails>
          </Service>
        ))}
      </ServiceContainer>
    </Container>
  );
};