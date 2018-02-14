import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col } from 'reactstrap';


const LoginForm = ({onSubmit, onChange, errors, user}) => (
        <Container>
          { errors ? <h2>{ errors.message }</h2> : "" }
          <Form action='/' onSubmit={ onSubmit } >
            <FormGroup row>
              <Label for="userEmail" sm={2}>Email</Label>
              <Col sm={10}>
                <Input type="email" name="email" onChange={ onChange } id="email" placeholder="foodtruckfinder@gmail.com" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="userPassword" sm={2}>Password</Label>
              <Col sm={10}>
                <Input type="password" name="password" onChange={ onChange } id="password" placeholder="Shhhh! Don't Tell Anyone!" />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{size: 10, offset: 2 }}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Container>
      );
    
    
LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
};
export default LoginForm;