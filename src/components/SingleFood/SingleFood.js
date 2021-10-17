import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import useFoods from "../../hooks/useFoods"

const SingleFood = () => {

    const {id} = useParams();
    const [foods] = useFoods();
    const foodId = parseInt(id)
    const [details, setDetails] = useState([])
    console.log(details)


    useEffect(()=>{

        fetch('/foods.json')
            .then(res => res.json())
            .then(data => setDetails(data.find(item => foodId === item.id)))
    } ,[])

    const title = details.title;
    const img = details.image;
    const description = details.description;
    console.log(img);
    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{details.price}</p>

                </Col>
                <Col md={6}>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleFood;