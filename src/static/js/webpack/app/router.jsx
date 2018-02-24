import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Application from './application.jsx';

var routerList = [{
    path: "/detail", 
    filePath: "/detail/main.jsx"
  }
] 


var routeLabel = routerList.map((v, k)=>{
  return (
    <Route key={k} path={v.path} getComponent={(location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./view' + v.filePath).default);
      });
    }} />
  )
})

let router = (
  <Router history={hashHistory}>
    <Route path="/" component={ Application }>
      <IndexRoute className={"animated fadeIn"} getComponent={(location, callback) => {
        require.ensure([], (require) => {
          callback(null, require('./view/home/main.jsx').default);
        });
      }} />
      
      { routeLabel }
      
    </Route>
  </Router>
  );

export default router;
