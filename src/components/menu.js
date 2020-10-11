import React, { Component }  from 'react';
import Location from './location';
import add from '../icons/add-location.svg';
import './menu.css';

class Menu extends Component {

  render() {
    let locations = [];
    for (let i = 0; i < this.props.count; i++) {
      locations.push(
        <Location key={i} number={i} togglePop={this.props.togglePop}/>
      );
    }
    return (
      <div id="locations-list">
         { locations }
        <img
          src={add}
          className="icon"
          onClick={this.props.addLocation}
          alt="add"
        />
        <button >Find Closest</button>
      </div>
    );
  }
}

export default Menu;
