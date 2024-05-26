import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

const PostItem = ({ thumbnail, category, title, desc, id } ) => {
  return (
    <article className="post">
      <div className="post__thumbnail">
        <img src={thumbnail} alt={title} />
        <h3>{category}</h3>
      </div>

      <div className="post__content">
        <Link to={`/posts/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{desc}</p>
        <div className='post__footer' >
                <PostAuthor />
                <Link to={`/posts/categories/${category}`} className="btn category" >{category}</Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
