import React, { useState } from 'react';
import DUMMY_POSTS from '../data';
import PostItem from '../components/PostItem';

const AuthorPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className='posts'>
      <h2>This Author posts</h2>
    {posts.length > 0 ? <div className='container posts__container' > 
    {posts.map((post) => {
     return <PostItem key={post.id} {...post}/>;
   })}
    </div> : <h2 className='center' >No posts found</h2> }
 
 </section>
  )
}

export default AuthorPosts