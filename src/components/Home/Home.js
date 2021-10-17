import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useFoods from '../../hooks/useFoods';
import FoodItem from '../Foods/FoodItem/FoodItem';
import './Home.css'
const Home = () => {

    const [foods] = useFoods()
    const [menu, setMenu] = useState('Breakfast')
    const handleMenuTabs = (type) => {
        setMenu(type)
    }
    return (
        <Container fluid>
            <Row>
                <div className="banner">
                    <div className="d-flex justify-content-center align-items-center banner-text">
                        <h1>Best Food Waiting For Your Belly</h1>
                    </div>
                </div>
            </Row>
            <Row>
                <Col>
                    <ul className="mx-auto d-flex justify-content-center">
                        <li className="menu-item" onClick={() => handleMenuTabs('Breakfast')}>breakfast</li>
                        <li className="menu-item" onClick={() => handleMenuTabs('Lunch')}>lunch</li>
                        <li className="menu-item" onClick={() => handleMenuTabs('Dinner')}>dinner</li>
                    </ul>
                </Col>
            </Row>
            <Row>
            {
                foods.filter((item) => menu===item.type).map(food => 
                    <FoodItem 
                    key={food.id}
                    {...food}></FoodItem>
                )
            }
            </Row>
        </Container>
    );
};

export default Home;