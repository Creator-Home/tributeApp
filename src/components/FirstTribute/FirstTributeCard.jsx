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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Excepturi, nihil? At reiciendis ratione, quo corrupti.
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur asperiores esse quo ab dolorum aliquam mollitia,
                  officiis nobis est doloribus doloremque in. In temporibus
                  beatae ratione modi repellendus, ipsam dolorem laboriosam iste
                  rerum incidunt quas nostrum eos? Cumque labore adipisci alias
                  
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
