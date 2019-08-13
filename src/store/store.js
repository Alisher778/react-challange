import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { companyReducer, selectedCompanyReducer } from './reducers/companiesReducer';
import commentsReduer from './reducers/commentsReducer';

const enhancer = compose(
  applyMiddleware(thunk, logger),
  persistState(),
);
const reducers = combineReducers({
  companies: companyReducer,
  selectedCompany: selectedCompanyReducer,
  comments: commentsReduer,
});

const store = createStore(reducers, enhancer);

export default store;
