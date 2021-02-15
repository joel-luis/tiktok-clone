import React from "react";

import {
  Header,
  Container,
  SidebarContainer,
  ContentContainer,
} from "./styles";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>
        <SidebarContainer>
          <Siderbar />
        </SidebarContainer>

        <ContentContainer>{children}</ContentContainer>
      </Container>
    </>
  );
}

export default Layout;
