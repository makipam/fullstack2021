import { createStore, combineReducers, applyMiddleware } from 'redux'
import anecdotereducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
    anecdotes: anecdotereducer,
    notification: notificationReducer,
    filter: filterReducer
  })

const Store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default Store