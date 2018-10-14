import * as api from './../api'
import {
  BUCKETS_FETCHED
} from './action-names'
import { combineReducers } from 'redux'

const list = (state = [], action) => {
  switch (action.type) {
    case BUCKETS_FETCHED: return action.buckets
    default: return state
  }
}

export default combineReducers({
  list
})

export const $fetchBuckets = () => dispatch => {
  api.fetchBuckets().then(result => {
    if (result.code === 200) {
      dispatch({
        type: BUCKETS_FETCHED,
        buckets: result.data.buckets
      })
    }
  })
}