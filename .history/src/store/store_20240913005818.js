import { combineReducers, legacy_createStore as createStore } from 'redux'
import { userReducer } from './user.reducer.js'
import { noteReducer } from './note.reducer.js'

const rootReducer = combineReducers({
  noteModule: noteReducer,
  userModule: userReducer,
})

// const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

export const store = createStore(rootReducer)
// export const store = createStore(rootReducer, middleware)

// For debug only!
store.subscribe(() => {
  console.log('Store state is:', store.getState())
})
