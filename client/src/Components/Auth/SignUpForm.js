import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '../Base.css';


const SignUpForm = ({ onSubmit, onChange, errors, user }) => (
    <div id="signUpForm">
        <Form action='/' onSubmit={ onSubmit } >
        <h2>Signup Form</h2>
        <FormGroup>
            <Label for="userZipcode">Zipcode</Label>
            <Input type="email" name="email" onChange={ onChange } id="userZip" placeholder="#####" />
          </FormGroup>
          <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input type="email" name="email" onChange={ onChange } id="userEmail" placeholder="foodtruckfinder@gmail.com" />
          </FormGroup>
          <FormGroup>
            <Label for="userPassword">Password</Label>
            <Input type="password" name="password" onChange={ onChange } id="userPassword" placeholder="Shhhh! Don't Tell Anyone!" />
          </FormGroup>
          <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            I am the owner of an AWESOME Food Truck!
          </Label>
        </FormGroup>
        <div class="loginButton">
            <input id="button" type="button" value="Create Account"></input>
            <input id="button" type="button" value="I Already Have An Account"></input>
          </div>
        </Form>
        </div>
      );
    
    
SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
};

export default SignUpForm;