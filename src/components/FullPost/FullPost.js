import React, {useEffect, useState} from 'react';
import * as Styled from './styled';
import axios from "axios";

const FullPost = props => {
  const [loadedPost, setLoadedPost] = useState(null);

  useEffect(() => {
    if (props.id && (!loadedPost || (loadedPost && loadedPost.id !== props.id))) {
      axios.get('/posts/' + props.id)
        .then(response => setLoadedPost(response.data));
    }
  });

  const deletePostHandler = () => axios.delete('/posts/' + props.id)
    .then(response => console.log(response));

  let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
  if (props.id) {
    post = <p style={{textAlign: 'center'}}>Loading!</p>;
  }
  if (loadedPost) {
    post = (
      <Styled.FullPost>
        <h1>{loadedPost.title}</h1>
        <p>{loadedPost.body}</p>
        <Styled.Edit>
          <Styled.Delete onClick={deletePostHandler}>Delete</Styled.Delete>
        </Styled.Edit>
      </Styled.FullPost>
    );
  }

  return post;
};

export default FullPost;