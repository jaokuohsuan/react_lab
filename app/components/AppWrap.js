/*jslint esnext: true , unused:false , camelcase: false */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Container from './Container';

require('../sass/main.scss');


export default class AppWrap extends Component {

	constructor(props, context){
		super(props, context);
	}

    render() {
    return (

      <Provider store={this.props.store}>
        {() => <Container />}
      </Provider>

    );
  }
}
