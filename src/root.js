import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login, Summary, Logs, Register, Profile } from './screens'

const Root = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/summary" component={Summary}/>
        <Route path="/logs" component={Logs}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default Root
