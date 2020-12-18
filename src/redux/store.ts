import { createStore } from 'redux'
import { makeRootReducer } from './reducers'

const reducer = makeRootReducer()
export default createStore(reducer)
