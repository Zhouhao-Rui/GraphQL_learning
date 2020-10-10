import { combineReducers } from 'redux'
import { numReducer } from '../component/store'
const reducer = combineReducers({
  number: numReducer,
})

export { reducer }