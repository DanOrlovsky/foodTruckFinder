import React from 'react';
import { Row, Col,Container, Label, Form, FormGroup, Button, Input } from 'reactstrap';

const styles = {
    marginBottom:120
}

const userStyles = {
    marginLeft:2
}

const containerStyle = {
    marginBottom:70
}

const UserInfoForm = props => (
    <Container className="input-form" style={containerStyle}>
        <Row>
            <Col lg={{ size: "8", offset: "2" }} md={{ size: "8", offset: "2" }} sm={12}>
                <h1 className="heading-title" style={userStyles}>User Info</h1>
                
                { props.message && <h2 className="success">{props.message} </h2> }
                <Form action='/' style={styles} onSubmit={ props.onSubmit }>
                    <FormGroup row>
                        <Label for="email" className="col-sm-2 control-label">Email</Label>
                        <Col sm={10}>
                            <Input value={ props.user.email } name="email" id="email" disabled onChange={ props.onChange } type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="firstName" className="col-sm-2 control-label">First Name</Label>
                        <Col sm={10}>
                            <Input value={ props.user.firstName } name="firstName" id="firstName" onChange={ props.onChange } type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="lastName" className="col-sm-2 control-label">Last Name</Label>
                        <Col sm={10}>
                            <Input value={ props.user.lastName } name="lastName" id="lastName" onChange={ props.onChange } type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="address" className="col-sm-2 control-label">Address</Label>
                        <Col sm={10}>
                            <Input value={ props.user.address } name="address" id="address" onChange={ props.onChange } type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="city" className="col-sm-2 control-label">City</Label>
                        <Col lg={2} md={4} sm={10}>
                            <Input value={ props.user.city } name="city" id="city" onChange={ props.onChange } type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="State" className="col-sm-2 control-label">State</Label>
                        <Col lg={2} md={4} sm={10}>
                            <Input value={ props.user.state } name="state" id="state" onChange={ props.onChange } type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="zipcode" className="col-sm-2 control-label">Zip Code</Label>
                        <Col sm={10}>
                            <Input value={ props.user.zipCode } name="zipcode" id="zipcode" onChange={ props.onChange } type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={{ size: "10", offset: "2" }}>
                            <Button className="btn btn-default">Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>    
            </Col>
        </Row>
    </Container>

);

export default UserInfoForm;