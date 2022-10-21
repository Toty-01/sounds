import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import lightTheme from "./themes/light.json";
import darkTheme from "./themes/dark.json";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";

export default function Layout({ children }) {
  const [isLight, setIsLight] = useState(true);
  function handleToggleTheme() {
    setIsLight(!isLight);
  }

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Wrapper>
        <GlobalStyle />
        <Header isLight={isLight} handleToggleTheme={handleToggleTheme}/>
          <Main> 
            {children}
          </Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper =styled.div``;

const Main = styled.div`
  min-height: calc(100vh - 170px);
  width: 96%;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 1rem;
`;