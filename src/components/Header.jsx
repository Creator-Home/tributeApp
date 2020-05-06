import React, { Component } from "react";
import { Link } from "react-router-dom";
import { easings } from "react-animation";

export default class Header extends Component {
  render() {
    const style = {
      animation: `slide-in ${easings.easeOutExpo} 2000ms forwards`,
    };
    return (
      <div>
        <nav
          class="navbar navbar-expand-lg navbar-light  header fixed-top shadow-lg"
          style={style}
        >
          <div className=" header__content__text">
            <h4>
              Tribute.<span>To</span>
            </h4>
          </div>
          <button
            class="navbar-toggler shadow btnn"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <div className="header__content__text header__content">
                <p className="text-center">
                  Click
                  <a href="https://covidd19tracker.netlify.app/" target="blank">
                    {" "}
                    Here
                  </a>{" "}
                  To view live covid-19 updates.
                </p>
              </div>
              <div className="header__button">
                <Link
                  to="/"
                  className="button btn color-9 "
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
