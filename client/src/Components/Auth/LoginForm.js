import React from 'react';
import PropTypes from 'prop-types';
// import {Card, CardText} from 'material-ui/Card';
import { Link } from 'react-router-dom';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// const LoginForm = ({onSubmit, onChange, errors, user}) => (
//     <Card className="container">
//         <form action='/' onSubmit={onSubmit}>
//             <h2 className="card-heading">Log In</h2>
//             {errors.summary && <p className="error-message">{errors.summary}</p>}

//             <div className="field-line">
//                 <TextField
//                     floatingLabelText="Email"
//                     name="email"
//                     errorText={errors.email}
//                     onChange={onChange}
//                     value={user.email} />
//             </div>

//             <div className="field-line">
//                 <TextField  
//                     floatingLabelText="Password"
//                     name="password"
//                     errorText={errors.password}
//                     onChange={onChange}
//                     value={user.password} />
//             </div>
//             <div className="button-line">
//                 <RaisedButton type="submit" label="Log in" primary />
//             </div>
//             <CardText>Don't have an account?  <Link to={'/signup'}>Create one</Link>.</CardText>
//         </form>
//     </Card>
// );

// LoginForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//     onChange: PropTypes.func.isRequired,
//     errors: PropTypes.object.isRequired,
//     user: PropTypes.object.isRequired,
// };

const LoginForm = ({onSubmit, onChange, errors, user}) => (
        <Form>
          <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input type="email" name="email" id="userEmail" placeholder="foodtruckfinder@gmail.com" />
          </FormGroup>
          <FormGroup>
            <Label for="userPassword">Password</Label>
            <Input type="password" name="password" id="userPassword" placeholder="Shhhh! Don't Tell Anyone!" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      );
    
    
LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
};
export default LoginForm;