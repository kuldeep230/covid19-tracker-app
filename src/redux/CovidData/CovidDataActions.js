import axios from "axios";
import {
  FETCH_COVIDDATA_FAILURE,
  FETCH_COVIDDATA_REQUEST,
  FETCH_COVIDDATA_SUCCESS,
} from "./CovidDataTypes";

export const fetchCovidDataRequest = () => {
  return {
    type: FETCH_COVIDDATA_REQUEST,
  };
};
export const fetchCovidDataSuccess = (cases) => {
  return {
    type: FETCH_COVIDDATA_SUCCESS,
    payload: cases,
  };
};
export const fetchCovidDataFailure = (error) => {
  return {
    type: FETCH_COVIDDATA_FAILURE,
    payload: error,
  };
};

export const fetchCovidData = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCovidDataRequest());
      axios.get("https://disease.sh/v3/covid-19/all").then((response) => {
        const covidCases = response.data;
        dispatch(fetchCovidDataSuccess(covidCases));
      });
    } catch (error) {
      dispatch(fetchCovidDataFailure(error));
    }
  };
};

export const addComma = (num) => {
  const toArr = num.split(" ");
};
