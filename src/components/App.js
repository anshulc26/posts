import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <SearchBar />
            <WeatherList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
