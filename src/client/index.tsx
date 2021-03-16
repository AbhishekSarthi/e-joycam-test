import '@babel/polyfill'
import 'webrtc-adapter'
import App from './containers/App'
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Webinar from './components/Webinar';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux'

const component = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(component, document.getElementById('container'))
