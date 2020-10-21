import React, { Component }  from 'react';
import './coordinates.css';

class Coordinates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'enter an address'
    };
  }

  onInputChange(value) {
        this.setState({ inputValue: value });
    }

  render() {
    return (
      <div id="coordinates-warpper">
        <input
          type="text"
          name="address"
          value={this.state.inputValue}
          onChange={e => this.onInputChange(e.target.value)}
        />
        <button
          className="right"
          type="submit"
          onClick={() => this.props.findCoordinates(this.state.inputValue)}
        >find</button>
        <button onClick={this.props.togglePop} className="left">back</button>
      </div>
    );
  }
}

export default Coordinates;
