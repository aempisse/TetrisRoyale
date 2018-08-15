import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'                                                                                                                                                    
import store from "./store/store"
import HomeContainer from './containers/HomeContainer'
// import createLogger from 'redux-logger'
// import thunk from 'redux-thunk'
// import { createStore } from 'redux'
// import {storeStateMiddleWare} from './middleware/storeStateMiddleWare'
// import rootReducer from './reducers/index.js'
// import App from './containers/app'
// import {alert} from './actions/alert'
// import * as event from "./constants/eventHandler.js";

// import io from 'socket.io-client';
// const socket = io.connect('http://localhost:3000')

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <HomeContainer/>
  </Provider>
, document.getElementById('app'))

