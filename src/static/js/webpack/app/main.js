require('es6-promise').polyfill();
import 'babel-polyfill';

import React from 'react'
import ReactDOM from 'react-dom'

import MyRouter from './router.jsx'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index.js'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    {MyRouter}
  </Provider>,
  document.getElementById('main')
)