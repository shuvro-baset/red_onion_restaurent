import React from 'react';
import { Col, Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import logo from '../../Image/logo2.png'
import './Registration.css'
const Registration = () => {
    const { handleEmailChange, handlePasswordChange, error, message } = useAuth()
    return (
        <Container fluid className='m-0 p-0'>
        <div className="d-flex justify-content-center align-items-center reg-bg">
            <Col md={4} className='my-5 '>
                <div><img src={logo} className="img-fluid my-5 p-3" alt="" /></div>
                <form>
                    <div className="mb-3">
                        <label  className="form-label">Name</label>
                        <input  type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control"  aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input onBlur={handlePasswordChange} type="password" className="form-control"  />
                    </div>
                    {
                        error && 
                        <div className="row mb-3 text-danger">{error}</div>
                    }
                    {   message &&
                        <div className="row mb-3 text-success">{message}</div>
                    }
                    <div className='d-flex justify-content-evenly my-2'>
                        <button type="submit" className="btn btn-primary">Submit</button>

                    </div>
                    
                </form>
            </Col>
        
    </div>
    </Container>
    );
};

export default Registration;