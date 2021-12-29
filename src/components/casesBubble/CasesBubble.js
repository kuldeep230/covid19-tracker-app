import React from "react";
import { connect } from "react-redux";
import Bubble from "../Bubble/Bubble";
import "./casesBubble.css";

function CasesBubble(props) {
  const { covidDataState } = props;
  return (
    <div className="casesbubble-container">
      <Bubble title="Today Cases" data={covidDataState.covidData.todayCases} />
      <Bubble
        title="Today Deaths"
        data={covidDataState.covidData.todayDeaths}
      />
      <Bubble
        title="Today Recovered"
        data={covidDataState.covidData.todayRecovered}
      />
      <Bubble title="Active" data={covidDataState.covidData.active} />
      <Bubble title="Critical" data={covidDataState.covidData.critical} />
      <Bubble title="Tests" data={covidDataState.covidData.tests} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    covidDataState: state.covidData,
  };
};

export default connect(mapStateToProps)(CasesBubble);
