import '@babel/polyfill'
import * as React from "react";
import { ApolloProvider } from 'react-apollo'
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";

import graphqlClient from "./api/graphql"
import Root from "./components/Root"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap');

  body { 
    font-family: Roboto, sans-serif;
  }
`;
render(
  <ApolloProvider client={graphqlClient}>
    <GlobalStyles />
    <Root />
  </ApolloProvider>,
  document.getElementById("app")
);
