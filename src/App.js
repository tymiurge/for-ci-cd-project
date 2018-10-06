import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Login, Summary } from './screens'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/login" component={Login}/>
          <Route path="/summary" component={Summary}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
