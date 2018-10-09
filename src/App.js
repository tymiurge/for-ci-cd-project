import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Login, Summary, Logs, Register, Profile } from './screens'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/summary" component={Summary}/>
          <Route path="/logs" component={Logs}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
