/*eslint-disable*/
import React from "react";

// reactstrap components

// core components

function PresentationHeader() {
  return (
    <>
      <div className="page-header clear-filter">
        <div className="rellax-header rellax-header-sky" data-rellax-speed="-4">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/nuk-pro-back-sky.jpg") +
                ")",
            }}
          ></div>
        </div>
        <div
          className="rellax-header rellax-header-buildings"
          data-rellax-speed="0"
        >
          <div
            className="page-header-image page-header-city"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/nuk-pro-buildings.png") +
                ")",
            }}
          ></div>
        </div>
        <div className="rellax-text-container rellax-text">
          <h1 className="h1-seo" data-rellax-speed="-1">
            SYSCHO
          </h1>
          <div className="pro">SHARED KNOWLEDGE</div>
        </div>
        <h3 className="h3-description rellax-text" data-rellax-speed="-1" style={{textShadow:'-5px 4px 10px #F2480C'}}>
          A Collection of Tools for everybody.
        </h3>
        <h6
          className="category category-absolute rellax-text"
          data-rellax-speed="-1"
         >
          Designed by{" "}
          <a style={{color:'red'}}>SYSCHO</a>
          
        </h6>
      </div>
    </>
  );
}

export default PresentationHeader;
