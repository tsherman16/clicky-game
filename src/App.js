import React, { Component } from "react";
import pics from "./pics.json";
import Navbar from "./components/navbar/Navbar";
import Cards from "./components/cards/Cards";
import "./app.css";

class App extends Component {
  state = {
    pics,
    score: 0,
    highScore: 0
  };

  resetState = () => {
    this.setState({
      pics: this.state.pics.map(pic => ({ ...pic, clicked: false })),
      score: 0
    }, () => this.shufflePics())
  }

  handleCardCount = id => {
    const pics = [...this.state.pics];
    let score = this.state.score;

    pics.forEach((pic, i) => {
      if (pic.id === id) {
        // if card has not been clicked
        if (!pic.clicked) {
          // -- increase score
          score = this.state.score + 1;
          // -- make pic.clicked = true
          pics[i].clicked = true;
          console.log("Not failed");


          this.setState({
            score: score,
            highScore: Math.max(this.state.highScore, score),
            pics: pics
          }, () => this.shufflePics());

        } else {
          console.log("Failed");
          alert("Streak over back at 0!");
          this.resetState();
        }
      }
    })
  }

  shufflePics() {
    const array = [...this.state.pics];
    let i = this.state.pics.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    this.setState({ pics: array });
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          resetState={this.resetState}
          highScore={this.state.highScore}
        />
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Clicky Game: Arizona Cardinal Edition</h1>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
          </div>
        </div>
        {this.state.pics.map(pic => (
          <Cards
            handleCardCount={this.handleCardCount}
            id={pic.id}
            key={pic.id}
            image={pic.picture}
            clicked={pic.clicked}
          />
        ))}
      </div>
    )
  }
}

export default App;
