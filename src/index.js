import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux' // applyMiddleware - connect ato thunk didto sa store
import reducers from './reducers'
import thunk from 'redux-thunk' // middleware mao ni mag handle sa async await

const store = createStore(reducers, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  // <Provider store={createStore(reducers)}>
  //   <App />
  // </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
