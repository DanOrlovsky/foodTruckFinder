import React, { Component } from 'react';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import UserInfoForm from '../Components/Auth/UserInfoForm';

class DashboardPage extends Component {
    state = {
        errors: {},
        user: {},
    }

    componentDidMount() {
        API.getUserFromToken().then(user => {
            this.setState({user: user.data });
        });
    }

    onUserFormChange = event => {
        const {name, value } = event.target;
        const newUser = this.state.user;
        newUser[name] = value;
        this.setState( { user: newUser });
    }


    render() {
        let page = null;
        if(!this.state.user.email) {
            page = <h2>Please <Link to="/login">log in</Link> to your account.</h2>;
        } else if(this.state.user.role === "Foodtruck") {
            page = 
                <div>
                    <h2>This is a foodtruck!</h2>
                    <UserInfoForm user={this.state.user} onChange={ this.onUserFormChange } />
                </div>;
        } else {
            page = <UserInfoForm user={this.state.user} onChange={ this.onUserFormChange }/>;
        }
        return (
            <div>
                {page}
            </div>
        );
    }
}

export default DashboardPage;

