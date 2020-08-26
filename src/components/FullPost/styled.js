import styled from "styled-components";

export const FullPost = styled.div`
  width: 80%;
  margin: 20px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;
`;

export const Edit = styled.div`
  & label {
    display: block;
    color: grey;
  }
  
  & button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    color: #fa923f;
  }
  
  & button:hover, button:active {
    color: #521751;
  }
`;

export const Delete = styled.button`
  color: red;
  
  & button:hover, button:active {
    color: darkred;
  }
`;
