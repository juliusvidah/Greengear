import React, { useState } from "react";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwordError, setPasswordError] = useState("");
   const [apiError, setApiError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate password whenever it changes
    if (name === "password") {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      setPasswordError("Password must be at least 8 characters long");
    } else if (!hasUpperCase) {
      setPasswordError("Password must contain at least one uppercase letter");
    } else if (!hasSpecialChar) {
      setPasswordError("Password must contain at least one special character");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password error exists before submitting the form
    if (passwordError) {
      alert("Please fix the password requirements.");
      return;
    }

    setIsSubmitting(true);
    setApiError("");

    try {
      const response = await fetch("https://your-backend-api.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setApiError(errorData.message || "Invalid credentials.");
        setIsSubmitting(false);
        return;
      }

      const data = await response.json();
      alert(`Welcome back, ${data.fullName || "user"}!`);
      setFormData({ email: "", password: "" }); // Reset form
    } catch (error) {
      setApiError("Failed to connect to the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
  };

  const handleAppleLogin = () => {
    console.log("Login with Apple");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="email">
            <label htmlFor="">Enter Email Address</label>
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
          <label htmlFor="">Enter Password</label>
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
          <button
            type="submit"
            className="signup-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
        <button onClick={handleGoogleLogin} className="google-button">
          <img
            className="icon"
            src="https://res.cloudinary.com/degnky4ab/image/upload/v1730983751/Group_3_xnh3ar.svg"
            alt=""
            width={17}
          />
          Login with Google
        </button>
        <button onClick={handleAppleLogin} className="apple-button">
          <img
            className="icon"
            src="https://res.cloudinary.com/degnky4ab/image/upload/v1730983844/ic_baseline-apple_ozet3w.svg"
            alt=""
          />
          Login with Apple
        </button>
        <p className="login-text">
          Don't Have An Account? <a href="#">Sign Up</a>
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

export default SignIn;
