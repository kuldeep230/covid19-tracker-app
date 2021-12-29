import React, { useEffect } from "react";
import "./hero.css";
import covidLogo from "../../assets/images/covidLogo.jpg";
import CasesBubble from "../casesBubble/CasesBubble";
import { connect } from "react-redux";
import { fetchCovidData } from "../../redux/CovidData/CovidDataActions";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Hero = (props) => {
  const { covidDataState, fetchCovidData } = props;

  useEffect(() => {
    fetchCovidData();
  }, []);

  return (
    <div className="hero-container">
      <div className="totalcases-wrapper">
        <section className="hero-section hero-section-left">
          <div className="global-data total-cases">
            <p>Total Cases</p>
            <span>
              {covidDataState.loading ? (
                <LoadingSpinner />
              ) : (
                covidDataState.covidData.cases
              )}
            </span>
          </div>{" "}
          <div className="global-data total-deaths">
            <p>Total Deaths</p>
            <span>
              {covidDataState.loading ? (
                <LoadingSpinner />
              ) : (
                covidDataState.covidData.deaths
              )}
            </span>
          </div>{" "}
          <div className="global-data total-recovered">
            <p>Total Recovered</p>
            <span>
              {" "}
              {covidDataState.loading ? (
                <LoadingSpinner />
              ) : (
                covidDataState.covidData.recovered
              )}
            </span>
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

const mapStateToProps = (state) => {
  return {
    covidDataState: state.covidData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCovidData: () => {
      dispatch(fetchCovidData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
