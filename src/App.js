import React from 'react';
import Pics from "./pics.json";
import Wrapper from "./components/wrapper";
import Title from "./components/Title"
import Cards from "./components/cards"

function App() {
  return (
    <Wrapper>
      <Title>

      </Title>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Clicky Game</h1>
          <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
      </div>
      <Cards>

      </Cards>
    </Wrapper>
  );
}

export default App;
