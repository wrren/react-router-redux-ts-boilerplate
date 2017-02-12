import { createStore, combineReducers }         from 'redux'
import { syncHistoryWithStore, routerReducer }  from 'react-router-redux'

const store = createStore(
  combineReducers({
    routing: routerReducer
  })
)

export default store