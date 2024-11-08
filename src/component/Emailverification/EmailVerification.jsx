import React, { useState } from 'react';
import './EmailVerification.css';

function EmailVerification() {
  const [otp, setOtp] = useState('');
  const [resendTimer, setResendTimer] = useState(30);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      console.log('OTP submitted:', otp);
    } else {
      alert('Please enter a 6-digit code.');
    }
  };

  const handleResendCode = () => {
    if (resendTimer === 0) {
      console.log('Requesting new code...');
      setResendTimer(30);
      // Logic to resend code would go here
    }
  };

  // Decrease resend timer every second if it's greater than 0
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (resendTimer > 0) {
        setResendTimer(resendTimer - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [resendTimer]);

  return (
    <div className="container">
      <div className="form-container">
        <h2>Verify Email Address</h2>
        <p>A 6 Digit Verification Code Has Been Sent To Your Email Address. Enter The 6 Digit Code Below</p>
        <form onSubmit={handleSubmit}>
          <div className="otp">
            <label htmlFor="otp">Enter 6 Digit Code</label>
            <input
              type="text"
              name="otp"
              placeholder="OTP"
              value={otp}
              onChange={handleChange}
              className="input"
              maxLength="6"
              required
            />
          </div>
          <button type="submit" className="verify-button">Verify</button>
        </form>
        <p className="resend-text">
          Didn’t receive the verification code?
          {resendTimer > 0
            ? ` Request a new code in ${resendTimer} seconds`
            : <button onClick={handleResendCode} className="resend-button">Request a new code</button>
          }
        </p>
      </div>
      <div className="image-container">
        <img src="https://www.deere.co.in/assets/images/region-1/products/tractors/john-deere-e-series-cab.jpg" alt="Tractor" className="image" />
      </div>
    </div>
  );
}

export default EmailVerification;