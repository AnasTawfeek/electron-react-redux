import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, COMPLETE_TODO } from '../actions/todo'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todo(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.payload
      })

    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.payload,
            completed: false
          }
        ]
      })

    case COMPLETE_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos.slice(0, action.payload),
          Object.assign({}, state.todos[action.payload], {
            completed: true
          }),
          ...state.todos.slice(action.payload + 1)
        ]
      })

    default:
      return state;
  }
  
}

export default todo;