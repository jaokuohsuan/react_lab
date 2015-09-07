
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';

import * as UserAction from "../action/UserAction";


require('../sass/edit-pad.scss');
require('../sass/btn.scss');

export default class EditPad extends Component {

	componentWillReceiveProps(nextProps){
		this.setState({
			text: nextProps.text
		})
	}

	constructor(props, context) {
        super(props, context);
        this.state = {
           text: this.props.text || ''
        };
     }

     handleChange(e) {
        this.setState({ text: e.target.value });

     }


	handleSave(e){

		const {saveThred,changeRoute,view}=this.props;
		//
		// view.data is String....
		saveThred(view.data,this.state.text);
		changeRoute('index');
		// addThred(this.state.text);
	}

	render(){
		
		return (
			<div  className={
                              classnames("edit-pad",{
                                   "is-editing": this.props.editing
                              })
                         }>
				
				<input 
                        className="pad-input" 
                        type="text" 
                        onChange={::this.handleChange}
                        // onKeyDown={::this.handleSave}
                        value={this.state.text}
                   />
                   <button className="btn" onClick={::this.handleSave}>
                        Save
                   </button>
			</div>
		);
	}

}
