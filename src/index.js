import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import AllRoutes from './routes';

const httpLink = createHttpLink({
  uri: 'http://localhost:7000'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AllRoutes/>
  </ApolloProvider>,
  document.getElementById('root')
);
 