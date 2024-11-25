import React, { useState } from "react";
import "./PasswordResetForm.css";

function PasswordResetForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Start the loading state
    setIsSubmitting(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch(
        "https://your-backend-api.com/api/password-reset",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessage(
          data.message || "Password reset link has been sent to your email."
        );
      } else {
        const errorData = await response.json();
        setError(
          errorData.error ||
            "Failed to send password reset link. Please try again."
        );
      }
    } catch (error) {
      setError(
        "An error occurred. Please check your network connection and try again."
      );
    } finally {
      setIsSubmitting(false); // Stop loading state
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Request Password Reset</h2>
        <p>
          Enter Your Email Address In The Form Below To Request A Password Reset
          Link
        </p>
        <form onSubmit={handleSubmit}>
          <div className="email">
            <label htmlFor="email">Enter Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <button
            type="submit"
            className="reset-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Request Password Reset"}
          </button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
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

export default PasswordResetForm;
