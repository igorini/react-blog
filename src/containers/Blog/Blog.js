import React from 'react';
import * as Styled from './styled';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

const Blog = () => (
  <div>
    <Styled.Posts>
      <Post/>
      <Post/>
      <Post/>
    </Styled.Posts>
    <section>
      <FullPost/>
    </section>
    <section>
      <NewPost/>
    </section>
  </div>
);

export default Blog;