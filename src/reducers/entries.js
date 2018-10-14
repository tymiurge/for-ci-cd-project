import * as api from './../api'
import {
  ENTRIES_FETCHED
} from './action-names'
import { combineReducers } from 'redux'

const list = (state = [], action) => {
  switch (action.type) {
    case ENTRIES_FETCHED: return action.entries
    default: return state
  }
}

export default combineReducers({
  list
})

const _entries = [
  {
      type: 'income',
      title: 'salary',
      amount: 3000,
      tag: 'salary',
      date: '2 oct 2018'
  },
  {
      type: 'income',
      title: 'deposit return',
      amount: 500,
      tag: 'deposit',
      date: '3 oct 2018'
  },
  {
      type: 'transfer',
      title: 'Transfer from Home storage to Bank account',
      amount: 1500,
      tag: 'transfer',
      date: '4 oct 2018'
  },
  {
      type: 'outcome',
      title: 'buy food for one week',
      amount: 1500,
      tag: 'food',
      date: '5 oct 2018',
      from: 'incomes'
  }, 
  {
      type: 'outcome',
      title: 'charge car - 10 lt',
      amount: 370,
      tag: 'car',
      from: 'storages',
      date: '6 oct 2018'
  },
  {
      type: 'outcome',
      title: 'car TO',
      amount: 1000,
      tag: 'car',
      from: 'storages',
      date: '7 oct 2018'
  }
]

export const $fetchEntries = () => dispatch => {
  dispatch({
    type: ENTRIES_FETCHED,
    entries: _entries
  })
}