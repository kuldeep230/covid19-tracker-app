import React from "react";
import { connect } from "react-redux";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./bubble.css";

function Bubble(props) {
  const { title, data, covidDataState } = props;
  return (
    <div className="bubble-container">
      <p className="bubble-title">{title}</p>
      <p className="bubble-value">
        {covidDataState.loading ? <LoadingSpinner /> : data}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    covidDataState: state.covidData,
  };
};

export default connect(mapStateToProps)(Bubble);
