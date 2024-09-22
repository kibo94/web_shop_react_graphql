import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom"
import ApolloClient, { InMemoryCache } from "apollo-boost"
import { ApolloProvider } from "react-apollo"
const client = new ApolloClient({
    uri: 'https://web-shop-react-graphql-api.vercel.app/api/graphql', // Your GraphQL API endpoint
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
