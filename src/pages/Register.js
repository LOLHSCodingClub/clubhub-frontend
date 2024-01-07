import React,{ useState } from "react";
import './Register.css';

const Register = (props)  => {

  return (
    <div>
      <form className="auth-form-container">
        <h2>REGISTER</h2>
        <label>Full name</label>
        <input></input>
        <label>Email</label>
        <input></input>
        <label>Password</label>
        <input></input>
        <button>Submit</button>
      </form>
      <button className="link-btn">
        If you already have an account. Login here
      </button>
    </div>
  ); 

  
}
export default Register;