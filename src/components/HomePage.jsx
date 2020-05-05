import React, { Component } from "react";
import video from "../images/background.mp4";
import "./style.css";
import { easings } from "react-animation";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    const style = {
      animation: `slide-in ${easings.easeOutExpo} 2000ms forwards`,
    };

    const buttonStyle ={
      animation: `slide-in ${easings.easeOutExpo} 2000ms forwards`
    }
    return (
      <div>
        <header>
          <div class="overlay"></div>
          <video autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
          </video>
          <div class="container h-100">
            <div class="d-flex h-100 text-center align-items-center">
              <div class="w-100 text-white text">
                <h1 class="display-3" style={style}>
                  A tribute to All Health workers fighting Covid-19
                </h1>
                <div style={buttonStyle}>
                  <Link to="/tribute" className="button btn-hover color-9" style={{textDecoration: 'none', color: 'white'}}> View Tribute</Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
