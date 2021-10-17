import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodItem.css'
const FoodItem = ({ id, image, title, description, price , type}) => { 
    return (
        <Col md={4}>
            <Card className="p-3 shadow border-0 d-flex flex-column align-items-center">
                <img src={image} className="img-fluid card-img" alt="" />
                <h4>{title}</h4>
                <p>{description.slice(0,100)}</p>
                <p>{price}</p>
                <button className="btn btn-danger"><Link to={`/food/${id}`} className="text-white">see details</Link></button>
            </Card>
        </Col>
    );
};

export default FoodItem;