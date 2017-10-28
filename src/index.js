import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo'

import { client } from './configuration'

const Wrapped = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(Wrapped, document.getElementById('root'));
registerServiceWorker();
