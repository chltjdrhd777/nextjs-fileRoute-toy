import React from "react";
import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      font-size: 62.5%;
      scroll-behavior: smooth;
      overflow-x: hidden;
  }
  
  body {
      font-size: 1.6rem;
      letter-spacing: 0.1rem;
      user-select: none;
      -webkit-user-select: none; 
      -moz-user-select: none;   
      -ms-user-select: none;     
      -o-user-select: none;
  }
  
  a {
      text-decoration: none;
      color:black;
  }

  ul {
      list-style-type: none;
  }

  img{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  button{
    border:none;
    
    &:focus{
      outline:none;
    }
  }

  input {
    outline:none;
    &:focus::placeholder{
      color:transparent;
    }
  }

  .flex {
    display:flex;
  }
  .flex-center-R {
    display:flex;
    align-items:center;
    justify-content: center;
  }
  .flex-center-C {
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
  }
`;

export default GlobalStyles;
