import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Home from './components/Home'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import socketMiddleware from './middlewares/socketMiddleware'
import loggerMiddleware from './middlewares/loggerMiddleware'
import reducer from './reducers/reducer'

import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000')

const store = createStore(
    reducer,
    applyMiddleware(
        socketMiddleware(socket),
        thunkMiddleware,
        loggerMiddleware
    )
)

ReactDOM.render(
	<Provider store={store}>
		<Home/>
	</Provider>
, document.getElementById('app'))

