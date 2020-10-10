import React from 'react';
import Launches from './component/launches'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import store from './store'
import ReduxLaunches from "./component/query_launches";
import MutationLaunches from "./component/mutation_launches";
import { Provider } from 'react-redux'

const cache = new InMemoryCache()
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache
})

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <div className="App">
          <h2>SpaceX</h2>
          {/* <Launches /> */}
          <ReduxLaunches />
          <MutationLaunches />
        </div>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
