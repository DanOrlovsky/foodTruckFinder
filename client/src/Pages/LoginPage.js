import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../Components/Auth/LoginForm';
import API from '../utils/API';
import Auth from '../Modules/Auth';


class LoginPage extends Component {
    
    state = {
        errors: {},
        email: "",
        password: "",
        isLoggedIn: false,
        user: {},
    }

    processForm = event => {
        event.preventDefault();
        API.loginUser({ email: this.state.email, password: this.state.password}).then(resp => {
            if(resp.data.success === false) {
                if(resp.data.message) {
                    this.setState({ errors: { message: resp.data.message }} );
                }
            } else {
                Auth.authenticateUser(resp.data.token);
                this.setState({ isLoggedIn: true });
                this.props.userAuthChanged();
            }
        }).catch(err => console.log(err));
    }

    onChange = event => {
        const { name, value } = event.target;
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