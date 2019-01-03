import IndexReducer from './index/reducers'
import { combineReducers } from 'redux'
/*
 * Designing the State Shape
 */

const initialState = {
  list: [],
  action: '',
  index: { data: [] },
}

/*
 * Single reducers style
 */
const rootReducer = combineReducers({
  index: IndexReducer,
})

export default rootReducer
