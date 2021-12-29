import { combineReducers } from "redux";
import covidDataReducer from "./CovidData/CovidDataReducer";

const rootReducer = combineReducers({
  covidData: covidDataReducer,
});

export default rootReducer;
