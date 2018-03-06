import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers/index';

const middleware = routerMiddleware(browserHistory)

const store = createStore(
    combineReducers({
        rootReducer,
        routing: routerReducer
    }),
    applyMiddleware(middleware)
);

export default store;