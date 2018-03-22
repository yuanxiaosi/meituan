require('es6-promise').polyfill();
import 'babel-polyfill';

import React from 'react'
import ReactDOM from 'react-dom'

import MyRouter from './router.jsx'
import alertLess from './view/alert/main.less'
import {alert, Alert} from './view/alert/main.jsx'
window.alert = alert

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from './reducers/index.js'

const store = createStore(reducer, applyMiddleware(thunk))





//import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';
import {renderToString} from 'react-dom/server'
import { Router, Route, IndexRoute, hashHistory, match, RouterContext } from 'react-router';
function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
}

match({history:hashHistory, routes: MyRouter, location: window.location.hash.replace('#', '')}, (err, redirect, props) => {
  if (err) {
    console.log('err')
  } else if (redirect) {
    console.log(redirect.pathname + redirect.search)
  } else if (props) {
    console.log(props)
    const appHtml = renderToString(
      <Provider store={store} key="provider">
        <RouterContext {...props} />
      </Provider>
    )
    //const appHtml = renderToString(<RouterContext {...props}/>)
    console.log(renderPage(appHtml))
  } else {
    console.log('Not Found')
  }
})




ReactDOM.render(
  <Provider store={store}>
    {MyRouter}
  </Provider>,
  document.getElementById('main')
)








// import React from 'react'
// import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// class App extends React.Component{ //router-transtion & animate
//   render() {
//     return (
//       <div>{this.props.children}</div>
//     );
//   }
// };
// class Home extends React.Component{ //router-transtion & animate
//   render() {
//     return (
//       <div>Home</div>
//     );
//   }
// };
// class About extends React.Component{ //router-transtion & animate
//   render() {
//     return (
//       <div>about</div>
//     );
//   }
// };


// let routes = (
//   <Router history={hashHistory}>
//   <Route path="/" component={App}>
//     <IndexRoute component={Home}/>
//     <Route path="/about" component={About}/>
//   </Route>
//   </Router>
// )

// import { renderToString } from 'react-dom/server'
// import { match, RouterContext } from 'react-router'

// function renderPage(appHtml) {
//   return `
//     <!doctype html public="storage">
//     <html>
//     <meta charset=utf-8/>
//     <title>My First React Router App</title>
//     <link rel=stylesheet href=/index.css>
//     <div id=app>${appHtml}</div>
//     <script src="/bundle.js"></script>
//    `
// }
// console.log(window.location)
// match({history:hashHistory, routes: routes, location: '/about'}, (err, redirect, props) => {
//   if (err) {
//     console.log('err')
//   } else if (redirect) {
//     console.log(redirect.pathname + redirect.search)
//   } else if (props) {
//     console.log(props)
//     const appHtml = renderToString(<RouterContext {...props}/>)
//     console.log(renderPage(appHtml))
//   } else {
//     console.log('Not Found')
//   }
// })