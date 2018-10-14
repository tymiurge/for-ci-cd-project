import {
  LOGIN_CONFIRMED
} from './action-names'
import * as api from './../api'
import { combineReducers } from 'redux'


const confirmed = (state = false, action) => {
  switch (action.type) {
    case LOGIN_CONFIRMED: return true
    default: return state
  }
}

export default combineReducers({
  confirmed
})

export const $loginUser = data => dispatch => {
  api.loginUser(data).then(result => {
    dispatch({
      type: LOGIN_CONFIRMED
    })
  })
}
