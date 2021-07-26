import React from 'react';
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="loginContainer">
            <div className="inner">
            <div className="logo">D's Chat</div>
            <div className="title">Sign In</div>
            <AuthForm login/>
                <div className="grid grid-2 grid-gap-2">
                    <div className="socialButton">
                        <img src="https://raw.githubusercontent.com/adefemi/chatApp-frontend/master/src/assets/twitter.png" />
                    </div>
                    <div className="socialButton">
                        <img src="https://raw.githubusercontent.com/adefemi/chatApp-frontend/master/src/assets/google.png" />
                    </div>
                </div>
                <div className="switchOption">
                    Don’t have an accout yet? <Link to="/register">Sign up</Link>
                </div>
            </div> 
        </div>
    );
};

export const AuthForm = (props) => {
    return ( 
    <form>
            <input className="input-field" placeholder="Username" />
            <div className="input-container">
                <input className="input-field" placeholder="Password" type="password" autocomplete="new-password"/>
                <img src="https://raw.githubusercontent.com/adefemi/chatApp-frontend/master/src/assets/eyeopen.png" />
                <img src="https://raw.githubusercontent.com/adefemi/chatApp-frontend/master/src/assets/eyeopen.png" /> 
            </div>
            {props.login && 
             <div className="flex justify-end">
                <Link to="/">Forgot Password</Link>
             </div>
             }
            <button type="submit">Login</button>
    </form>
    );
}