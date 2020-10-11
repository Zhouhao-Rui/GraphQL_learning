import React from 'react';
import Launches from './component/launches'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import store from './store'
import ReduxLaunches from "./component/query_launches";
import { Provider } from 'react-redux'
import Articles from './component/article/articles'

const cache = new InMemoryCache()
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache
})

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <div className="App">
          <h2>SpaceX</h2>
          {/* <Launches /> */}
          {/* <ReduxLaunches /> */}
          {/* <MutationLaunches /> */}
          <Articles />
        </div>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
