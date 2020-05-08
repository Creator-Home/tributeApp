import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";

export default class TributeOneFrontCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    return (
      <div>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
          flipSpeedBackToFront="1.5"
          flipSpeedFrontToBack="1.5"
        >
          {/* Front Card */}
          <div className="card shadow-lg">
            <div className="card__content">
              <div className="card__text">
                <h1>You Are Heroes</h1>
                <h4>
                  Stress, exhaustion, underlying fear, and renewed hope… these
                  words sum up the current situation of the medical staff
                  mobilized in the battle against Covid-19.
                </h4>
                <button
                  onClick={this.handleClick}
                  className="button btn-hover color-9"
                >
                  View Tribute
                </button>
              </div>
            </div>
          </div>
          {/* Back Card */}
          <div className="card shadow-lg">
            <div className="card__content">
              <div className="card__text">
                <p>
                “You are not alone,” is what we keep saying to patients and
                  their families. They really need someone to support and give
                  them hope,” It is hard to make a patient laugh or to alleviate
                  the virus while you feel afraid. <br/> <strong>For this, we say you are Heroes”</strong> 
                  
                </p>
                <button
                  onClick={this.handleClick}
                  className="button btn-hover color-9"
                >
                  Back To Front
                </button>
              </div>
            </div>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}
