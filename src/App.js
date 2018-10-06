import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Login } from './screens'

class App extends Component {
  render() {
    return (
      <Login 
        onSubmit={
          (login, password) => alert('login = ' + login + ', password = ' + password)
        } 
      />
    );
  }
}

export default App;
