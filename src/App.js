import React, { Component } from 'react';
//import MapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import Coordinates from './components/coordinates';
import Menu from './components/menu';
import './App.css';

export const KEY = 'pk.85d8e3d6ffa0fd25b87bd508df93ac7d';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {longitude: -122.45, latitude: 37.78, zoom: 12},
      locations: [{},{}],
      showPop: false,
      count: 3,
      data: []
    };
  }

  togglePop = () => {
   this.setState({ showPop: !this.state.showPop });
  };

  findCoordinates = (country, city, street, number) => {
    this.togglePop();
    fetch(`https://eu1.locationiq.com/v1/search.php?key=${KEY}&q=${'haifa'}&format=json`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  findClosest() {

  }

  addLocation = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    const {viewport} = this.state;
    return (
      <div>

        <h1 className="center">Closest</h1>
        <p className="center">
          Want to find the shortest way out of some options?
          <br/>
          Enter the address of your starting point and the addresses of all your
          options and we will find you the closest
        </p>

        <div>
          {
            this.state.showPop ?
            <Coordinates
              findCoordinates={this.findCoordinates}
              togglePop={this.togglePop}
            /> :
            <Menu
              togglePop = {this.togglePop}
              addLocation = {this.addLocation}
              locations = {this.state.locations}
              count = {this.state.count}
              findClosest = {this.findClosest}
            />
          }
        </div>
        <div>
          {this.state.data}
        </div>
      </div>
    );
  }
}

export default App;
