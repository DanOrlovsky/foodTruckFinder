import React, {Component} from 'react';
import FoodTruckMapComponent from '../Components/Map/Map'
import { Row, Card, CardTitle, Container, Col } from 'reactstrap';

class HomePage extends  Component {
    render() {
        return(
            <Row>
                <Col md={{ size: 6, offset: 3 }} sm="12">
                    <h2>Local Food Trucks</h2>
                    <FoodTruckMapComponent />
                </Col>
            </Row>
        );
    }

};

export default HomePage;