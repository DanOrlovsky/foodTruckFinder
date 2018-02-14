import React, { Component } from 'react';
import API from '../utils/API';

class DashboardPage extends Component {
    state = {
        errors: {},
        user: {},
    }

    componentDidMount() {
        API.getUserFromToken().then(user => console.log(user));
    }

    render() {
        return (
              <h2>DashboardPage</h2>      
        )
    }
}

export default DashboardPage;