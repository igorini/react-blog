import React, {Suspense, useEffect, useState} from 'react';
import * as Styled from './styled';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
//import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
//import asyncComponent from "../../hoc/asyncComponent";

//const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));
const NewPost = React.lazy(() => import('./NewPost/NewPost'));

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
        <Route path="/new-post" render={() => (
          <Suspense fallback={<div>Loading...</div>}>
            <NewPost/>
          </Suspense>
        )}/>
        <Route path="/posts" component={Posts}/>
        <Route render={() => <h1>Not found</h1>}/>
        {/*<Redirect from="/" to="/posts"/>*/}
      </Switch>
    </Styled.Blog>
  );
};

export default Blog;