import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import createRootReducer from './reducers'

const initState = {}

export default function makeStore(initialState = initState) {
  const middlewares = [thunk]
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
