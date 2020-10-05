import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  border: 1px solid black;
`;

const Nav = styled.nav``;
const Home = () => {
  return (
    <Container>
      <nav>탭</nav>
    </Container>
  );
};

export default Home;
