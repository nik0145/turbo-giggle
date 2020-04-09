import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-components";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import client from "./utils/apolloClient";
import "./index.css";
import App from "./App";

import { Provider } from 'react-redux'
import { createStore } from "redux";
import rootReducer from "./reducers";

const configureStore = ()=> createStore(
  rootReducer
  
)
const store = configureStore();
const WrappedApp = (
  <Provider store={store}>
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  </Provider>
);

ReactDOM.render(WrappedApp, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
