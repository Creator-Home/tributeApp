import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";

export default class SecondTributeCard extends Component {
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
                <h1>You Are Caring</h1>
                <h4>
                  Covid-19 is a nightmare that is driving the entire world into
                  a state of confusion, causing fear to spread among people. We
                  can’t and won’t give up.
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
                “Soldiering alongside the doctors are nurses. They accompany
                  the patients closely, feel their pain and suffering.Although
                  many has never dealt with pandemics, they've decided to fully
                  commit to their work until the crisis ends. <br/> This entitle we, the public, to give you the attribute,<strong> Caring”</strong>
                  
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
