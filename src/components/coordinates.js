import React, { Component }  from 'react';
import './coordinates.css';
import KEY from '../App.js';

class Coordinates extends Component {

  render() {
    return (
      <div id="coordinates-warpper">
        <input type="text" name="address" placeholder="address"/>
        <button className="right" type="submit">find</button>
        <button onClick={this.props.togglePop} className="left">back</button>
      </div>
    );
  }
}

export default Coordinates;
