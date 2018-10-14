import registration from './registration'
import login from './login'
import buckets from './buckets'
import entries from './entries'
import { combineReducers } from 'redux'

export default combineReducers({
  registration,
  login,
  buckets,
  entries
})
