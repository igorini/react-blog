import styled from "styled-components";

export const Posts = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 80%;
  margin: auto;
`;

export const Blog = styled.div`
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
  }
  
  & li {
    display: inline-block;
    margin: 20px;
  }
  
  & a {
    text-decoration: none;
    color: black;
  }
  
  & a:hover, a:active {
    color:#fa923f
  }
`;
