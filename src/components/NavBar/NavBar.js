import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo2 from '../../Image/logo2.png'
import useAuth from '../../hooks/useAuth'
import './NavBar.css'
const NavBar = () => {
    const {user, logout} = useAuth();
    return (
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand><img src={logo2} className="logo img-fluid" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <NavLink className="menu-item" to="/home">Home</NavLink>
                    <NavLink className="menu-item" to="/about">About</NavLink>
                    <NavLink className="menu-item" to="/services">Service</NavLink>
                </Nav>

                <Nav className="mr-auto">
                    <NavLink  className="menu-item" to="/home"><i className="fas fa-shopping-cart"></i></NavLink>
                    { !user.email && 
                        <NavLink className="menu-item" to="/login">Login</NavLink>
                    }
                    { user.email && 
                        <NavLink className="menu-item"  onClick={logout} to="/home" >LogOut</NavLink>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;