import styled from "styled-components";
import Navbar from "./components/Navbar";
import { createGlobalStyle } from "styled-components";
import Card from "./components/Card";

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

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  ); /* Responsive grid with auto-fill */
  grid-gap: 20px; /* Space between cards */
  padding: 20px;
  background-color: #202020; /* Match the dark theme */
  height: 100vh; /* Full height of the viewport */
  overflow-y: auto; /* Allow vertical scrolling if content exceeds viewport */
`;

const cardsData = [
  { title: "Card 1", description: "This is the description for card 1." },
  { title: "Card 2", description: "This is the description for card 2." },
  { title: "Card 3", description: "This is the description for card 3." },
  { title: "Card 4", description: "This is the description for card 4." },
  { title: "Card 5", description: "This is the description for card 5." },
  { title: "Card 6", description: "This is the description for card 6." },
  { title: "Card 7", description: "This is the description for card 7." },
  { title: "Card 8", description: "This is the description for card 8." },
  { title: "Card 9", description: "This is the description for card 9." },
  { title: "Card 10", description: "This is the description for card 10." },
  { title: "Card 11", description: "This is the description for card 11." },
  { title: "Card 12", description: "This is the description for card 12." },
  { title: "Card 13", description: "This is the description for card 13." },
  { title: "Card 14", description: "This is the description for card 14." },
  { title: "Card 15", description: "This is the description for card 15." },
];

const App = () => (
  <>
    <Globalstyle />
    <Container>
      <Main>
        <Navbar />
        <Wrapper>
          <HomeContainer>
            {cardsData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </HomeContainer>
        </Wrapper>
      </Main>
    </Container>
  </>
);

export default App;
