import React, { useState, useContext, useEffect} from 'react';
import Loader from '../Components/loader';
const tokenName = "tokenName";

const AuthController = (props) => {
    const [checking, setchecking] = useState(true);

    const checkAuthState = () => {
        const token = localStorage.getItem(tokenName);
        if(!token) {
            props.history.push("/login");
            return;
        }
    };

    useEffect(() => {
        checkAuthState();
    }, []);

    return <div className="authContainer">{checking ? <div className="centerAll">
    <Loader />
  </div> : props.children}</div>
}

export default AuthController;