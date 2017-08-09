import { createStore, combineReducers } from 'redux'

import persons from './persons'

const store = createStore(
  combineReducers({ persons })
  , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store