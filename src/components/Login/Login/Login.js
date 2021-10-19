import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { auth, setIsLoading, signInUsingGoogle, signInWithEmailAndPassword } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleEmailPasswordLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <form onSubmit={handleEmailPasswordLogin} className="login-form p-4 mb-5">
            <h2 style={{ color: "#087979" }} className="my-4">Please Login</h2>
            <div>
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <input onBlur={handleEmailChange} type="email" placeholder="Your Email" className="form-control" id="inputEmail" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <input onBlur={handlePasswordChange} type="password" placeholder="Your Password" className="form-control" id="inputPassword" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <div className="form-check">
                            <div className="me-3">
                                <Link to="/register">
                                    Create an account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" style={{ backgroundColor: "#087979" }} className="btn text-white">Sign in</button> <br /> or, <br />
                <button onClick={handleGoogleLogIn} className="btn btn-primary"> <span className="me-2"><i class="fab fa-google"></i></span> Google Sign In</button>
            </div>
        </form>
    );
};

export default Login;