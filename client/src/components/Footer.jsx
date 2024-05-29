import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li>
          <Link to="/posts/categories/html">HTML</Link>
        </li>

        <li>
          <Link to="/posts/categories/css">CSS</Link>
        </li>

        <li>
          <Link to="/posts/categories/javascript">JavaScript</Link>
        </li>

        <li>
          <Link to="/posts/categories/react">Reactjs</Link>
        </li>

        <li>
          <Link to="/posts/categories/node">Nodejs</Link>
        </li>

        <li>
          <Link to="/posts/categories/express">Expressjs</Link>
        </li>

        <li>
          <Link to="/posts/categories/database">DataBase</Link>
        </li>

        <li>
          <Link to="/posts/categories/next">Nextjs</Link>
        </li>
      </ul>

      <div>
        <small className="footer__copyright">
          All Rights Reserved &cpy; Copyright, LEARNCODE.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
