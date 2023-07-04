import React, { useEffect, useState } from 'react'
import { BiLogoGoogle } from 'react-icons/bi'
import { registerUser } from '../../Actions/User'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password));
  };

  useEffect(() => {
    if (error) {
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error]);

  return (
    <>
      <div className="gradient"></div>
      <div className="main-form">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Username:
              <i id="mail-check" className="fa-check fa-solid hide"></i>
              <i id="mail-fail" className="fa-regular fa-circle-xmark hide"></i>
            </label>
            <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" id="username" name="username" required />
            <br />
            <label htmlFor="email">
              Email:
              <i id="mail-check" className="fa-check fa-solid hide"></i>
              <i id="mail-fail" className="fa-regular fa-circle-xmark hide"></i>
            </label>
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" id="mailId" name="mailId" required />
            <br />
            <label htmlFor="password">
              Password:
              <i id="pass-check" className="fa-check fa-solid hide"></i>
              <i id="pass-fail" className="fa-regular fa-circle-xmark hide"></i>
            </label>
            <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" id="password" name="password" required />
            <p id="passInst" className="hide">
              <i className="fa-solid fa-circle-info"></i>
              4 to 24 characters.<br />
              Must Contain at least one lower , one upper letter ,<br />
              one number and one special character.
            </p>
            <br />
            <br />
            <button className="cta">Register</button>
          </form>
          <div className="divider"><span>OR</span></div>
          <div className="other-logins">
            <p style={{textAlign:'center'}}>Already have an Account? <Link to='/'>Login</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
