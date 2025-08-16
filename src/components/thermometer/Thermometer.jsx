import React, { Component } from "react";

export default class Thermometer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: 9,
    };
  }

  Increase() {
    this.setState((per) => {
      return {
        temp: per.temp + 1,
      };
    });
  }

  Decrease() {
    this.setState((per) => {
      return {
        temp: per.temp - 1,
      };
    });
  }

  ThermometerColor() {
    if (this.state.temp >= 15) {
        return "thermometer-text__bg-red"
    }
    else if (this.state.temp >= 5) {
        return "thermometer-text__bg-green"
    }
    else if (this.state.temp <= 4) {
        return "thermometer-text__bg-blue"
    }
  }

  render() {
    this.ThermometerColor()
    return (
      <div className="container">
        <div className="thermometer-container">
          <div className={"thermometer-text" + " " + this.ThermometerColor()}>{this.state.temp}</div>
          <div className="thermometer-btns">
            <div className="thermometer-btn__increase">
              <button
                onClick={(e) => this.Increase(e)}
                className="btn"
                type="button"
              >
                +
              </button>
            </div>
            <div className="thermometer-btn__decrease">
              <button
                onClick={(e) => this.Decrease(e)}
                className="btn"
                type="button"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
