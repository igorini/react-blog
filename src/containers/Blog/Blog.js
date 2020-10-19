import React, {useEffect, useState} from 'react';
import * as Styled from './styled';
import {Route, NavLink, Switch} from 'react-router-dom';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';

const Blog = () => {
  return (
    <Styled.Blog>
      <header>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/new-post">New Post</NavLink></li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Posts}/>
        <Route path="/new-post" component={NewPost}/>
        <Route path="/:id" exact component={FullPost}/>
      </Switch>
    </Styled.Blog>
  );
};

export default Blog;