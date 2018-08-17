import { createStore, applyMiddleware, compose } from 'redux'

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
    if (process.env === 'development')
        middlewares.push(loggerMiddleware)

    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [
        middlewareEnhancer,
        monitorReducerEnhancer
    ]
    const composedEnhancer = compose(...enhancers)

    const store = createStore(reducer, preloadedState, composedEnhancer)

    return store
}

export default configureStore