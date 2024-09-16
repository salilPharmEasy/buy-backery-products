import React from "react";

import Cake from "./SVG/Cake";
import Pizza from "./SVG/Pizza";
import Drinks from "./SVG/Drinks";

import "./TopNavbar.scss";

export default function TopNavbar() {
  return (
    <nav className="containerOuter">
      <div className="container">
        <div className="content">
          <div className="perItem">
            <div className="svgContainer">
              <Pizza />
            </div>
            <div>
            <div className="header">Pizza</div>
            <div className="subText">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
          <div className="perItem">
            <div className="svgContainer">
              <Cake />
            </div>
            <div>
              <div className="header">Cake</div>
              <div className="subText">In facere sequi qui saepe</div>
            </div>
          </div>
          <div className="perItem">
            <div className="svgContainer">
              <Drinks />
            </div>
            <div>
            <div className="header">Drinks</div>
              <div className="subText">In facere sequi qui saepe</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
