import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import companiesReducer from './reducers/companiesReducer';

const reducers = combineReducers({
    companies: companiesReducer
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;