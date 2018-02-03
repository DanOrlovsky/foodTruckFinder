import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../Components/Auth/LoginForm';

class LoginPage extends Component {
    state = {
        errors: {},
        user: {
            email: "",
            password: "",
        }
    }

    constructor(props) {
        super(props);
        this.processForm = this.processForm.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    processForm = event => {
        event.preventDefault();
        console.log("Email", this.state.user.email);
        console.log("Password", this.state.user.password);
    }

    onChange = event => {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user,
        });
    }

    render() {
        return(
            <LoginForm
                onSubmit={ this.processForm }
                onChange={ this.onChange}
                errors={this.state.errors }
                user={this.state.user }
            />
        )
    }
}

export default LoginPage;