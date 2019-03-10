import React, { Component } from 'react';
import './App.css';
import PicCard from "./components/PicCard";
import Score from "./components/Score";
import pics from "./pics.json";


class App extends Component {
  state = {
    pics,
    score: 0,
    topScore: 0
  };

  componentDidMount(){
    this.shufflePics();
  }

  shufflePics = () => {
    const imgs = this.state.pics.sort(() => Math.random() - 0.5);
    this.setState({ imgs });
    this.forceUpdate();
  }

  endGame() {
    if(this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    };
    this.state.pics.forEach(pic => {
      pic.clicked = false;
    });
    this.setState({ score: 0 });
  }

  evaluateClick = id => {
    this.state.pics.find((arr, i) => {
      if(arr.id === id) {
        if(pics[i].clicked === false) {
          pics[i].clicked = true;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.shufflePics();
        }else{
          this.endGame();
        }
      }
      return arr;
    });
  }

  render() {
    return(
      <div className="container text-center">
      <Score
        score={this.state.score}
        topScore={this.state.topScore}
        />
        <div className="jumbotron jumbotron-fluid text-center">
          <div className="container">
            <h1 className="display-4">Clicky Game</h1>
            <p className="lead">Click on an image to earn points, but don't click the same image twice!</p>
          </div>
        </div>
        {this.state.pics.map(pic => (
          <PicCard
          evaluateClick = {this.evaluateClick}
          id={pic.id}
          key={pic.id}
          image={pic.image}
          
          />
        ))}
      </div>
    )
  }
}



export default App;
