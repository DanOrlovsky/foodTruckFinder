import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignUpForm from '../Components/Auth/SignUpForm';
import API from '../utils/API';
import Auth from '../Modules/Auth';
class SignUpPage extends Component
{

    state = {
        errors: {},
        message: "",
        isLoggedIn: false,
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
        
        API.saveNewUser(formData).then((resp) => {
            if(!resp.data.success) {
                const errors = resp.data.errors ? resp.data.errors : {};
                this.setState({ errors, message: resp.data.message });
                return;
            };
            Auth.authenticateUser(resp.data.token);
            this.setState({ isLoggedIn: true });            
        }).catch((err, code) => { 
            console.log(err)
        });
        
    }

    render() {
        return(
            this.state.isLoggedIn ? ( <Redirect to="/dashboard" /> ) : 
            ( 
                <SignUpForm
                    onSubmit={ this.processForm }
                    onChange={ this.onChange }
                    message={this.state.message }
                    errors={this.state.errors}
                    updateCheck={this.updateCheck }
                    user={this.state.user} />
            )
        )
    }
}

export default SignUpPage;