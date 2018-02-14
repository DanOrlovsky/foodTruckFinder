import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from '../Components/Auth/LoginForm';
import API from '../utils/API';
import Auth from '../Modules/Auth';


class LoginPage extends Component {
    
    state = {
        errors: {},
        email: "",
        password: "",
        isLoggedIn: false,
    }

    processForm = event => {
        event.preventDefault();
        API.loginUser({ email: this.state.email, password: this.state.password}).then(resp => {
            Auth.authenticateUser(resp.data.token);
            this.setState({ isLoggedIn: true });
        }).catch(err => console.log(err));
    }

    onChange = event => {
        const { name, value } = event.target;
        console.log(name, value);
        this.setState({
            [name]: value,
        })
    }

    render() {
        return(
             this.state.isLoggedIn ? ( <Redirect to="/" /> ) : (
                <LoginForm
                    onSubmit={ this.processForm }
                    onChange={ this.onChange}
                    errors={this.state.errors }
                    user={this.state.user }
                />
            )
        )
    }
}

export default LoginPage;