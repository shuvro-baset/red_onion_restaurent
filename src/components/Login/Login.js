import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
            <div className="d-flex justify-content-center align-items-center">
            <div className='col-md-5 mt-5'>
                <h2>Login system</h2>
                <form>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input  type="email" className="form-control"  aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input type="password" className="form-control"  />
                    </div>
                    
                    <button  type="submit" className="btn btn-primary">Login</button>
                    <Link to="/registration" className="btn btn-primary">Register</Link>
                    <button  className="btn btn-primary">Reset Password</button>
                    <div className="mb-3">
                        <button className="btn btn-danger">sign-in with Google</button>
                        <button className="btn btn-warning">sign-in with Github</button>
                    </div>
                </form>
            </div>
            
        </div>
        </Container>
    );
};

export default Login;