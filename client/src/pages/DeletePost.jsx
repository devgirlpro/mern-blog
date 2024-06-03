import React, { useEffect, useContext } from 'react';

import { useNavigate  } from 'react-router-dom';
import {UserContext}  from '../context/userContext';

const DeletePost = () => {
  const navigate = useNavigate();

  const {currentUser} = useContext(UserContext);
  const token = currentUser?.token
 
//redirect to login page for any user who isn't loggedin
useEffect(() => {
if(!token) {
  navigate('/login')
}
}, [])
  return (
    <div className='center'>DeletePost</div>
  )
}

export default DeletePost