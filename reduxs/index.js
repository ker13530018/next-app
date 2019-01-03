import { createStore } from 'redux'
import App from './reducers'

const store = createStore(App)

console.log(store.getState())

export default store
