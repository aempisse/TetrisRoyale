import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'                                                                                                                                                    
import store from "./store/store"
import HomeContainer from './containers/HomeContainer'
// import App from './containers/App'
// import * as event from "./constants/eventHandler.js";

// import io from 'socket.io-client';
// const socket = io.connect('http://localhost:3000')

ReactDOM.render(
  <Provider store={store}>
    <HomeContainer/>
  </Provider>
, document.getElementById('app'))

