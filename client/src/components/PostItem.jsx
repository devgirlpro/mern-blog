import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

const PostItem = ({ thumbnail, category, title, desc, id } ) => {
    const shortDescription = desc.length > 145 ? desc.substr(0, 145) + '...' : desc;
    const shortTitle = title.length > 30 ? title.substr(0, 30) + '...' : title;
  return (
    <article className="post">
      <div className="post__thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <Link to={`/posts/categories/${category}`} className="category"><h3>{category}</h3></Link>

      <div className="post__content">
        <Link to={`/posts/${id}`}>
          <h3>{shortTitle}</h3>
        </Link>
        <p>{shortDescription}</p>
        <div className='post__footer' >
                <PostAuthor />
        </div>
      </div>
    </article>
  );
};

export default PostItem;
