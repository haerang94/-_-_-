import Head from "next/head";
import styled from "styled-components";
import Opening from "components/opening";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Main>
        <Opening />
      </Main>
    </div>
  );
}
