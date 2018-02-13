import React, { Component } from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import { geolocated } from 'react-geolocated';
import API from '../../utils/API';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const FoodTruckMap = withGoogleMap((props) => 
  <GoogleMap defaultZoom={8} { ...props }>
    { props.children }
  </GoogleMap>
);

class FoodTruckMapComponent extends Component {
  state = {
    distance: 5,
    foodTrucks: [],
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if(nextProps.coords !== this.props.coords) {
      let coords = {
        lat: nextProps.coords.latitude,
        lng: nextProps.coords.longitude,
      }
      API.getLocalTrucks(coords.lat, coords.lng).then(resp => {
        console.log(resp.data);
        this.setState({ foodTrucks: resp.data });
      })
    }
  }
  render() {
    return !this.props.isGeolocationAvailable ? 
      <h2>Your browser needs to support geolocation</h2> : 
        !this.props.isGeolocationEnabled ? 
        <h2>Please enable Location services</h2> :
        this.props.coords ? 

          <FoodTruckMap 
            defaultCenter={{ lat: this.props.coords.latitude, lng: this.props.coords.longitude }}
            loadingElement= { <div style={{ height: `100%` }} />} 
            containerElement= { <div style={{ height: `400px` }} /> }
            mapElement= { <div style={{ height: `100%` }} /> }>
            { 
              this.state.foodTrucks.length > 0 ? 
              this.state.foodTrucks.map((current, index) => 
                <Marker position={{ lat: current.loc[1], lng: current.loc[0]}} key={index }  />
              ) : ""
            }
            {/*  
              MARKER CODE FOR FUTURE REFERENCES.  WE WILL MAP THROUGH THE FOODTRUCKS FROM THE STATE  
              <Marker position={{ lat: 35.2270869, lng: -80.84312669999997 }} />
          */ }
          </FoodTruckMap>
        : <h2>Getting your coordinates.</h2>  
  }
} 

//ReactDOM.render(<FoodTruckMap isMarkerShown />, document.getElementById("root"));

export default geolocated({ 
  positionOptions: {
    enableHighAccuracy: false,
  }, 
  userDecisionTimeout: 10000, 
})(FoodTruckMapComponent);