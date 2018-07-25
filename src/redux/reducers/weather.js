import { FETCH_WEATHER_INITIATE, FETCH_WEATHER_COMPLETE } from '../actions/actionTypes';

const cityWeatherInitialState = { cities: [], isFetching: false };

export default function(state = cityWeatherInitialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_INITIATE:
      return { ...state, isFetching: true };
    case FETCH_WEATHER_COMPLETE:
      return { ...state, cities: [ action.data, ...state.cities ], isFetching: false };
    default:
      return state;
  }
}
