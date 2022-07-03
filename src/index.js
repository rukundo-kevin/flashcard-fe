import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import AllRoutes from './routes';

const httpLink = createHttpLink({
  uri: 'http://localhost:7000'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <AllRoutes/>
  </ApolloProvider>
  );
 