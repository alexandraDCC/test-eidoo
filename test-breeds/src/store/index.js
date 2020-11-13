import {
	applyMiddleware, combineReducers, compose, createStore
} from 'redux';
// import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import breedsReducer from './data/reducer';
import thunk from 'redux-thunk';

const initialState = {};
export const history = createBrowserHistory();

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
	: compose;


const middleware = [thunk, routerMiddleware(history)];

const enhancer = composeEnhancers(
	applyMiddleware(...middleware),
);

const rootReducer = combineReducers({
	router: connectRouter(history),
	breedStore: breedsReducer,
});

const store = createStore(rootReducer, initialState, enhancer);

export default store;
