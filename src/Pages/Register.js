import React, {useState, useContext} from 'react';
import { Link } from "react-router-dom";
import { AuthForm } from "./Login";
import { axiosHandler, errorHandler } from "../helper";
import { REGISTER_URL } from "../urls";

function Register() {
  const [registerData, setregisterData ] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const submit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      const result = await axiosHandler({
          method: "post",
          url: REGISTER_URL,
          data: registerData,
      }).catch((e) => setError(errorHandler(e)));
      setLoading(false);
      if(result){

      }

  };
  const onChange = (e) => {
      setregisterData({
          ...registerData,
          [e.target.name]: e.target.value,
          'email':'dineshnariyani20@gmail.com'
        });
  };
    return (
        <div className="loginContainer">
          <div className="inner">
            <div className="logo">D's Chat</div>
            <div className="title">Sign up</div>
            <AuthForm register data={registerData} onSubmit={submit} setError={setError}  onChange={onChange} error={error} showPassword={showPassword} loading={loading} setShowPassword={setShowPassword} />
            <div className="switchOption">
              Already got an account? <Link to="/login">Sign in</Link>
            </div>
          </div>
        </div>
      );
}

export default Register;
