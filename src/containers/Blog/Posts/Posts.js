import React, {useEffect, useRef, useState} from 'react';
import * as Styled from './styled';
import Post from "../../../components/Post/Post";
import axios from "../../../axios";
import FullPost from "../FullPost/FullPost";
import {Route} from "react-router-dom";

const Posts = props => {
  const mounted = useRef(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  const postSelectedHandler = id => props.history.push('/posts/' + id);

  useEffect(() => {
    if (!mounted.current) {
      // componentDidMount
      mounted.current = true;
      loadData();
    } else {
      // componentDidUpdate
      loadData();
    }
  });

  const loadData = () => axios.get('/posts')
    .then(response => setPosts(response.data.slice(0, 4)
      .map(post => ({
        ...post,
        author: 'Igor'
      }))))
    .catch(() => setError(true));

  const postsDivs = error ? <p style={{textAlign: 'center'}}>Something went wrong</p> :
    posts.map(post =>
      <Post
        title={post.title}
        author={post.author}
        clicked={() => postSelectedHandler(post.id)}/>
    );

  return (
    <>
      <Styled.Posts>
        {postsDivs}
      </Styled.Posts>
      <Route path={props.match.url + '/:id'} exact component={FullPost}/>
    </>
  );
};

export default Posts;