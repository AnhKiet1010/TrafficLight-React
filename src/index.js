import React, { Component } from "react";
import ReactDOM from "react-dom";
import TrafficLight from "./components/TrafficLight";

import "./styles.css";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentColor: RED
    };

    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      });
    }, 1000);
  }

  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }

  render() {
    const { currentColor } = this.state;
    return (
      <div className="App">
        <TrafficLight currentColor={currentColor} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
