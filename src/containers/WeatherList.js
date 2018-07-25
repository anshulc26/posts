import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
  renderCity(cityData) {
    const temps = cityData.list.map(list => list.main.temp);
    const humidities = cityData.list.map(list => list.main.humidity);
    const pressures = cityData.list.map(list => list.main.pressure);
    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td><Chart data={temps} color="red" unit="K" /></td>
        <td><Chart data={humidities} color="orange" unit="hPa" /></td>
        <td><Chart data={pressures} color="blue" unit="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <td>City</td>
            <td>Temperature</td>
            <td>Pressure</td>
            <td>Humidity</td>
          </tr>
        </thead>
        <tbody>
          {this.props.cities.map(this.renderCity)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.weather.isFetching,
  cities: state.weather.cities
});

export default connect(mapStateToProps)(WeatherList);
