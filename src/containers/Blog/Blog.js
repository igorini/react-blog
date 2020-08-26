import React, {useEffect, useState} from 'react';
import * as Styled from './styled';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data.slice(0, 4)
        .map(post => ({
          ...post,
          author: 'Igor'
        }))));
  }, []);

  const postSelectedHandler = id => setSelectedPostId(id);

  const postsDivs = posts.map(post => <Post
    key={post.id}
    title={post.title}
    author={post.author}
    clicked={() => postSelectedHandler(post.id)}/>)

  return (
    <div>
      <Styled.Posts>
        {postsDivs}
      </Styled.Posts>
      <section>
        <FullPost id={selectedPostId}/>
      </section>
      <section>
        <NewPost/>
      </section>
    </div>
  );
};

export default Blog;