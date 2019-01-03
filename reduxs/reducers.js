import { SOME_ACTION, SOME_ACTION_PARAMS } from './actions'
// import { combineReducers } from 'redux'
/*
 * Designing the State Shape
 */

const initialState = {}

/*
 * Single reducers style
 */
const App = (state = initialState, action) => {
  // For now, don't handle any actions
  // and just return the state given to us.
  switch (action.type) {
    case SOME_ACTION:
      return Object.assign({}, state)
    case SOME_ACTION_PARAMS:
      return Object.assign({}, state)
    default:
      return state
  }
}
/*
 * Another style combine reducers
 */
// const App = combineReducers({
//     a: doSomethingWithA,
//     b: processB,
//     c: c
//   })

export default App
