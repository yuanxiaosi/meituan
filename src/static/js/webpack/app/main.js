require('es6-promise').polyfill();
import 'babel-polyfill';

import React from 'react'
import ReactDOM from 'react-dom'

import MyRouter from './router.jsx'
import Alert from './view/alert/main.jsx'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from './reducers/index.js'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Alert />
      {MyRouter}
    </div>
  </Provider>,
  document.getElementById('main')
)