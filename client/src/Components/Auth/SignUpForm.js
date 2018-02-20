import React from 'react';
import {Link} from 'react-router-dom';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '../Base.css';


const SignUpForm = ({ message, onSubmit, onChange, errors, user }) => (
  <div id="signUpForm">
    { message !== "" ? <label className="badge badge-warning">{ message }</label> : "" }
    <Form action='/' onSubmit={ onSubmit } >
      <h2>Signup Form</h2>
      <FormGroup>
        <Label for="userEmail">Email</Label>
        <Input type="email" name="email" onChange={ onChange } id="email"  placeholder="foodtruckfinder@gmail.com" />
        { errors.email ? <label className="badge badge-danger">{errors.email }</label> : "" }
      </FormGroup>
      <FormGroup>
        <Label for="userZipcode">Zipcode</Label>
        <Input type="text" name="zipCode" onChange={ onChange } id="userZip" placeholder="#####" />
      </FormGroup>
      <FormGroup>
        <Label for="userPassword">Password</Label>
        <Input type="password" name="password" onChange={ onChange } id="password" placeholder="Shhhh! Don't Tell Anyone!" />
        { errors.password !== "" ? <label className="badge badge-warning">{ errors.password }</label> : "" }        
      </FormGroup>
      <FormGroup>
        <Label for="verifyPassword">Verify Password</Label>
        <Input type="password" name="comparePassword" onChange={ onChange } id="verifyPassword" placeholder="One more time with feeling..." />
        { errors.comparePasswordError ? <label className="badge badge-danger">{errors.comparePasswordError }</label> : "" }
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="isFoodTruck" onChange={ onChange} />{' '} I am the owner of an AWESOME Food Truck!
        </Label>
      </FormGroup>
      <div className="loginButton">
        <input className="button" type="submit" value="Create Account"></input>{ '   ' }
          <Link to="/login">I already have an account</Link>
      </div>
    </Form>
  </div>
);
    
    
// SignUpForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//     onChange: PropTypes.func.isRequired,
//     errors: PropTypes.object.isRequired,
//     user: PropTypes.object.isRequired,
// };

export default SignUpForm;