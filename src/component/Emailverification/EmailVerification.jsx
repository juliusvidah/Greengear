import React, { useState, useEffect } from "react";
import "./EmailVerification.css";

function EmailVerification() {
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp.length === 6) {
      try {
        const response = await fetch(
          "https://your-backend-api.com/api/verify-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ otp }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setMessage(data.message || "Email verified successfully!");
          setError("");
        } else {
          const errorData = await response.json();
          setError(errorData.error || "Invalid OTP. Please try again.");
          setMessage("");
        }
      } catch (error) {
        setError(
          "An error occurred. Please check your network connection and try again."
        );
        setMessage("");
      }
    } else {
      alert("Please enter a 6-digit code.");
    }
  };

  const handleResendCode = async () => {
    if (resendTimer === 0) {
      try {
        const response = await fetch(
          "https://your-backend-api.com/api/resend-otp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setMessage(data.message || "A new OTP has been sent to your email.");
          setError("");
          setResendTimer(30);
        } else {
          const errorData = await response.json();
          setError(
            errorData.error || "Failed to resend OTP. Please try again."
          );
          setMessage("");
        }
      } catch (error) {
        setError(
          "An error occurred while resending the OTP. Please check your network connection."
        );
        setMessage("");
      }
    }
  };

  // Decrease resend timer every second if it's greater than 0
  useEffect(() => {
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
        <p>
          A 6 Digit Verification Code Has Been Sent To Your Email Address. Enter
          The 6 Digit Code Below
        </p>
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
          <button type="submit" className="verify-button">
            Verify
          </button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <p className="resend-text">
          Didn’t receive the verification code?
          {resendTimer > 0 ? (
            ` Request a new code in ${resendTimer} seconds`
          ) : (
            <button onClick={handleResendCode} className="resend-button">
              Request a new code
            </button>
          )}
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
}

export default EmailVerification;
