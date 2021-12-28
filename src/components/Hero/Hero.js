import React from "react";
import "./hero.css";
import covidLogo from "../../assets/images/covidLogo.jpg";
import CasesBubble from "../casesBubble/CasesBubble";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="totalcases-wrapper">
        <section className="hero-section hero-section-left">
          <div className="global-data total-cases">
            <p>Total Cases</p>
            <span>{`912323`}</span>
          </div>{" "}
          <div className="global-data total-deaths">
            <p>Total Deaths</p>
            <span>{` 34324`}</span>
          </div>{" "}
          <div className="global-data total-recovered">
            <p>Total Recovered</p>
            <span> {`123342`}</span>
          </div>
        </section>
        <section className="hero-section hero-section-right">
          <div className="heroBg">
            <img src={covidLogo} alt="" />
          </div>
        </section>
      </div>
      <div className="bubble-wrapper">
        <CasesBubble />
      </div>
    </div>
  );
};

export default Hero;
