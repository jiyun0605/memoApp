import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Header } from "./components";
import { PostContianer } from "./containers";
export const GlobalStyle = createGlobalStyle`
body{
    background-color:#E0E0E0;
}
`;

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <PostContianer />
    </Fragment>
  );
};
export default App;
