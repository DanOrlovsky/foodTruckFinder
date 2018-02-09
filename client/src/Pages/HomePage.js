import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import Map from '../Components/Map/Map'

const HomePage = () => (
    <Card className="container">
        <CardTitle title="Food Truck Finder" subtitle="Satisfy your Food Truck Craving" />
        <Map></Map>
    </Card>

);

export default HomePage;