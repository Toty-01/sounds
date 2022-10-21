import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
      transition : linear 0.35s;
      background-color : ${(props)=> props.theme.backgroundColor};
      color : ${(props)=> props.theme.mainColor};
      font-family : Audiowide;
    }
    button {
      font-family: righteous;
      margin-right: 1rem;
      padding: 8px 12px;
      font-size: 0.8rem;
      border-radius: 0.5rem;
      border: 1.6px solid;
      background-color : ${(props)=> props.theme.backgroundColor};
      color : ${(props)=> props.theme.mainColor};
    }
    button:hover {
      cursor: pointer;
      transition: all 1s;
      color : ${(props)=> props.theme.backgroundColor};
      background-color : ${(props)=> props.theme.mainColor};
    }
`;

export default GlobalStyle;