import React, { Component } from 'react';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import UserInfoForm from '../Components/Auth/UserInfoForm';
import FoodTruckForm from '../Components/Auth/FoodTruckForm';
import request from 'superagent';
import '../Components/Base.css';
const UPLOAD_PRESET = 'icwuha7h';
const UPLOAD_URL = 'https://api.cloudinary.com/v1_1/food-truck-finder/upload';



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

    onUserFormSubmit = event => {
        if(event) event.preventDefault();
        API.updateUser(this.state.user).then(resp => {
            if(resp.success) {
                this.setState({ message: "User updated successfully!" } );
            }
        }).catch(err => { console.log(err) } );
    }

    onImageDrop = files => {
        const user = this.state.user;
        //user.foodTrucks[0].imageUrl = files[0];
        let upload = request.post(UPLOAD_URL)
            .field("upload_preset", UPLOAD_PRESET)
            .field("file", files[0]);

        upload.end((err, resp) => {
            if(err) return console.log(err);

            if(resp.body.secure_url !== '') {
                user.foodTrucks[0].imageUrl = resp.body.secure_url;
                this.setState({ user: user });
                this.onUserFormSubmit();
            }
        })
        //this.setState({ user: user });

    }
    
    onFoodTruckChange = event => { 
        const { name, value } = event.target;
        const user = this.state.user;
        user.foodTrucks[0][name] = value;
        this.setState({ user: user });
        console.log(this.state.user);
    }

    toggleFoodtruck = event => {
        event.preventDefault();
        const user = this.state.user;
        user.foodTrucks[0].isOpen = !user.foodTrucks[0].isOpen;
        this.setState({ user: user });
        this.onUserFormSubmit(event);
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
                        onChange={ this.onFoodTruckChange } 
                        onSubmit={ this.onUserFormSubmit } 
                        onImageDrop={ this.onImageDrop }
                        toggleFoodtruck={ this.toggleFoodtruck } />
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

