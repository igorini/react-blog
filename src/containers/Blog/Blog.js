import React, {useEffect, useState} from 'react';
import * as Styled from './styled';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import axios from "../../axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('/posts')
      .then(response => setPosts(response.data.slice(0, 4)
        .map(post => ({
          ...post,
          author: 'Igor'
        }))))
      .catch(() => setError(true));
  }, []);

  const postSelectedHandler = id => setSelectedPostId(id);

  const postsDivs = error ? <p style={{textAlign: 'center'}}>Something went wrong</p> :
    posts.map(post => <Post
    key={post.id}
    title={post.title}
    author={post.author}
    clicked={() => postSelectedHandler(post.id)}/>)

  return (
    <Styled.Blog>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/new-post">New Post</a></li>
          </ul>
        </nav>
      </header>
      <Styled.Posts>
        {postsDivs}
      </Styled.Posts>
      <section>
        <FullPost id={selectedPostId}/>
      </section>
      <section>
        <NewPost/>
      </section>
    </Styled.Blog>
  );
};

export default Blog;