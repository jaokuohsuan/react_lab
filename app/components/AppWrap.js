/*jslint esnext: true , unused:false , camelcase: false */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

// devTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import Container from './Container';
import Routr from '../utils/routr';



require('../sass/main.scss');


export default class AppWrap extends Component {

	constructor(props, context){
		super(props, context);

		//router start
		let routr = new Routr(props.store);

	}

    render() {
      
    let tool;
    if ('undefined' !== typeof window) {
      tool = <DebugPanel top right bottom>
          <DevTools store={this.props.store} monitor={LogMonitor} />
           </DebugPanel>
    }
    return (
      <div>
        <Provider store={this.props.store}>
          {() => <Container />}
        </Provider>

        {tool}
      </div>

    );
  }
}
