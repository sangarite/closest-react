import React, { Component }  from 'react';
import placeholder from '../icons/location-pin.svg';
import home from '../icons/home.svg';
import './location.css';

class Location extends Component {
  render() {
    return (
      <div id="div-location">
        <img
          src={this.props.number === 0 ? home : placeholder}
          alt="placeholder"
          className="icon"
          onClick={this.props.togglePop}
        />
        <p id="p-location"></p>
      </div>
    );
  }
}

export default Location;
