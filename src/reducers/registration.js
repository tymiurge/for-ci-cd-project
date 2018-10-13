import * as api from './../api'
import {
  REGISTRATION_CONFIRMED
} from './action-names'

const confirmed = (state = false, action) => {
  switch (action.type) {
    case REGISTRATION_CONFIRMED:
      return true
    default:
      return state
  }
}

const registration = (state = {}, action) => ({
  confirmed: confirmed(state.confirmed, action),
})

export default registration

export const $registerUser = data => dispatch => {
  api.registerUser(data).then(result => {
    if (result.status === 'ok') {
      dispatch({
        type: REGISTRATION_CONFIRMED
      })
    }
  })
}
