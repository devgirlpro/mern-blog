import React, { useState } from 'react';
import Thumbnail1 from '../images/blog1.jpg';
import Thumbnail2 from '../images/blog2.jpg';
import Thumbnail3 from '../images/blog3.jpg';
import Thumbnail4 from '../images/blog4.jpg';

import PostItem from './PostItem';

const DUMMY_POSTS = [
  {
    id: 1,
    thumbnail: Thumbnail1,
    category: 'html',
    title: 'html tags',
    desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
    authourID: 1,
  },
  {
    id: 2,
    thumbnail: Thumbnail2,
    category: 'css',
    title: 'css flexbox',
    desc: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    authourID: 2,
  },
  {
    id: 3,
    thumbnail: Thumbnail3,
    category: 'javascript',
    title: 'function',
    desc: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    authourID: 3,
  },
  {
    id: 4,
    thumbnail: Thumbnail4,
    category: 'react',
    title: 'react component',
    desc: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    authourID: 1,
  },
  {
    id: 5,
    thumbnail: Thumbnail2,
    category: 'css',
    title: 'css grid',
    desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    authourID: 2,
  },
  {
    id: 6,
    thumbnail: Thumbnail3,
    category: 'javascript',
    title: 'javascript object',
    desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    authourID: 3,
  },
  {
    id: 7,
    thumbnail: Thumbnail4,
    category: 'react',
    title: 'react hooks',
    desc: ' It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    authourID: 4,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className='posts'>
       <div className='container posts__container' > 
       {posts.map((post) => {
        return <PostItem key={post.id} {...post}/>;
      })}
       </div>
    
    </section>
  );
};

export default Posts;
