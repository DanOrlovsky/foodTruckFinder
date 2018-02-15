import React from 'react';
import { Col,Container, Label, Form, FormGroup,  Input } from 'reactstrap';

const UserInfoForm = props => (
    <Container>
        <Form>
            <FormGroup row>
                <Label for="email">Email</Label>
                <Col sm={10}>
                    <Input value={ props.user.email } name="email" id="email"onChange={ props.onChange } type="text" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="firstName">First Name</Label>
                <Col sm={10}>
                    <Input value={ props.user.firstName } name="firstName" id="firstName"onChange={ props.onChange } type="text" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="lastName">Last Name</Label>
                <Col sm={10}>
                    <Input value={ props.user.lastName } name="lastName" id="lastName"onChange={ props.onChange } type="text" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="address">Address</Label>
                <Col sm={10}>
                    <Input value={ props.user.address } name="address" id="address"onChange={ props.onChange } type="text" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="city">City</Label>
                <Col lg={2} md={4} sm={10}>
                    <Input value={ props.user.city } name="city" id="city"onChange={ props.onChange } type="text" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="State">State</Label>
                <Col lg={2} md={4} sm={10}>
                    <Input value={ props.user.state } name="state" id="state"onChange={ props.onChange } type="text" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="zipcode">Zip Code</Label>
                <Col sm={10}>
                    <Input value={ props.user.zipCode } name="zipcode" id="zipcode"onChange={ props.onChange } type="text" />
                </Col>
            </FormGroup>
        </Form>    
    </Container>

);

export default UserInfoForm;