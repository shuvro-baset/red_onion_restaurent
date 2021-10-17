import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodItem.css'
const FoodItem = ({ id, image, title, description, price , type}) => { 
    return (
        <Col md={4} >
            <Card className="m-4 p-4 shadow border-0 d-flex flex-column align-items-center">
                <img src={image} className="img-fluid card-img" alt="" />
                <h6 className='my-3'>{title}</h6>
                <p className="text-center">{description.slice(0,100)}</p>
                <p>${price}</p>
                <button className="btn btn-danger"><Link to={`/food/${id}`} className="text-white">see details</Link></button>
            </Card>
        </Col>
    );
};

export default FoodItem;