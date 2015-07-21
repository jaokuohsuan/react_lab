/*jslint esnext: true , unused:false , camelcase: false */

import React, { Component } from 'react';
import {createStore, bindActionCreators, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Container from './view/Container';
import {connect} from 'react-redux';

//for store
import * as reducers from './reducers';
const reducer = combineReducers(reducers);
const store = createStore(reducer);



require('./sass/main.scss');


export default class App extends Component {
    render() {
    return (

      <Provider store={store}>
        {() => <Container />}
      </Provider>

    );
  }
}
