import React from 'react';
import { CardTitle, CardText, Container, Row, Card } from 'reactstrap';
const DirectionsView = ({ directions }) => (
    <Container>
        <div className="directions-card">
            <h2 className="directions">Directions</h2>
            <ul className="directions">
                { directions.map((current, index) => (
                    <li dangerouslySetInnerHTML={{__html: `${ current.instructions }, ${ current.distance.text } about ${ current.duration.text }`}}
                    key={index}></li>
                ))}
            </ul>
        </div>
    </Container>
);

export default DirectionsView;