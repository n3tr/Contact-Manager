import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Routes  from './routes'
import storeState from './data/storeState'
import AppReducer from './reducers/AppReducer'

// Create redux store with given initial state
const store = createStore(AppReducer, storeState);

ReactDOM.render(
  <Provider store={store}>
    <Router children={Routes} history={createBrowserHistory()} />
  </Provider>,
  document.getElementById('root')
);
