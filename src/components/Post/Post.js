import React from 'react';
import * as Styled from './styled';

const Post = props => (
  <Styled.Post>
    <h1>{props.title}</h1>
    <div>
      <Styled.Author>{props.author}</Styled.Author>
    </div>
  </Styled.Post>
);

export default Post;