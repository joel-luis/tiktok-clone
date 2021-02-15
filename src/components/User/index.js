import React from 'react';

import { Container, Avatar, Info } from './styles';

export default function User({ user }) {
  console.log(user, 'user');
  return (
    <Container>
      <Avatar src={user.avatar}></Avatar>
      <Info>
        <a>{user.name}</a>
        <span>{user.username}</span>
      </Info>
    </Container>
  );
}
