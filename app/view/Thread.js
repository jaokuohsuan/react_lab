/*jslint esnext: true , unused:false , camelcase: false */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Star from './Star';

require('../sass/thread.scss');

export default class Thread extends Component {

	render(){
		let test = 'love la-!!!la';
		return (
			<div className="thread">
				<Star />
			 	Thread ! it's {test}
			 </div>
		);
	}

}
