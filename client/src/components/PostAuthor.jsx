import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../images/avatar1.jpg';

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdfsdsdf`} className="post__author">
      <div className="post__author-avatar">
        <img src={Avatar} alt="Author-avatar" />
      </div>
      <div className="post__author-details">
        <p>By: Author Name</p>
        <small>Display Time</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
