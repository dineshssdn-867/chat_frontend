import React, {useState, useContext} from 'react';
import { Link } from "react-router-dom";
import Loader from '../Components/loader';
import { axiosHandler, errorHandler } from "../helper";
import { LOGIN_URL } from '../urls';
import {tokenName} from './authcontroller';

export const loginRequest = async (data, setError, props) => {
    const result = await axiosHandler({
        method: 'post',
        data: data,
        url: LOGIN_URL,
    }).catch((e) => setError(errorHandler(e)));
    if(result){
        localStorage.setItem(tokenName, JSON.stringify(result.data));
        props.history.push("/");
    }
}

export const Login = (props) => {
    const [loginData, setLoginData ] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        await loginRequest(loginData, setError, props);
        setLoading(false);
    };

    const onChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
          });
    };

    return (    
        <div className="loginContainer">
            <div className="inner">
            <div className="logo">D's Chat</div>
            <div className="title">Sign In</div>
            
            <AuthForm login data={loginData} onSubmit={submit} setError={setError}  onChange={onChange} error={error} showPassword={showPassword} loading={loading} setShowPassword={setShowPassword}/>
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
    <>   
    {props.error && (
        <div className="errorHolder">
          <div dangerouslySetInnerHTML={{ __html: props.error }} />
          <img src="https://raw.githubusercontent.com/adefemi/chatApp-frontend/master/src/assets/close-white.png" onClick={() => props.setError(null)} />
        </div>
    )}
    <form onSubmit={props.onSubmit}>
            <input value={props.data.username} onChange={props.onChange} name="username" className="input-field" placeholder="Username" autoComplete="off" required/>
            {!props.login && (
            <div className="input-container">
                <input
                className="input-field"
                placeholder="Email Address"
                value={props.data.email}
                name="email"
                onChange={props.onChange}
                required
                />
            </div>
            )}
            <div className="input-container">
                <input value={props.data.password} onChange={props.onChange} name="password" className="input-field" placeholder="Password" type={!props.showPassword ? "password" : "text"} autoComplete="off" required/>
                <img
                    src={!props.showPassword ? "https://raw.githubusercontent.com/adefemi/chatApp-frontend/master/src/assets/eyeopen.png" : "https://raw.githubusercontent.com/adefemi/chatApp-frontend/master/src/assets/eyeclose.png"}
                    onClick={() => props.setShowPassword(!props.showPassword)}
                />
            </div>
            {props.login && 
             <div className="flex justify-end">
                <Link to="/">Forgot Password</Link>
             </div>
             }
            <button type="submit" disabled={props.loading}>
                {props.loading ? (<center><Loader /></center>) : ( props.login ? "Login" : "Register") }
            </button>
    </form>
    </>
    );
}