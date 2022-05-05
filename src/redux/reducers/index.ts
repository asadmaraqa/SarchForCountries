import { combineReducers } from 'redux'

import country from './country'
import like from './like'
const createRootReducer = () =>
  combineReducers({
    country,
    like,
  })

export default createRootReducer
