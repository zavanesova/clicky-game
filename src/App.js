import React, { Component } from 'react';
import './App.css';
import PicCard from "./components/PicCard/PicCard";
import pics from "./pics.json";

class App extends Component {
  state = {
    pics
  };

  shufflePics = () => {
    // let i = data.length -1;
    // while(i>0) {
    //   let j = Math.floor(Math.random() * (i + 1));
    //   let temp = data[i];
    //   data[i] = data[j];
    //   data[j] = temp;
    // }
    // this.setState({ data })
    const imgs = this.state.pics.sort(() => Math.random() - 0.5);
    this.setState({ imgs });
    this.forceUpdate();
  }

  componentDidMount(){
    this.shufflePics();
  }

  render() {
    return(
      <div className="container text-center">
        <div className="jumbotron jumbotron-fluid text-center">
          <div className="container">
            <h1 className="display-4">Clicky Game</h1>
            <p className="lead">Click on an image to earn points, but don't click the same image twice!</p>
          </div>
        </div>
        {this.state.pics.map(pic => (
          <PicCard
          id={pic.id}
          key={pic.id}
          image={pic.image}
          onClick={this.shufflePics}
          />
        ))}
      </div>
    )
  }


}



export default App;
