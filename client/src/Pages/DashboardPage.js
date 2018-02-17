import React, { Component } from 'react';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import UserInfoForm from '../Components/Auth/UserInfoForm';
import FoodTruckForm from '../Components/Auth/FoodTruckForm';



class DashboardPage extends Component {
    state = {
        message: {},
        errors: {},
        imageFile: null,
        user: { },
    }
    
    componentDidMount() {
        
        API.getUserFromToken().then(user => {
            this.setState({user: user.data });
        });
    }

    onUserFormChange = event => {
        const { name, value } = event.target;
        const newUser = this.state.user;
        newUser[name] = value;
        this.setState( { user: newUser });
    }
    onFileChange = event => {
        console.log(event.target);
    }
    
    onFoodTruckSubmit = event => {
        event.preventDefault();
        let image = document.getElementById("foodTruckImage");
        API.addImage(this.state.user.foodTrucks[0]._id, image.files[0]).then(resp => {
            console.log(resp);
        }).catch(err => console.log(err));
    }

    onFoodTruckChange = event => {
        const { name, value } = event.target;
        const user = this.state.user;
        user.foodTrucks[0][name] = value;
        this.setState({ user: user });
        console.log(this.state.user);
    }

    onUserFormSubmit = event => {
        event.preventDefault();
        API.updateUser(this.state.user).then(resp => {
            if(resp.success) {
                this.setState({ message: "User updated successfully!" } );
            }
        }).catch(err => { console.log(err) } );
    }

    render() {
        let page = null;
        if(!this.state.user.email) {
            page = <h2>Please <Link to="/login">log in</Link> to your account.</h2>;
        } else if(this.state.user.role === "Foodtruck") {
            page = 
                <div>
                    <FoodTruckForm 
                        foodTruck={ this.state.user.foodTrucks[0] }
                        fileChange={this.onFileChange }  
                        onChange={ this.onFoodTruckChange } 
                        onSubmit={ this.onFoodTruckSubmit } />
                    <UserInfoForm 
                        user={this.state.user} 
                        onChange={ this.onUserFormChange } 
                        onSubmit={ this.onUserFormSubmit} />
                </div>;
        } else {
            page = <UserInfoForm user={this.state.user} onChange={ this.onUserFormChange } onSubmit={ this.onUserFormSubmit} />;
        }
        return (
            <div>
                { this.state.message ? ( <h2 className="badge badge-success">{this.message }</h2>) : "" }
                {page}
            </div>
        );
    }
}

export default DashboardPage;

