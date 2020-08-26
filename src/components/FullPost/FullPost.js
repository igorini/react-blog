import React from 'react';
import * as Styled from './styled';

const FullPost = () => {
  let post = <p>Please select a Post!</p>;
  post = (
    <Styled.FullPost>
      <h1>Title</h1>
      <p>Content</p>
      <Styled.Edit>
        <Styled.Delete>Delete</Styled.Delete>
      </Styled.Edit>
    </Styled.FullPost>
  );
  return post;
};

export default FullPost;