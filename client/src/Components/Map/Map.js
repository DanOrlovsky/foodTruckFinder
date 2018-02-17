import React, { Component } from "react";
import { geolocated } from 'react-geolocated';
import { Label, Form, Row, Col, FormGroup, Button, Input } from 'reactstrap';
import API from '../../utils/API';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const FoodTruckMap = withGoogleMap((props) => 
  <GoogleMap defaultZoom={ props.zoom } { ...props }>
    { props.children }
  </GoogleMap>
);

class FoodTruckMapComponent extends Component {
  state = {
    distance: 10,
    zoom: 13,
    foodTrucks: [],
  }


  onChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  processForm = event => {
    event.preventDefault();
    API.getLocalTrucks(this.props.coords.latitude, this.props.coords.longitude, this.state.distance).then(resp => {
      this.setState({ foodTrucks: resp.data });      
    })  
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.coords !== this.props.coords) {
      const coords = {
        lat: nextProps.coords.latitude,
        lng: nextProps.coords.longitude,
      }
      API.getLocalTrucks(coords.lat, coords.lng).then(resp => {
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
          <div>
            <Form onSubmit={ this.processForm } inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="distance" className="mr-sm-0"><h2>Distance</h2> </Label>
                <Input value={ this.state.distance } name="distance" onChange={ this.onChange } type="text" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
            <FoodTruckMap 
              defaultCenter={{ lat: this.props.coords.latitude, lng: this.props.coords.longitude }}
              loadingElement= { <div style={{ height: `100%` }} />} 
              containerElement= { <div style={{ height: `800px` }} /> }
              zoom= {this.state.zoom }
              mapElement= { <div style={{ height: `100%` }} /> }>
                <Marker position={{ lat: this.props.coords.latitude, lng: this.props.coords.longitude }} />
                { 
                  this.state.foodTrucks.length > 0 ? 
                  this.state.foodTrucks.map((current, index) => 
                    <Marker position={{ lat: current.loc[1], lng: current.loc[0]}} key={index } options={{icon: 'ImagesC/TruckIcon.png'}}>
                      <InfoWindow>
                        <div>{ current.name }</div>
                      </InfoWindow>   
                    </Marker>
                  ) : ""
                }
            </FoodTruckMap>
          </div>
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