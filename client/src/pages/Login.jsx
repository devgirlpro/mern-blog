import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [error, setErrot] = useState('');

  const changeInputhandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login__form">
          {error && <p className="form__error-message">{error}</p>}
          <input
            type="text"
            placeholder="email"
            name="email"
            value={userData.email}
            onChange={changeInputhandler}
            autoFocus
          />

          <input
            type="password"
            placeholder="password"
            name="password"
            value={userData.password}
            onChange={changeInputhandler}
          />

          <button type="submit" className="btn primary">
            Login
          </button>
        </form>
        <small>
         Don't have an account ? <Link to="/register">sign up</Link>
        </small>
      </div>
    </section>
  );
};

export default Login;
