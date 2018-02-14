import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../Base.css';


const SignUpForm = ({ onSubmit, onChange, errors, user }) => (
   
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
      );
    
    
SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
};




      
// const SignUpForm = ({ onSubmit, onChange, errors, user }) => (
//     <Card className="container">
//         <form action='/' onSubmit={ onSubmit }>
//             <h2 >Sign Up</h2>
//             { errors.summary && <p className="error-message">{errors.summary}</p> }

//             <div className="field-line">
//                 <TextField 
//                     floatingLabelText="Email"
//                     name="email"
//                     type='email'
//                     errorText={errors.email}
//                     onChange={onChange}
//                     value={user.email} />
//             </div>
//             <div className="field-line">
//                 <TextField 
//                     floatingLabelText="Zip Code"
//                     name="zipCode"
//                     errorText={errors.zipCode}
//                     onChange={onChange}
//                     value={user.zipCode} />
//             </div>
//             <div className="field-line">
//                 <TextField 
//                     floatingLabelText="Password"
//                     name="password"
//                     type="password"
//                     errorText={errors.password}
//                     onChange={onChange}
//                     value={user.password} />
//             </div>
//             <div className="field-line">
//                 {/*<Checkbox 
//                     label="Are you a foodtruck?" 
//                     checked={this.state.isFoodTruck} 
//                 onCheck= { updateCheck.bind(this) }/>*/}
//             </div>

//             <div className="button-line">
//                 <RaisedButton type="submit" label="Create new account" primary />
//             </div>
//             <CardText>Already have an account?  <Link to="/login">Log in</Link>!</CardText>
//         </form>
//     </Card>
// );

// SignUpForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//     onChange: PropTypes.func.isRequired,
//     errors: PropTypes.object.isRequired,
//     user: PropTypes.object.isRequired,
// };

export default SignUpForm;