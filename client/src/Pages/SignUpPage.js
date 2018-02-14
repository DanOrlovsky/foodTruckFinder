import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../Components/Auth/SignUpForm';
import API from '../utils/API';

class SignUpPage extends Component
{

    state = {
        errors: {},
        user: {
            email: '',
            zipCode: '',
            password: '',
            isFoodTruck: '',
        }
    }
    constructor(props) {
        super(props);
        this.processForm = this.processForm.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = event => {
        console.log(event);
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user,
        });
    }
    updateCheck = event => {
        console.log(event);
    }
    processForm = event => {
        event.preventDefault();
        
        const { email, password, zipCode } = this.state.user;
        const formData= { email: email, password: password, zipCode: zipCode };
        
        API.saveNewUser(formData).then((data) => {
            console.log(data);
            if(!data.data.success) {
                const errors = data.data.errors ? data.data.errors : {};
                errors.summary = data.data.message;
                this.setState({ errors });
            };
        }).catch((err, code) => { 
            console.log(err)
        });
        
    }

    render() {
        return(
            <SignUpForm
                onSubmit={ this.processForm }
                onChange={ this.onChange }
                errors={this.state.errors}
                updateCheck={this.updateCheck }
                user={this.state.user}
            />
        )
    }
}

export default SignUpPage;