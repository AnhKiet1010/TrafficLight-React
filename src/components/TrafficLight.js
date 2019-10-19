import React, { Component } from "react";
import "./TrafficLight.css";
import classNames from "classnames";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
  render() {
    return (
      <div className="TrafficLight">
        <div
          className={classNames("buld", "red", {
            active: this.currentColor === RED
          })}
        />
        <div className="buld orange" />
        <div className="buld green" />
      </div>
    );
  }
}
export default TrafficLight;
