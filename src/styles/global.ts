import { createGlobalStyle  } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box; 
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    font-weight: normal;
  } 

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }
`;