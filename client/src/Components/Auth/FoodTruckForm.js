import React from 'react';
import { Row, Col, Container, Label, Form, FormGroup,  Input, Button } from 'reactstrap';
import Dropzone from 'react-dropzone';
import { FacebookShareButton, FacebookIcon, TwitterShareButton } from 'react-share';
const dropZoneStyle ={
    backgroundColor: "#eee",
    border: "1px solid black",
    width: "100%",
    marginTop: "20px",
    marginBottom: "20px",
    padding: "20px"
}

const truckStyles = {
    marginLeft:2
}

const FoodTruckForm = props => (
    
    <Container className="input-form">
    {
        props.foodTruck.isOpen ? 
            ( 
                <div>
                    <Button onClick={ props.toggleFoodtruck } className="btn btn-danger">Close Foodtruck</Button> 
                    <div className="share-box">
                        <p>Share with your fans you're open!</p>
                        <FacebookShareButton url={"https://foodtruckfinder.life"} quote="We're open!  Find us on Food Truck Finder!">
                            <FacebookIcon size={ 48 } round className="pointer-class" />
                        </FacebookShareButton>
                        <TwitterShareButton url={"https://foodtruckfinder.life"} title="We're Open on Food Truck Finder">
                            <TwitterIcon size={48} round className="pointer-class" />
                        </TwitterShareButton>
                    </div>
                </div>
            ) : 
            <Button className="btn btn-success" onClick={ props.toggleFoodtruck }>Open Food Truck</Button>
    }
        <Row>
            <Col lg={{ size: "8", offset: "2" }} md={{ size: "8", offset: "2" }} sm={12}>
                <h1 className="heading-title" style={truckStyles}>Food Truck Info</h1>
                { props.message && <h2 className="success">{props.message} </h2> }
                <h5>Image</h5>
                { props.foodTruck.imageUrl ? <img src={ props.foodTruck.imageUrl } className="food-truck-image"  alt="Food truck" /> : "" }    
                <Dropzone
                    style={dropZoneStyle}
                    multiple={false} accept="image/*"
                    onDrop={ props.onImageDrop }>
                    <p>Drop an image of your foodtruck here or click to select one from your computer</p>
                </Dropzone>
                <Form onSubmit={ props.onSubmit } action='/'>
                    <FormGroup row>
                        <Label for="email" className="col-sm-2 control-label">Name</Label>
                        <Col sm={10}>
                            <Input value={ props.foodTruck.name } name="name" id="name" onChange={ props.onChange } type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="description" className="col-sm-2 control-label">Description</Label>
                        <Col sm={10}>
                            <Input value={ props.foodTruck.description } name="description" 
                                id="description" onChange={ props.onChange } type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="cuisine" className="col-sm-2 control-label">Cuisine</Label>
                        <Col sm={10}>
                            <Input value={ props.foodTruck.cuisine } name="cuisine" 
                                id="cuisine" onChange={ props.onChange } type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="url" className="col-sm-2 control-label">Website</Label>
                        <Col sm={10}>
                            <Input value={ props.foodTruck.url } name="url" 
                                id="url" onChange={ props.onChange } type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={{ size: "10", offset: "2" }}>
                            <Button className="btn btn-default">Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>    
            </Col>
        </Row>
    </Container>
);

export default FoodTruckForm;
