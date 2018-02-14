import React, { Component } from 'react';
import API from '../utils/API';
import { Col,Container, Label, Form, FormGroup,  Input } from 'reactstrap';

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
            <Container>
               <Form>
                   <FormGroup row>
                       <Label for="email">email</Label>
                       <Col sm={10}>
                            <Input value={ this.state.user.email } name="email" id="email"onChange={ this.onChange } type="text" />
                       </Col>
                   </FormGroup>
                   <FormGroup row>
                       <Label for="firstname">firstname</Label>
                       <Col sm={10}>
                            <Input value={ this.state.user.firstname } name="firstname" id="firstname"onChange={ this.onChange } type="text" />
                       </Col>
                   </FormGroup>
                   <FormGroup row>
                       <Label for="lastname">lastname</Label>
                       <Col sm={10}>
                            <Input value={ this.state.user.lastname } name="lastname" id="lastname"onChange={ this.onChange } type="text" />
                       </Col>
                   </FormGroup>
            

                                   
               </Form>    
           </Container>
        )
    }
}

export default DashboardPage;

