import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'; // binding apollo to react

// components imports
import BookList from './components/BookList';

// apollo client setup
const client = new ApolloClient({
    // now apollo knows that we are making request to this endpoint from our app.
    uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
          <div id="main">
              <h1>Reading list</h1>
              <BookList/>
          </div>
        </ApolloProvider>
    );
  }
}

export default App;
