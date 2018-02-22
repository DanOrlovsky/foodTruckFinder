/* eslint-disable */

import React, { Component } from "react";
import { Label, Form, Row, Col, FormGroup, Button, Input } from 'reactstrap';
import DirectionsView from './DirectionsView';
import API from '../../utils/API';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  DirectionsRenderer
} from "react-google-maps";

const mapStyles = {
  boxShadow: "0 0 20px black",
}

const FoodTruckMap = withGoogleMap((props) => 
  <GoogleMap defaultZoom={ props.zoom } { ...props }>
    { props.children }
  </GoogleMap>
);


class FoodTruckMapComponent extends Component {
  state = {
    zoom: 13,
    directions: null,
    legsOfJourney: [],
  }

  getDirections(lat,lng) {
    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
      origin: new google.maps.LatLng(this.props.coords.latitude, this.props.coords.longitude),
      destination: new google.maps.LatLng(lat,lng),
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        console.log(result);
        this.setState({
          directions: result,
          legsOfJourney: result.routes[0].legs[0].steps
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }



  render() {
    return (
      <div className="map">
        <Form onSubmit={ this.props.processForm } className="form-inline">
          <div className="form-group mb-2">
            <Label for="distance" className="float-left"><h4>Search Radius (miles) : </h4></Label>
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <Input value={ this.props.distance } name="distance" onChange={ this.props.onChange } type="text" />
          </div>
            <Button className="btn mb-2">Submit</Button>
        </Form>
        <div style={ mapStyles }>
          <FoodTruckMap 
            defaultCenter={{ lat: this.props.coords.latitude, lng: this.props.coords.longitude }}
            loadingElement={ <div style={{ height: `100%` }} />} 
            containerElement={ <div style={{ height: `800px` }} /> }
            zoom={this.state.zoom }
            mapElement={ <div style={{ height: `100%` }} /> }
          >
            <Marker position={{ lat: this.props.coords.latitude, lng: this.props.coords.longitude }}
              options={{icon: 'ImagesC/URHERE.png'}} />
              { this.props.foodTrucks.length > 0 ? 
                this.props.foodTrucks.map((current, index) => 
                  <Marker 
                    position={{ lat: current.loc[1], lng: current.loc[0]}} key={index } 
                    options={{icon: 'ImagesC/TruckIcon.png'}}
                    onClick={ () => { this.props.toggleMapData(index) }}>
                    { current.isMapDataOpen && 
                      <InfoWindow>
                        <div>
                          <div className="infowindow-title">{ current.name }</div>
                          <div className="infowindow-body">
                            { current.imageUrl && <img src={current.imageUrl} alt={current.name } className="food-truck-display" />}
                            { current.description && <p><strong>Description: </strong> { current.description }</p> }
                            { current.cuisine && <p><strong>Cuisine: </strong> { current.cuisine }</p>}
                            { current.url && <a href={current.url}>Website</a>}
                            <p><button onClick={ () => { this.getDirections(current.loc[1], current.loc[0]) }}>Get Directions</button></p>
                          </div>
                        </div>
                      </InfoWindow> }
                  </Marker> ) : "" }
                { this.state.directions && <DirectionsRenderer directions={ this.state.directions} />}
              </FoodTruckMap>
            </div>
            { this.state.legsOfJourney.length > 0 && <DirectionsView directions={this.state.legsOfJourney } /> }
        </div>
        
      )
    } 
}

export default FoodTruckMapComponent;