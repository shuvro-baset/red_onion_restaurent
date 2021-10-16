import React from 'react';
import { Container, Nav, Row, Col, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Home.css'
const Home = () => {
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
                    <Navbar>
                        <Nav className="mx-auto">
                            <NavLink className="menu-item" to="/home">Home</NavLink>
                            <NavLink className="menu-item" to="/about">About</NavLink>
                            <NavLink className="menu-item" to="/services">Service</NavLink>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Container>
    );
};

export default Home;