import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers/reducer'
import logger from '../middlewares/loggerMiddleware'

const store = createStore(
    reducer,
    applyMiddleware(logger)
)

export default store