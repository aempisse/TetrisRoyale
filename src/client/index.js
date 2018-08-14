import React from 'react'
// import ReactDom from 'react-dom'
import { render } from "react-dom";
// import createLogger from 'redux-logger'
// import thunk from 'redux-thunk'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'                                                                                                                                                    
// import {storeStateMiddleWare} from './middleware/storeStateMiddleWare'
// import rootReducer from './reducers/index.js'
import App from './containers/app'
// import {alert} from './actions/alert'
import store from "./store/index";
import * as event from "./constants/eventHandler.js";
import {updateTetri} from "./actions/update_tetri.js";

// import io from 'socket.io-client';
// const socket = io.connect('http://localhost:3000')

render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('tetris'))

//window.setInterval(() => {store.dispatch(updateTetri());} , 1000);
//window.setInterval(event.update(), 1000);
//window.addEventListener('keydown', e => event.keyHandler(e), false);
