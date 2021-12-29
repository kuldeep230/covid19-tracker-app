import {
  FETCH_COVIDDATA_REQUEST,
  FETCH_COVIDDATA_SUCCESS,
  FETCH_COVIDDATA_FAILURE,
} from "./CovidDataTypes";

const initialState = {
  loading: false,
  covidData: [],
  perCases: {},
  error: "",
};

const covidDataReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_COVIDDATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COVIDDATA_SUCCESS:
      return {
        ...state,
        loading: false,
        covidData: payload,
      };
    case FETCH_COVIDDATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default covidDataReducer;
