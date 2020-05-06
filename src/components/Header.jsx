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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="header fixed-top shadow-lg" style={style}>
                <div className="header__content">
                  <div className="row">
                    <div className="col-md-4 header__content__text">
                      <h4>
                        Tribute.<span>To</span>
                      </h4>
                    </div>
                    <div className="col-md-5 header__content__text">
                      <p className="text-center">
                        Click
                        <a
                          href="https://covidd19tracker.netlify.app/"
                          target="blank"
                        > Here
                           
                        </a> To view live covid-19 updates.
                        
                      </p>
                    </div>
                    <div className="col-md-3">
                      <Link
                        to="/"
                        className="button btn color-9"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
