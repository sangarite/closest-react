import React, { Component } from 'react';
import ReactMapGL, { GeolocateControl, NavigationControl, Marker} from 'react-map-gl';
import pin from '../icons/pin.png'

class Map extends Component {
	constructor() {
		super();
		this.state = {
			viewport: { longitude: 34.9868446365323, latitude: 31.838816759318682, zoom: 6},
			markers: []
		}
		this.onClickMap = this.onClickMap.bind(this);
	}

	onClickMap(map, event) {
  		console.log(map);
  		this.setState({
  			markers: [...this.state.markers, {lon: map.lngLat[0], lat: map.lngLat[1]}]
		})
	}

	deletePin(event) {
		const filtered = this.state.markers.filter(el => el.lon + el.lat != event.target.alt);
		this.setState({ markers: filtered })
	}

	render() {
		const { viewport, markers} = this.state; 
		return(
			<ReactMapGL {...viewport} 
				width="60vw"
				height="60vh"
				mapStyle="mapbox://styles/mapbox/streets-v10"
				onViewportChange={(viewport) =>  {this.setState({viewport})}}
				onClick={this.onClickMap}
				mapboxApiAccessToken={'pk.eyJ1Ijoic2FuZ2FyaXQiLCJhIjoiY2tmdjNqbzdvMDcwdjJycDd1NGlvOWZ3ciJ9.RixB6XxcqampFI8MTQ5wAQ'}
			>
				<GeolocateControl 
					positionOptions={{enableHighAccuracy: true}}
					trackUserLocation={true}
				/>
				<div style={{position: 'absolute', right: 0}}>
          			<NavigationControl />
        		</div>
        		<div>
        		{
        			markers.map((el, i) =>  <Marker 
        										id={i}
        										key={i} 
        										longitude={el.lon} 
        										latitude={el.lat}>
        										<img src={pin} onClick={event => this.deletePin(event)} alt={el.lon + el.lat}/>
        									</Marker>
        			)
        		}
        		</div>
			</ReactMapGL>
		);
	}
}

export default Map;