import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row footer">
            <div className="col-md-2" />
            <div className="col-md-8">
              <div className="footer__text text-center">
                <p>© 2020 All Rights Reserved</p>
              </div>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </div>
    );
  }
}
