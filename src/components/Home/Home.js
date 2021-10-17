import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import useFoods from '../../hooks/useFoods';
import FoodItem from '../Foods/FoodItem/FoodItem';
import img1 from '../../Image/adult-blur-blurred-background-687824.png'
import img2 from '../../Image/chef-cook-food-33614.png'
import img3 from '../../Image/architecture-building-city-2047397.png'
import abt_img1 from '../../Image/ICON/fast_delivery.png'
import abt_img2 from '../../Image/ICON/notification.png'
import abt_img3 from '../../Image/ICON/home_delivery.png'
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
            <Row className="my-5">
                <Col md={6}>
                    <h2>Why You Choose Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Distinctio vel ad laborum unde officiis dolorem obcaecati possimus est, 
                        nulla similique molestias
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Card>
                        <img src={img1} className="img-fluid" alt="" />
                        <Row className='p-4'>
                            <Col md={2}>
                                <img src={abt_img1} className="abt_img" alt="" />
                            </Col>
                            <Col md={10}>
                                <h3>Fast Delivery</h3>
                                <p>Keep your system in a sync with automated web hook based notifications each time link is paid and how we dream about out future.</p>
                                <button className="abt-btn">See more <i class="fas fa-arrow-circle-right"></i></button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <img src={img2} className="img-fluid" alt="" />
                        <Row className='p-4'>
                            <Col md={2}>
                                <img src={abt_img2} className="abt_img" alt="" />
                            </Col>
                            <Col md={10}>
                                <h3>Fast Delivery</h3>
                                <p>Keep your system in a sync with automated web hook based notifications each time link is paid and how we dream about out future.</p>
                                <button className="abt-btn">See more <i class="fas fa-arrow-circle-right"></i></button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <img src={img3} className="img-fluid" alt="" />
                        <Row className='p-4'>
                            <Col md={2}>
                                <img src={abt_img3} className="abt_img" alt="" />
                            </Col>
                            <Col md={10}>
                                <h3>Fast Delivery</h3>
                                <p>Keep your system in a sync with automated web hook based notifications each time link is paid and how we dream about out future.</p>
                                <button className="abt-btn">See more <i class="fas fa-arrow-circle-right"></i></button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;