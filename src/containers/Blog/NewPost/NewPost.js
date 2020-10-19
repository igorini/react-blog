import React, {useState} from 'react';
import * as Styled from './styled';
import axios from "axios";

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Max');

  const postDataHandler = () => {
    const post = {
      title: title,
      body: content,
      author: author
    };
    axios.post('/posts', post)
      .then(response => console.log(response));
  }

  return (
    <Styled.NewPost>
      <h1>Add a Post</h1>
      <label>Title</label>
      <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
      <label>Content</label>
      <textarea rows="4" value={content} onChange={event => setContent(event.target.value)} />
      <label>Author</label>
      <select value={author} onChange={event => setAuthor(event.target.value)}>
        <option value="Max">Max</option>
        <option value="Manu">Manu</option>
      </select>
      <button onClick={postDataHandler}>Add Post</button>
    </Styled.NewPost>
  );
};

export default NewPost;