import * as React                         from 'react'
import * as ReactDOM                      from 'react-dom'
import { Provider }                       from 'react-redux'
import { Router, Route, browserHistory }  from 'react-router'
import { syncHistoryWithStore }           from 'react-router-redux'
import { AppContainer }                   from 'react-hot-loader'
import store                              from './core/store'
import Todo                               from './Todo'

const history = syncHistoryWithStore(browserHistory, store)

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Component}>

          </Route>
        </Router>
      </Provider>
    </AppContainer>, document.getElementById("root")
  )
}

render(Todo)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Todo', () => {
    render(Todo)
  });
}