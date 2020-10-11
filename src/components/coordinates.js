import React, { Component }  from 'react';
import './coordinates.css';
import KEY from '../App.js';

class Coordinates extends Component {

  onInputChange = () => {
    fetch(`https://locationiq.com/v1/autocomplete.php?key=${KEY}&q=${'israel haifa'}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div id="coordinates-warpper">
        <label htmlFor="address"> Address: </label>
        <input type="text" name="address" onChange={this.onInputChange}/>
        <div>
          
        </div>
        <button
          className="right"
          type="submit"
          onClick={this.props.findCoordinates}
        >find</button>
        <button
          onClick={this.props.togglePop}
          className="left"
        >back</button>
      </div>
    );
  }
}

export default Coordinates;
