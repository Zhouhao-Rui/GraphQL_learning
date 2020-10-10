import React from 'react';
import Launches from './component/launches'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>SpaceX</h2>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
