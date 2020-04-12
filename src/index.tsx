import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-components'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import client from './utils/apolloClient'
import './index.css'
import App from './App'

import { Provider } from 'react-redux'
import store from './store'
//https://codesandbox.io/s/9on71rvnyo?file=/src/redux/reducers/visibilityFilter.js
const WrappedApp = (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </Provider>
)

ReactDOM.render(WrappedApp, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
