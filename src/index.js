import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import App from './components/App'
import saga from './sagas'
import './index.css'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(saga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
