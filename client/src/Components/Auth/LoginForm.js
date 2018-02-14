import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../Base.css';


const LoginForm = ({onSubmit, onChange, errors, user}) => (

        <Form action='/' onSubmit={ onSubmit } >
          <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input type="email" name="email" onChange={ onChange } id="userEmail" placeholder="foodtruckfinder@gmail.com" />
          </FormGroup>
          <FormGroup>
            <Label for="userPassword">Password</Label>
            <Input type="password" name="password" onChange={ onChange } id="userPassword" placeholder="Shhhh! Don't Tell Anyone!" />
          </FormGroup>
          <div class="loginButton">
            <input id="login" type="button" value="Login"></input>
          </div>
        </Form>
  );

    
    
LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
};
export default LoginForm;