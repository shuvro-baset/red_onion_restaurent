import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../Image/logo2.png'
import './Footer.css'
const Footer = () => {
    return (
        <Container fluid className="mt-5 bg-dark">
            <Row className="pt-5">
                <Col md={6} >
                    <img src={logo} className="img-fluid footer-logo" alt="" />
                </Col>
                <Col md={3}>
                    <ul className="text-white">
                        <li>About Online Food</li>
                        <li>Read Our Blog</li>
                        <li>Sign Up to Deliver</li>
                        <li>Add your restaurant</li>

                    </ul>
                </Col>
                <Col md={3}>
                    <ul className="text-white">
                        <li>Get Helps</li>
                        <li>Read FAQS</li>
                        <li>View All cities</li>
                        <li>Restaurants near me</li>

                    </ul>
                </Col>
            </Row>
            <Row className="py-5">
                <Col md={6} className="text-white">
                    <small>Copyright @shuvro-baset</small>
                </Col>
                <Col md={6} className="text-white d-flex justify-content-evenly">
                    <h6>Privacy Policy</h6>
                    <h6>Terms of Use</h6>
                    <h6>Price</h6>

                </Col>
            </Row>
        </Container>
    );
};

export default Footer;