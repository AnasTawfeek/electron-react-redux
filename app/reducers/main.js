import { combineReducers } from 'redux'
import { persistentReducer } from 'redux-pouchdb-plus';

import todos from './todos'
import visibilityFilter from './visibilityFilter'

let pTodos = persistentReducer(todos);

const reducer = combineReducers({
  'todos': pTodos,
  visibilityFilter
})

export default reducer