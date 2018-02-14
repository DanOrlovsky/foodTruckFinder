import React, { Component } from 'react';
import SignUpForm from '../Components/Auth/SignUpForm';
import API from '../utils/API';

class SignUpPage extends Component
{

    state = {
        errors: {},
        message: "",
        user: {
            email: '',
            zipCode: '',
            password: '',
            comparePassword: '',
            isFoodTruck: '',
        }
    }
    constructor(props) {
        super(props);
        this.processForm = this.processForm.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = event => {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user,
        });
    }

    processForm = event => {
        event.preventDefault();
        const { email, password, comparePassword, zipCode, isFoodTruck } = this.state.user;
        let boolFoodTruck = isFoodTruck === "on" ? true : false;
        if(password !== comparePassword) {
            this.setState({ errors: {comparePasswordError: "Passwords do not match." }})
            return;
        }
        const formData= { email: email, password: password, zipCode: zipCode, isFoodTruck: boolFoodTruck };
        
        API.saveNewUser(formData).then((data) => {
            console.log(data);
            if(!data.data.success) {
                const errors = data.data.errors ? data.data.errors : {};
                errors.summary = data.data.message;
                this.setState({ errors });
            };
            console.log(data);
        }).catch((err, code) => { 
            console.log(err)
        });
        
    }

    render() {
        return(
            <SignUpForm
                onSubmit={ this.processForm }
                onChange={ this.onChange }
                message={this.state.message }
                errors={this.state.errors}
                updateCheck={this.updateCheck }
                user={this.state.user}
            />
        )
    }
}

export default SignUpPage;