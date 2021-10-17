import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { handleEmailChange, handlePasswordChange, error, message, processLogin, handleResetPassword, handleGoogleSignIn, GithubSignInHandler} = useAuth()

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    
    const googleLogin = (e) => {
        e.preventDefault();
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    
    return (
        <Container>
            <div className="d-flex justify-content-center align-items-center">
            <div className='col-md-5 mt-5'>
                <h2>Login system</h2>
                <form>
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
                        <button onClick={processLogin} type="submit" className="btn btn-primary">Login</button>
                        <Link to="/registration" className="btn btn-primary">Register</Link>
                        <button onClick={handleResetPassword}  className="btn btn-primary">Reset Password</button>

                    </div>
                    <div className="d-flex justify-content-evenly my-2">
                        <button onClick={googleLogin} className="btn btn-danger">sign-in with Google</button>
                        <button onClick={GithubSignInHandler} className="btn btn-warning">sign-in with Github</button>
                    </div>
                </form>
            </div>
            
        </div>
        </Container>
    );
};

export default Login;