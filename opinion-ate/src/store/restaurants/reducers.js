import { combineReducers } from 'redux'

import { loadRestaurants, STORE_RESTAURANTS } from './actions'

function records(state = [], action) {
  switch (action.type) {
    case STORE_RESTAURANTS:
      return action.records
    default:
      return state
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case STORE_RESTAURANTS:
      return false
    default:
      return state
  }
}

export default combineReducers({
  records,
  loading,
})
