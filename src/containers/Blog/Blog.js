import React, {useEffect, useState} from 'react';
import * as Styled from './styled';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';

const Blog = () => {
  return (
    <Styled.Blog>
      <header>
        <nav>
          <ul>
            <li><NavLink to="/posts" exact>Posts</NavLink></li>
            <li><NavLink to="/new-post">New Post</NavLink></li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/new-post" component={NewPost}/>
        <Route path="/posts" component={Posts}/>
        <Route render={() => <h1>Not found</h1>}/>
        {/*<Redirect from="/" to="/posts"/>*/}
      </Switch>
    </Styled.Blog>
  );
};

export default Blog;