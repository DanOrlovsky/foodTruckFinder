import React from 'react';
import { Row, Col, Container, Label, Form, FormGroup,  Input, Button } from 'reactstrap';


const FoodTruckForm = props => (
    <Container>
        <Row>
            <Col lg={{ size: "8", offset: "2" }} md={{ size: "8", offset: "2" }} sm={12}>
                <h2>Food Truck Info</h2>
                <Form onSubmit={ props.onSubmit }>
                    <FormGroup row>
                        <Label for="email" className="col-sm-2 control-label">Name</Label>
                        <Col sm={10}>
                            <Input value={ props.foodTruck.name } name="name" id="name" onChange={ props.onChange } type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="description" className="col-sm-2 control-label">Description</Label>
                        <Col sm={10}>
                            <Input value={ props.foodTruck.description } name="description" id="description" onChange={ props.onChange } type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="cuisine" className="col-sm-2 control-label">Cuisine</Label>
                        <Col sm={10}>
                            <Input value={ props.foodTruck.cuisine } name="cuisine" id="cuisine" onChange={ props.onChange } type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="url" className="col-sm-2 control-label">Website</Label>
                        <Col sm={10}>
                            <Input value={ props.foodTruck.url } name="url" id="url" onChange={ props.onChange } type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Input name="image" type="file" />
                    </FormGroup>
                    <FormGroup>
                        <Col sm={{ size: "10", offset: "2" }}>
                            <Button className="btn btn-default">Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>    
            </Col>
        </Row>
        <hr />
    </Container>

);


export default FoodTruckForm;
