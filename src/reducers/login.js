import {
  LOGIN_CONFIRMED,
  LOGIN_FAILED
} from './action-names'
import * as api from './../api'
import { combineReducers } from 'redux'


const confirmed = (state = false, action) => {
  switch (action.type) {
    case LOGIN_CONFIRMED: return true
    default: return state
  }
}

const errors = (state = [], action) => {
  switch(action.type) {
    case LOGIN_FAILED: return action.errors
    default: return state
  }
}

export default combineReducers({
  confirmed,
  errors
})

export const $loginUser = data => dispatch => {
  api.loginUser(data).then(result => {
    if (result.code !== 200) {
      dispatch({
        type: LOGIN_FAILED,
        errors: result.messages
      })
    } else {
      dispatch({
        type: LOGIN_CONFIRMED
      })
    }
  })
}
