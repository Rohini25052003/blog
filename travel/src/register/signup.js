import React, { useState } from 'react';
// import './signup.css';

export const AuthPage = () => {
    const [isRegistering, setIsRegistering] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [aadharNumber, setAadharNumber] = useState('');

    const validateForm = () => {
        // Perform validation checks
        if (username.length < 6 || !/^[A-Za-z]+$/.test(username)) {
            alert("Username must be at least 6 characters long and contain only letters.");
            return false;
        }

        if (password.length < 8 || !/(?=.*[!@#$%^&(),.?":{}|<>])(?=.*[0-9])(?=.*[A-Z])/.test(password)) {
            alert("Password must be at least 8 characters long and contain at least 1 special character, 1 number, and 1 uppercase letter.");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }

        if (!/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (!/^[0-9]{10}$/.test(mobileNumber)) {
            alert("Please enter a valid 10-digit mobile number.");
            return false;
        }

        if (!/^[0-9]{12}$/.test(aadharNumber)) {
            alert("Please enter a valid 12-digit Aadhar number.");
            return false;
        }

        // All conditions satisfied
        return true;
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (validateForm()) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('Registration successful! You can now login.');
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        
        if (username === storedUsername && password === storedPassword) {
            alert('Login successful!');
            // Redirect to authenticated page
            window.location.href = 'admin.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    };

    const handleSocialIconClick = () => {
        setIsRegistering(false); // Show login form
    };

    return (
        <div className="hero">
            <div className="form-box">
                <div className="button-box">
                    <div 
                        className="btn" 
                        style={{ transform: isRegistering ? 'translateX(100%)' : 'translateX(0)' }}
                    ></div>
                    <button type="button" className="toggle-btn" onClick={() => setIsRegistering(false)}>Log In</button>
                    <button type="button" className="toggle-btn" onClick={() => setIsRegistering(true)}>Register</button>
                </div>
                <div className="social-icons">
                    <img src="img/fb.jpg" alt="Facebook" onClick={handleSocialIconClick} />
                    <img src="img/tw.jpg" alt="Twitter" onClick={handleSocialIconClick} />
                    <img src="img/gp.jpg" alt="Google Plus" onClick={handleSocialIconClick} />
                </div>
                {isRegistering ? (
                    <form id="register" className="input-group" onSubmit={handleRegister}>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="User Id"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            pattern="[A-Za-z]{6,}"
                            title="Username must be at least 6 characters long and contain only letters."
                            required
                        />
                        <input
                            type="email"
                            className="input-field"
                            placeholder="Email Id"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            title="Please enter a valid email address."
                            required
                        />
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            title="Password must be at least 8 characters long and contain at least 1 special character, 1 number, and 1 uppercase letter."
                            required
                        />
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            title="Confirm Password must match the Password"
                            required
                        />
                        <input
                            type="checkbox"
                            className="chech-box"
                            required
                        />
                        <span>I agree to the terms & conditions</span>
                        <button type="submit" className="submit-btn">Register</button>
                    </form>
                    
                ) : (
                    
                    <form id="login" className="input-group" onSubmit={handleLogin}>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="User Id"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type="checkbox"
                            className="chech-box"
                        />
                        <span>Remember Password</span>
                        <button type="submit" className="submit-btn">Log In</button>
                    </form>
                )}
            </div>
        </div>
    );
};
