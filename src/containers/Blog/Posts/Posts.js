import React, {useEffect, useState} from 'react';
import * as Styled from './styled';
import {Link} from "react-router-dom";
import Post from "../../../components/Post/Post";
import axios from "../../../axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [error, setError] = useState(false);

  const postSelectedHandler = id => setSelectedPostId(id);

  useEffect(() => {
    axios.get('/posts')
      .then(response => setPosts(response.data.slice(0, 4)
        .map(post => ({
          ...post,
          author: 'Igor'
        }))))
      .catch(() => setError(true));
  }, []);

  const postsDivs = error ? <p style={{textAlign: 'center'}}>Something went wrong</p> :
    posts.map(post => (
      <Link to={'/' + post.id} key={post.id}>
        <Post
          title={post.title}
          author={post.author}
          clicked={() => postSelectedHandler(post.id)}/>
      </Link>
    ));

  return (
    <Styled.Posts>
      {postsDivs}
    </Styled.Posts>
  );
};

export default Posts;