import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import './SingleFood.css'
const SingleFood = () => {

    const {id} = useParams();
    const foodId = parseInt(id)
    const [details, setDetails] = useState([])


    useEffect(()=>{

        fetch('/foods.json')
            .then(res => res.json())
            .then(data => setDetails(data.find(item => foodId === item.id)))
    } ,[])

   const {title, description, image, price} = details;
    return (
        <Container>
            <Row className="my-5">
                <Col md={6} className="d-flex flex-column align-items-center">
                    <div>
                        <div className="py-3">
                            <h3 className="py-5 fw-bolder">{title}</h3>
                            <p>{description}</p>
                        </div>

                        <div>
                            <p className="price-text">$ {price}</p>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div>
                        <img src={image} className="img-fluid" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleFood;