import React from 'react';
import Pics from "./pics.json";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

class App extends Component {
  state = {
    Pics,
    count: 0
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Clicky Game</h1>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
          </div>
        </div>
        <Cards />
      </div>
    )
  }
}

export default App;
