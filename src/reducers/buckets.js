import * as api from './../api'
import {
  BUCKETS_FETCHED,
  BUCKET_SAVED
} from './action-names'
import { combineReducers } from 'redux'

const list = (state = [], action) => {
  switch (action.type) {
    case BUCKETS_FETCHED: return action.buckets
    case BUCKET_SAVED: return [...state, action.bucket]
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

export const $saveBucket = data => dispatch => {
  /*
  dispatch({
    type: BUCKET_SAVED,
    bucket: {...data, id: 1}
  })
  */
  
  api.saveBucket({...data, amount: parseInt(data.amount)}).then(result => {
    dispatch({
      type: BUCKET_SAVED,
      bucket: result.data.bucket
    })
    /*
    if (result.code === 200) {
      dispatch({
        type: BUCKET_SAVED,
        bucket: result.data.bucket
      })
    }
    */
  })
}