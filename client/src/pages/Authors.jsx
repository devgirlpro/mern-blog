import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Avatar1 from '../images/avatar1.jpg';
import Avatar2 from '../images/avatar2.jpg';
import Avatar3 from '../images/avatar3.jpg';
import Avatar5 from '../images/avatar5.jpg';
import Avatar6 from '../images/avatar6.jpg';

const authorsData = [
  {
    id: 1,
    avatar: Avatar1,
    name: 'Ernest Achiever',
    post: 3,
  },
  {
    id: 2,
    avatar: Avatar2,
    name: 'Dramani Mahama',
    post: 5,
  },
  {
    id: 3,
    avatar: Avatar3,
    name: 'Jane Doe',
    post: 0,
  },
  {
    id: 4,
    avatar: Avatar6,
    name: 'Ashly Bonne',
    post: 2,
  },
  {
    id: 5,
    avatar: Avatar5,
    name: 'Annia Laris',
    post: 1,
  },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);

  return (
    <section className="authors">
      <h2>Authors page</h2>
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map((author) => {
            return (
              <Link key={author.id} to={`/posts/users/${author.id}`} className='author'>
                <div className="author__avatar">
                  <img src={author.avatar} alt={`image of ${author.name}`} />
                </div>
                <div className="author__info">
                  <h4>{author.name}</h4>
                  <small>{author.post}</small>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className='center' >No user/authors found.</h2>
      )}
    </section>
  );
};

export default Authors;
