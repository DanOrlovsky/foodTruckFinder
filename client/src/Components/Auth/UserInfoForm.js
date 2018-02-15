import React from 'react';
import { Col,Container, Label, Form, FormGroup,  Input } from 'reactstrap';

const UserInfoForm = props => (
    <Container>
        <Form>
            <FormGroup row>
                <Label for="email">email</Label>
                <Col sm={10}>
                    <Input value={ props.user.email } name="email" id="email"onChange={ props.onChange } type="text" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="firstname">firstname</Label>
                <Col sm={10}>
                    <Input value={ props.user.firstname } name="firstname" id="firstname"onChange={ props.onChange } type="text" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="lastname">lastname</Label>
                <Col sm={10}>
                    <Input value={ props.user.lastname } name="lastname" id="lastname"onChange={ props.onChange } type="text" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="address">address</Label>
                <Col sm={10}>
                    <Input value={ props.user.address } name="address" id="address"onChange={ props.onChange } type="text" />
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

export default UserInfoForm;