import * as api from './../api'
import {
  REGISTRATION_CONFIRMED,
  REGISTRATION_FAILED
} from './action-names'

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

const registration = (state = {}, action) => ({
  confirmed: confirmed(state.confirmed, action),
  errors: errors(state.errors, action)
})

export default registration

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
