/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import {
  Container,
  Content,
  LogoContainer,
  LogoIcon,
  Logo,
  OptionsContainer,
  Icon,
  Avatar,
} from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/images/logoicon.svg" />
          <Logo src="/images/logo.svg" />
        </LogoContainer>
        <OptionsContainer>
          <Icon src="/images/uploadicon.svg" />
          <Avatar>
            <img src="https://avatars.githubusercontent.com/u/72585274?s=460&u=00d8532d63251b36aaab5f81fd1c7422603fa031&v=4f" />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  );
}

export default Header;
