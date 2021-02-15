import {
  Container,
  MenuItem,
  Following,
  FollowingHeader,
  InfoContainer,
  Links,
} from './styles';
import User from '../User';

function Sidebar() {
  return (
    <Container>
      <MenuItem active>
        <img src="/images/homeIcon.svg" alt="homeicon"></img>
        <span>Para você</span>
      </MenuItem>
      <MenuItem>
        <img src="/images/peopleIcon.svg" alt="peopleicon"></img>
        <span>Seguindo</span>
      </MenuItem>
      <Following>
        <FollowingHeader>Suas pricipais contas</FollowingHeader>
        <User
          user={{
            name: 'Joel Luis',
            username: 'joelluis',
            avatar:
              'https://avatars.githubusercontent.com/u/72585274?s=460&u=00d8532d63251b36aaab5f81fd1c7422603fa031&v=4',
          }}
        ></User>
      </Following>
      <InfoContainer>
        <Links margin>
          <a>Início</a>
          <a>Sobre</a>
          <a>Sala de imprensa</a>
          <a>Carreira</a>
          <a>ByteDance</a>
        </Links>
        <Links>
          <a>Ajuda</a>
          <a>Segurança</a>
        </Links>
        <Links>
          <a>Diretrizes da comunidade</a>
          <a>Termos</a>
        </Links>
        <Links margin>
          <a>Privacidade</a>
        </Links>
        <Links margin>
          <a>© 2020 TikTok</a>
        </Links>
      </InfoContainer>
    </Container>
  );
}

export default Sidebar;
