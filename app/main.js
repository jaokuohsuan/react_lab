/*jslint node: true , esnext: true , unused:false , camelcase: false */


import React from 'react';
import { devTools, persistState } from 'redux-devtools';
import AppWrap from './components/AppWrap';
import { applyMiddleware, createStore, combineReducers,compose} from 'redux';

import * as reducers from './reducers';

//with redux dev-tools
const finalCreateStore  = compose(
	devTools(),
	persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
	createStore);


const composedReducers = combineReducers(reducers);
const store = finalCreateStore(composedReducers);
// simple
// const store = createStore(composedReducers);
// middleware
// const finalCreateStore = applyMiddleware( promiseMiddleware )(createStore);


React.render(<AppWrap store={store} />, document.getElementById('app'));

