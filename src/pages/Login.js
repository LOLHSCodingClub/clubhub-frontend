import React,{useState} from "react";
import './Login.css';

const Login = (props) => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form">
        <label>Email</label>
        <input
          placeholder="Enter email"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Login</button>
      </form>
      <button className="link-btn ">
        If you don't have an account Please Register
      </button>
      <button className="link-btn ">Forgot Password</button>
    </div>
  );

}

export default Login;