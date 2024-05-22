import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className='container nav__container '>
          <Link to="/" className='nav_logo' >
            <img   alt="logo"/>
          </Link>

          <ul className='nav__menu'>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/create">Create Post</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
            <li>
              <Link to="/logout"Logout></Link>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar