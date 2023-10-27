import React from "react";
import "../styles/home.css";
export default function Card({ title }) {
  return (
    <div>
      <div className="bb ml-3">
        <div className="box"></div>
        <p>{title}</p>
      </div>
    </div>
  );
}
