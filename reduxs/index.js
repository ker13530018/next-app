import { createStore } from 'redux'
import rootReducer from './reducers'

export default () => {
  const store = createStore(rootReducer)

  console.log(store.getState())

  return store
}
