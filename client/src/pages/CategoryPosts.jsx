import React, { useState }  from 'react';
import DUMMY_POSTS from '../data';
import PostItem from '../components/PostItem';

const CategoryPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section>
      <h2> Category Posts page</h2>
    {posts.length > 0 ? <div className='container posts__container' > 
    {posts.map((post) => {
     return <PostItem key={post.id} {...post}/>;
   })}
    </div> : <h2 className='center' >No posts found</h2> }
 
 </section>
  )
}

export default CategoryPosts;