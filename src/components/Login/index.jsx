// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'yuvarakesh@gmail.com' && password === 'Yuva@123') {
            navigate('/'); 
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <img src="https://res.cloudinary.com/dfh97e9e4/image/upload/v1726835653/unnamed_fnzr8m.png" alt="Logo" className="logo" />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Sign In</button>
                </form>
                <p className="signup-prompt">
                    Don't have an account? <a href="#">Sign up</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
