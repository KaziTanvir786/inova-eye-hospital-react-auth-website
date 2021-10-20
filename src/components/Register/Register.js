import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const { auth, signInUsingGoogle, createUserWithEmailAndPassword } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <form onSubmit={handleRegistration} className="register-form p-4">
            <h2 className="my-4 text-success">Create an account</h2>
            <div>
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <input onBlur={handleEmailChange} type="email" placeholder="Email" className="form-control" id="inputEmail" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <input onBlur={handlePasswordChange} type="password" placeholder="Password" className="form-control" id="inputPassword" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <div className="form-check">
                            <div className="me-3">
                                <Link to="/login">
                                    Already a user?
                                </Link>
                            </div>
                            <div>
                                {
                                    <h4 className="text-danger">{error}</h4>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Register</button> <br /> or, <br />
                <button onClick={signInUsingGoogle} className="btn btn-primary"><span className="me-2"><i class="fab fa-google"></i></span>Google Sign In</button>
            </div>
        </form>
    );
};

export default Register;