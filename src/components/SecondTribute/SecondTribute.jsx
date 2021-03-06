import React, { Component } from "react";
import "../style.css";
import Doctor from "../../images/nurse.png";
import SecondTributeCard from "./SecondTributeCard";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';



export default class SecondTribute extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
          <div className="col-md-6">
          <ScrollAnimation animateIn='tada' >
              <SecondTributeCard/>
              </ScrollAnimation>
            </div>
            <div className="col-md-6">
            
              <div className="hero-text">
              <ScrollAnimation animateIn='fadeInUp' >
                <img src={Doctor} alt="Doctor" className="img-fluid"/>
                </ScrollAnimation>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
