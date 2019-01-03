import { INIT_DATA, SOME_ACTION_PARAMS } from './actions'

const initialState = {
  action: '',
  data: [],
}

/*
 * Single reducers style
 */
const App = (state = initialState, action) => {
  // For now, don't handle any actions
  // and just return the state given to us.
  const { type, ...rest } = action
  switch (type) {
    case INIT_DATA:
      return Object.assign({}, state, rest)
    default:
      return state
  }
}

export default App
