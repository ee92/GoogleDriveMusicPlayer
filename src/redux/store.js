import { createStore, combineReducers, compose } from 'redux'
import { libraryReducer, songReducer } from './modules/library'
import { authReducer } from './modules/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  user: authReducer,
  library: libraryReducer,
  song: songReducer
})

export const store = createStore(
  rootReducer,
  composeEnhancers()
)
