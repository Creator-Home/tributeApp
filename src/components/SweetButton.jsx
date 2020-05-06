import React from "react";
import { easings } from "react-animation";
import { Link } from "react-router-dom";

export default function SweetButton() {
  const buttonStyle = {
    animation: `slide-in ${easings.easeOutExpo} 2000ms forwards`,
  };
  return (
    <div>
      <div style={buttonStyle}>
        <Link
          to="/tribute"
          className="button btn-hover color-9"
          style={{ textDecoration: "none", color: "white" }}
        >
          {" "}
          View Tribute
        </Link>
      </div>
    </div>
  );
}
