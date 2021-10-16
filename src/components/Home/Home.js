import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css'
const Home = () => {
    return (
        <Container fluid>
            <div className="banner">
                <div className="d-flex justify-content-center align-items-center banner-text">
                    <h1>Best Food Waiting For Your Belly</h1>
                </div>
            </div>
        </Container>
    );
};

export default Home;