import React from 'react';

import { 
  Wrapper, 
  Header,
  Title,
  Container, 
  Notification, 
  NotificationLabel, 
  NotificationDate,
} from './styles';

const notifications = [
  {
    key: String(Math.random()),
    label: 'Que tal R$ 20,00 de volta para começar a usar o PicPay? Toque aqui e saiba mais.',
    date: 'Hoje às 03:12',
  },
  {
    key: String(Math.random()),
    label: 'Que tal R$ 20,00 de volta para começar a usar o PicPay? Toque aqui e saiba mais.',
    date: 'Hoje às 03:12',
  },
  {
    key: String(Math.random()),
    label: 'Que tal R$ 20,00 de volta para começar a usar o PicPay? Toque aqui e saiba mais.',
    date: 'Hoje às 03:12',
  },
  {
    key: String(Math.random()),
    label: 'Que tal R$ 20,00 de volta para começar a usar o PicPay? Toque aqui e saiba mais.',
    date: 'Hoje às 03:12',
  },
]

export default function Notifications() {
  return (
    <Wrapper>
      <Header>
        <Title>Notificações</Title>
      </Header>
      
      <Container
        data={notifications}
        keyExtractor={notification => notification.key}
        renderItem={({ item: notification }) => (
          <Notification>
            <NotificationLabel>{notification.label}</NotificationLabel>
            <NotificationDate>{notification.date}</NotificationDate>
          </Notification>
        )}
      >

      </Container>
    </Wrapper>
  );
};