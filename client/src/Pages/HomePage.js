import React, {Component} from 'react';
import FoodTruckMapComponent from '../Components/Map/Map'

class HomePage extends  Component {
    render() {
        return(
            <div className="container">
                <h2>Food truck finder</h2>
                <FoodTruckMapComponent />
            </div>
        );
    }

};

export default HomePage;