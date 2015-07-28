/*jslint node: true , esnext: true , unused:false , camelcase: false */


import React from 'react';
import AppWrap from './components/AppWrap';
import { applyMiddleware, createStore, combineReducers } from 'redux';

import * as reducers from './reducers';

const composedReducers = combineReducers(reducers);
const store = createStore(composedReducers);
// const finalCreateStore = applyMiddleware( promiseMiddleware )(createStore);


React.render(<AppWrap store={store} />, document.getElementById('app'));

