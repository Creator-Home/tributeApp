import React, { Component } from "react";
import "../style.css";
import Doctor from "../../images/doc2.png";
import FirstTributeCard from "./FirstTributeCard";
import { easings } from "react-animation";
import ScrollAnimation from "react-animate-on-scroll";

export default class FirstTribute extends Component {
  render() {
    const style = {
      animation: `slide-in ${easings.easeOutExpo} 2000ms forwards`,
    };
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6" style={style}>
              <div className="hero-text">
                  <img src={Doctor} alt="Doctor" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6" style={style}>
              <ScrollAnimation animateIn="tada">
                <FirstTributeCard />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
