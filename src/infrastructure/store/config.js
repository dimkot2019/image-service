import {createStore, applyMiddleware, bindActionCreators} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './reducer';
import * as actionCreators from './actions';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const actions = bindActionCreators(actionCreators, store.dispatch);
