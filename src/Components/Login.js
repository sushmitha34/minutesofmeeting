import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Headers from "./Header";
import { Checkbox } from "semantic-ui-react";
import Footer from "./Footer";

export default function Login(props) {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if email and password are not empty
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in both email and password fields.");
    } else {
      // If both fields are filled, navigate to the disclaimer page
      history.push("/disclaimer");
    }
  };

  return (
    <div className>
      <Headers />
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="form-group mt-5">
              <label>Email address or Username</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email or username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Login{" "}
              </button>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-1">
              <Checkbox label="Remember Me"></Checkbox>
              <p className="forgot-password text-right">
                <a href="/forgot">Forgot password?</a>
              </p>
            </div>
          </div>
        </form>

      </div>
      <Footer/>
    </div>
  );
}
