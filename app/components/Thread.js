
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import * as UserAction from "../action/UserAction";

import Star from './Star';

require('../sass/thread.scss');

export default class Thread extends Component {

	handlesClick(e){
		const {changeMark} =this.props;
		changeMark(this.props.id);
	}
	handleDel(evt){
		evt.preventDefault();
		const {removeThred} =this.props;
		removeThred(this.props.id);
	}

	handleEdit(e){
		console.log(this.props.id);
	}

	render(){
		const {thread,dispatch}=this.props;
		return (
			<div className="thread">
				<Star isStar={thread.marked} starClick={::this.handlesClick} />
				<a className="thread-content" href={'/'+this.props.id} ><span onDoubleClick={::this.handleEdit} >{thread.text}</span> </a>
				<a href="#" className="close-btn" onClick={::this.handleDel}>Ｘ</a>
			</div>
		);
	}

}
