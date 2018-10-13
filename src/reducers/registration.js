import * as api from './../api'
import {
  REGISTRATION_CONFIRMED,
  REGISTRATION_FAILED
} from './action-names'
import { combineReducers } from 'redux'

const confirmed = (state = false, action) => {
  switch (action.type) {
    case REGISTRATION_CONFIRMED:
      return true
    default:
      return state
  }
}

const errors = (state = [], action) => {
  switch (action.type) {
    case REGISTRATION_FAILED:
      return action.errors
    default:
      return state
  }
}

export default combineReducers({
  confirmed,
  errors
})

export const $registerUser = data => dispatch => {
  api.registerUser(data).then(result => {
    if (result.code === 200) {
      dispatch({
        type: REGISTRATION_CONFIRMED
      })
    } else {
      dispatch({
        type: REGISTRATION_FAILED,
        errors: result.messages
      })
    }
  })
}
