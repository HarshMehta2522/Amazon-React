import React, { useState } from "react";
import "./Login.css";
import { Link,useNavigate } from "react-router-dom";
import { auth} from  "../Firebase";
function Login() {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email,password)
      .then(auth=>{
        
        navigate("/")
      })
      .catch(error=>alert(error.message))
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        
        if(auth){
          navigate('/')
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png"
          alt="logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text"
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password"
          />
          <button
            button-type="submit"
            className="login-signin"
            onClick={signin}
          >
            Sign In
          </button>
        </form>
        <p>
          By Signing-in you agree to Amazon's Conditions of use & Sale. Please
          see our Privacy Notice, our Cookies Notice and out interest-Based Ads
        </p>
        <button onClick={register} className="login-signup">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
