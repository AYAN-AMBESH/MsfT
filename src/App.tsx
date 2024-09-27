import styled from "styled-components";
import Navbar from "./components/Navbar";
import { createGlobalStyle } from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div``;

const Globalstyle = createGlobalStyle`
  body {
    background-color: #202020;
    margin: 0;
    padding: 0;
  }
`;

const App = () => (
  <>
    <Globalstyle />
    <Container>
      <Main>
        <Navbar />
        <Wrapper>Videos</Wrapper>
      </Main>
    </Container>
  </>
);

export default App;
