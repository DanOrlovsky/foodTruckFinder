import React, {Component} from 'react';
import FoodTruckMapComponent from '../Components/Map/Map'
import { Row, Card, CardTitle, Container, Col } from 'reactstrap';
import { geolocated } from 'react-geolocated';
import API from '../utils/API';

class HomePage extends  Component {
    state = {
        foodTrucks: [],
        distance: 5,
    }
    
    onChange = event => {
        let { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.coords !== this.props.coords) {
          const coords = {
            lat: nextProps.coords.latitude,
            lng: nextProps.coords.longitude,
          }
          API.getLocalTrucks(coords.lat, coords.lng).then(resp => {
            resp.data.forEach((current) => { current["isMapDataOpen"] = false; });
            this.setState({ foodTrucks: resp.data });
          })
        }
    }
    onDistanceChange = event => {
        let { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }
    
    processForm = event => {
        event.preventDefault();
        localStorage.setItem("distance", this.state.distance.toString());
        API.getLocalTrucks(this.props.coords.latitude, this.props.coords.longitude, this.state.distance).then(resp => {
          this.setState({ foodTrucks: resp.data });      
        })  
    }
    
    toggleMapData = index => {
        const foodTrucks = this.state.foodTrucks;
        foodTrucks[index].isMapDataOpen = !foodTrucks[index].isMapDataOpen;
        this.setState({ foodTrucks: foodTrucks });
    }
    componentDidMount() {
        const distance = localStorage.getItem("distance");
        if(distance) {
            this.setState({ distance: distance });
        }
    }
    render() {
        return(
            <Row>
                <Col md={{ size: 10, offset: 1 }} sm="12">
                    <h1 className="text-center">Local Food Trucks</h1>
                    <hr />
                    { !this.props.isGeolocationAvailable ? 
                        ( <h2>Your browser needs to support geolocation</h2> ) : 
                        !this.props.isGeolocationEnabled ? 
                        ( <h2>Please enable Location services</h2> ) :
                            ( this.props.coords) ? 
                                ( <FoodTruckMapComponent 
                                    foodTrucks={ this.state.foodTrucks }  
                                    processForm={ this.processForm } 
                                    toggleMapData={ this.toggleMapData } 
                                    coords= { this.props.coords } 
                                    distance={ this.state.distance } 
                                    onChange={ this.onDistanceChange } /> ) : 
                            <h2>Getting your coordinates.</h2>  }
                </Col>
            </Row>
        );
    }

};

export default geolocated({ 
    positionOptions: {
      enableHighAccuracy: false,
    }, 
    userDecisionTimeout: 10000, 
  })(HomePage);