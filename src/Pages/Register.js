import React from 'react'
import { Link } from "react-router-dom";
import { AuthForm } from "./Login";

function Register() {
    return (
        <div className="loginContainer">
          <div className="inner">
            <div className="logo">D's Chat</div>
            <div className="title">Sign up</div>
            <AuthForm />
            <div className="switchOption">
              Already got an account? <Link to="/login">Sign in</Link>
            </div>
          </div>
        </div>
      );
}

export default Register
