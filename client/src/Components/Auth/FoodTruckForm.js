import React from 'react';
import { Col,Container, Label, Form, FormGroup,  Input } from 'reactstrap';


const FoodTruckForm = props => (
    <Container>
        <Form>
            <FormGroup row>
                <Label for="email">Name</Label>
                <Col sm={10}>
                    <Input value={ props.name } name="name" id="name"onChange={ props.onFoodTruckChange } type="text" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="description">Description</Label>
                <Col sm={10}>
                    <Input value={ props.description } name="description" id="description"onChange={ props.onChange } type="text" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="cuisine">Cuisine</Label>
                <Col sm={10}>
                    <Input value={ props.cuisine } name="cuisine" id="cuisine"onChange={ props.onChange } type="text" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="url">Website</Label>
                <Col sm={10}>
                    <Input value={ props.url } name="url" id="url" onChange={ props.onChange } type="text" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="city">city</Label>
                <Col sm={10}>
                    <Input value={ props.user.city } name="city" id="city"onChange={ props.onChange } type="text" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="zipcode">zipcode</Label>
                <Col sm={10}>
                    <Input value={ props.user.zipCode } name="zipcode" id="zipcode"onChange={ props.onChange } type="text" />
                </Col>
            </FormGroup>
        </Form>    
    </Container>

);


export default FoodTruckForm;
