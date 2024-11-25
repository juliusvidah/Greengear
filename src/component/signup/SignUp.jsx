import React, { useState } from 'react';
import './SignUp.css';function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });  const [passwordError, setPasswordError] = useState('');
  const [apiError, setApiError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });    // Validate password whenever it changes
    if (name === 'password') {
      validatePassword(value);
    }
  };  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);    if (password.length < minLength) {
      setPasswordError('Password must be at least 8 characters long');
    } else if (!hasUpperCase) {
      setPasswordError('Password must contain at least one uppercase letter');
    } else if (!hasSpecialChar) {
      setPasswordError('Password must contain at least one special character');
    } else {
      setPasswordError('');
    }
  };  const handleSubmit = async (e) => {
    e.preventDefault();    // Check if password error exists before submitting the form
    if (passwordError) {
      alert('Please fix the password requirements.');
      return;
    }    setIsSubmitting(true);
    setApiError('');    try {
      const response = await fetch('https://your-backend-api.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });      if (!response.ok) {
        const errorData = await response.json();
        setApiError(errorData.message || 'Something went wrong!');
        setIsSubmitting(false);
        return;
      }      const data = await response.json();
      alert('Signup successful! Welcome, ' + data.fullName);
      setFormData({ fullName: '', email: '', password: '' }); // Reset the form
    } catch (error) {
      setApiError('Failed to connect to the server. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };  const handleGoogleSignup = () => {
    console.log('Sign up with Google');
  };  const handleAppleSignup = () => {
    console.log('Sign up with Apple');
  };  return (
    <div className="container">
      <div className="form-container">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Enter Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="input"
            required
          />
          <div className="email">
            <label htmlFor="email">Enter Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <label htmlFor="password">Choose Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            required
          />
          {passwordError && <p className="error-text">{passwordError}</p>}
          {apiError && <p className="error-text">{apiError}</p>}
          <button type="submit" className="signup-button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Sign Up'}
          </button>
        </form>
        <button onClick={handleGoogleSignup} className="google-button">
          <img
            className="icon"
            src="https://res.cloudinary.com/degnky4ab/image/upload/v1730983751/Group_3_xnh3ar.svg"
            alt=""
            width={17}
          />
          Sign Up with Google
        </button>
        <button onClick={handleAppleSignup} className="apple-button">
          <img
            className="icon"
            src="https://res.cloudinary.com/degnky4ab/image/upload/v1730983844/ic_baseline-apple_ozet3w.svg"
            alt=""
          />
          Sign Up with Apple
        </button>
        <p className="login-text">
          Already Have An Account? <a href="/Login">Login</a>
        </p>
      </div>
      <div className="image-container">
        <img
          src="https://www.deere.co.in/assets/images/region-1/products/tractors/john-deere-e-series-cab.jpg"
          alt="Tractor"
          className="image"
        />
      </div>
    </div>
  );
}export default SignUp;