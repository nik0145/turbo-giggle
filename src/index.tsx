import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
// import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'

//https://codesandbox.io/s/9on71rvnyo?file=/src/redux/reducers/visibilityFilter.js

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
