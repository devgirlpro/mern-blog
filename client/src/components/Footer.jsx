import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <ul className='footer__categories'>
            <li to="/posts/cotegories/html">
                <Link>HTML</Link>
            </li>

            <li to="/posts/cotegories/css">
                <Link>CSS</Link>
            </li>

            <li to="/posts/cotegories/js">
                <Link>JavaScript</Link>
            </li>

            <li to="/posts/cotegories/react">
                <Link>Reactjs</Link>
            </li>

            <li to="/posts/cotegories/node">
                <Link>Nodejs</Link>
            </li>

            <li to="/posts/cotegories/express">
                <Link>Expressjs</Link>
            </li>

            <li to="/posts/cotegories/database">
                <Link>DataBase</Link>
            </li>

            <li to="/posts/cotegories/next">
                <Link>Nextjs</Link>
            </li>
        </ul>

        <div>
            <small className='footer__copyright'>All Rights Reserved &cpy; Copyright, LEARNCODE Tutorials.</small>
        </div>
    </footer>
  )
}

export default Footer