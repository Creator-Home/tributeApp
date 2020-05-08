import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";

export default class ThirdTributeCard extends Component {
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
                <h1>You Are Angels</h1>
                <h4>
                  Considering the tremendous efforts exerted by medics around
                  the world, one can say that in times of pandemics, “humanity”
                  is at the front line.
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
                  You assert that dealing with potentially infected people
                  requires caution and empathy. Armed with a smile, you try to
                  alleviate patients’ multiple fears. Clearly, these are works
                  by angels sent from above. <br/><strong>We say a big Thank you to the love and patience you have bestowed upon us</strong>
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
