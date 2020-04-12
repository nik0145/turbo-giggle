import rootReducer from '../reducers'
import { createStore } from 'redux'

const configureStore = () =>
  createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )

const store = configureStore()
store.subscribe(() => console.log(store.getState()))

export default store
