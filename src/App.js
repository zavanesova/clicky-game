import React, { Component } from 'react';
import './App.css';
import PicCard from "./components/PicCard";
import Score from "./components/Score";
import pics from "./pics.json";


class App extends Component {
  state = {
    pics,
    score: 0,
    topScore: 0,
    shake: false
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
    // return true;
  }


  evaluateClick = id => {
    this.state.pics.find((arr, i) => {
      if(arr.id === id) {
        if(pics[i].clicked === false) {
          pics[i].clicked = true;
          this.setState({ score: this.state.score + 1 });
          this.shufflePics();
          return true;
        }else{
          this.setState({ shake: true });
          this.endGame();
        }
      }
    });
  }

  render() {
    return(
      <div>
        <Score
        score={this.state.score}
        topScore={this.state.topScore}
        />
        <div className="jumbotron jumbotron-fluid text-center">
          <div className="container text-center">
            <h1 className="display-4">Clicky Game</h1>
            <p className="lead">Click on an image to earn points, but don't click the same image twice!</p>
          </div>
        </div>
        <div className="container text-center">
        <div className={"shake-" + (this.state.shake ? "active" : "inactive")} onAnimationEnd={() => this.setState({ shake: false })}>
          {this.state.pics.map(pic => (
            <PicCard
            evaluateClick = {this.evaluateClick}
            id={pic.id}
            key={pic.id}
            image={pic.image}
            />
          ))}
        </div>
        </div>
        <footer>
          <h5 className="text-center">Spongebob Clicky Game</h5>
        </footer>
      </div>
    )
  }
}



export default App;
