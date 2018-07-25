import { combineReducers } from 'redux';
import Weather from '../reducers/weather';

export default combineReducers({
  weather: Weather
});
