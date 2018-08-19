import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunkMiddleware from 'redux-thunk'
import socketMiddleware from './middlewares/socketMiddleware'
import loggerMiddleware from './middlewares/loggerMiddleware'
import monitorReducerEnhancer from './enhancers/monitorReducerEnhancer'

import reducer from './reducers/reducer'

import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

const configureStore = (preloadedState) => {
    const middlewares = [
        socketMiddleware(socket),
        thunkMiddleware
    ]
    if (process.env !== 'production')
        middlewares.push(loggerMiddleware)

    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [
        middlewareEnhancer,
        monitorReducerEnhancer
    ]
    let composedEnhancer
    if (process.env !== 'production')
        composedEnhancer = composeWithDevTools(...enhancers)
    else
        composedEnhancer = compose(...enhancers)

    const store = createStore(reducer, preloadedState, composedEnhancer)

    if (socket)
        socket.on('action', store.dispatch)

    return store
}

export default configureStore