import user from './user'
import registration from './registration'
import login from './login'
import { combineReducers } from 'redux'

export default combineReducers({
  user,
  registration,
  login
})
