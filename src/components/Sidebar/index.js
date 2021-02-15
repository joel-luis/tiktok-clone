import React from 'react';

import User from '../User';

import {
  Container,
  MenuItem,
  Following,
  FollwingHeader,
  InfoContainer,
  Links,
} from './styles';

function Sidebar() {
  return (
    <Container>
      <MenuItem active>
        <img src="/images/homeicon.svg" alt="homeicon" />
        <span>Para você</span>
      </MenuItem>
      <MenuItem>
        <img src="/images/peopleicon.svg" alt="peopleicon" />
        <span>Seguindo</span>
      </MenuItem>
      <Following>
        <FollwingHeader>Suas principais contas</FollwingHeader>
        <User
          user={{
            name: 'Joel Luis',
            username: 'joelluis',
            avatar:
              'https://avatars.githubusercontent.com/u/72585274?s=60&v=4.jpg',
          }}
        />
      </Following>
      <InfoContainer>
        <Links margin>
          <a>Inicio</a>
          <a>Sobre</a>
          <a>Sala de imprensa</a>
          <a>Carreira</a>
          <a>BytDance</a>
        </Links>
        <Links>
          <a>Ajuda</a>
          <a>Segurança</a>
        </Links>
        <Links margin>
          <a>Diretrizes da comunidade</a>
          <a>Termos</a>
        </Links>
        <Links margin>
          <a>Privacidade</a>
        </Links>
        <Links margin>
          <a>© Tik Tok 2021</a>
        </Links>
      </InfoContainer>
    </Container>
  );
}

export default Sidebar;
