import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const changeInputhandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    setError('');
    // console.log(`${process.env.REACT_APP_BASE_URL}/users/register`)
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/register`,
        userData
      );
      const newUser = await response.data;
      console.log('newUser ==>', newUser);
      if (!newUser) {
        setError("Couldn't register user. Please try again.");
      }
      navigate('/');
    } catch (error) {
      console.log(error.message)
      setError(error.message);
    }
  };

  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register__form" onSubmit={registerUser}>
          {error && <p className="form__error-message">{error}</p>}

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
          <button type="submit" className="btn primary">
            Register
          </button>
        </form>
        <small>
          Already have an account ? <Link to="/login">sign in</Link>
        </small>
      </div>
    </section>
  );
};

export default Register;
