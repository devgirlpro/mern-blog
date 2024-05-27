import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const changeInputhandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register__form">
          <p className="form__error-message">This is an error message</p>
          <input
            type="text"
            placeholder="full name"
            name="name"
            value={userData.name}
            onChange={changeInputhandler}
          />

          <input
            type="text"
            placeholder="email"
            name="email"
            value={userData.email}
            onChange={changeInputhandler}
          />

          <input
            type="password"
            placeholder="password"
            name="password"
            value={userData.password}
            onChange={changeInputhandler}
          />

          <input
            type="password"
            placeholder="confirm password"
            name="password2"
            value={userData.password2}
            onChange={changeInputhandler}
          />
          <button type='submit' className='btn primary' >Register</button>
        </form>
        <small>Already have an account ? <Link to="/login" >sign in</Link></small>
      </div>
    </section>
  );
};

export default Register;
