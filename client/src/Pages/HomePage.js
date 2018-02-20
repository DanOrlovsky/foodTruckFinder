import React, {Component} from 'react';
import FoodTruckMapComponent from '../Components/Map/Map'
import { Row, Card, CardTitle, Container, Col } from 'reactstrap';

class HomePage extends  Component {
    render() {
        return(
            <Row>
                <Col md={{ size: 10, offset: 1 }} sm="12">
                    <h1 className="text-center">Local Food Trucks</h1>
                    <hr />
                    <FoodTruckMapComponent />
                </Col>
            </Row>
        );
    }

};

export default HomePage;