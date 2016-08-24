// var React = require('react');
// var ReactDOM = require('react-dom');

// var HelloWorld = React.createclass({
//   render: {
//     return (<div>Hello World!</div>)
//   }
// });

// ReactDOM.render(
//   <HelloWorld />,
//   document.getElementById("root")
// )
import "./styles/reset"

import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import Home from "./components/Home"
import Settings from "./components/Settings"

const App = props => (<div>{props.children}</div>)

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="settings" component={Settings} />
    </Route>
  </Router>, document.getElementById("root")
)