import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SignUpForm = ({ onSubmit, onChange, errors, user }) => (
    <Card className="container">
        <form action='/' onSubmit={ onSubmit }>
            <h2 >Sign Up</h2>
            { errors.summary && <p className="error-message">{errors.summary}</p> }

            <div className="field-line">
                <TextField 
                    floatingLabelText="Email"
                    name="email"
                    type='email'
                    errorText={errors.email}
                    onChange={onChange}
                    value={user.email} />
            </div>
            <div className="field-line">
                <TextField 
                    floatingLabelText="Zip Code"
                    name="zipCode"
                    errorText={errors.zipCode}
                    onChange={onChange}
                    value={user.zipCode} />
            </div>
            <div className="field-line">
                <TextField 
                    floatingLabelText="Password"
                    name="password"
                    type="password"
                    errorText={errors.password}
                    onChange={onChange}
                    value={user.password} />
            </div>
            <div className="field-line">
                
            </div>

            <div className="button-line">
                <RaisedButton type="submit" label="Create new account" primary />
            </div>
            <CardText>Already have an account?  <Link to="/login">Log in</Link>!</CardText>
        </form>
    </Card>
);

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
};

export default SignUpForm;