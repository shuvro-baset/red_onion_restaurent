import React from 'react';
import { Card, Col } from 'react-bootstrap';

const FoodItem = ({ image, title, description, price , type}) => { 
    return (
        <Col md={4}>
            <Card>
                <img src={image} className="img-fluid" alt="" />
                <h2>{title}</h2>
                <p>{description.slice(0,100)}</p>
                <p>{price}</p>
                <button>{type}</button>
            </Card>
        </Col>
    );
};

export default FoodItem;