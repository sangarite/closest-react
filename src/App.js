import React, { Component } from 'react';
import Coordinates from './components/coordinates';
import Menu from './components/menu';
import './App.css';

export const KEY = 'pk.85d8e3d6ffa0fd25b87bd508df93ac7d';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPop: false,
      count: 3
    };
  }

  togglePop = () => {
   this.setState({ showPop: !this.state.showPop });
  };

  addLocation = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        <h1 className="center" id="title">Closest</h1>
        <p className="center" id="description">
          Want to find the shortest way out of some options?
          <br/>
          Enter the address of your starting point and the addresses of all your
          options and we will find you the closest
        </p>
        <div>
          {
            this.state.showPop ?
            <Coordinates
              togglePop={this.togglePop}
            /> :
            <Menu
              togglePop = {this.togglePop}
              addLocation = {this.addLocation}
              count = {this.state.count}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
