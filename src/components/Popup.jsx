import React, { useState } from "react";
import axios from "axios";

const Popup = ({ PopClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        setLoading(true);
        setMessage('');
        try {
            const response = await axios.post('http://localhost:5148/api/user/login', {
                email,
                password,
            });

            // Handle successful login
            const token = response.data.token;
            localStorage.setItem('token', token);
            console.log('Login successful:', response.data);

            setMessage('Login successful!');
            setLoading(false);
            PopClose();
        } catch (error) {
            // Handle login error
            console.error('Login failed:', error.response ? error.response.data : error.message);
            setMessage('Login failed. Please check your credentials.');
            setLoading(false);
        }
    };

    return (
        <>
            <div className="prop-main">
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="pop-card gap-4 d-flex flex-column align-items-center">
                        <button className="btn">Log in as Influencer</button>
                        <button className="btn-2">Sign up as User</button>
                        <button className="btn-2">Sign up as Influencer</button>
                        <button onClick={handleLogin} className="btn" disabled={loading}>
                            {loading ? 'Logging in...' : 'Log in as User'}
                        </button>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control mt-2"
                            style={{ width: '100%', maxWidth: '600px', marginBottom: '10px' }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control mt-2"
                            style={{ width: '100%', maxWidth: '600px', marginBottom: '10px' }}
                        />
                        <div>{message && <p>{message}</p>}</div>
                        <button onClick={PopClose} className="close-button">X</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popup;
