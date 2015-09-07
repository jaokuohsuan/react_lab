/*jslint esnext: true , unused:false , camelcase: false */

import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
// import zxcvbn from 'zxcvbn';

import * as UserAction from "../action/UserAction";

require('../sass/password-input.scss');

export default class PasswordInputFlux extends Component {

    static propTypes = {
        text: PropTypes.string,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            text: this.props.text || ''
        };
    }

    delayMaskPassword() {
        console.log('delayMaskPassword');
        const {maskPassword} =this.props;
        clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout(maskPassword, 1500);
    }


    handleChange(e) {
        const {editPassword,maskPassword} =this.props;
        let val=e.target.value;
        this.setState({ text: val });
        editPassword(val);
        this.delayMaskPassword();
        e.preventDefault();
        // this.maskPassword();
    }


    render() {
        let defaultLang=['Bad','Not good', 'Decent', 'Strong', 'Great'];
        return (

            <div className = "password-input" >
                password:
                <br / >
                <input 
                    value = {this.state.text}
                    type = {this.props.isPassword ? 'password' : 'text'}
                    onChange = {::this.handleChange}
                    value = {this.state.text} />
                <div className="scorebar">
                <span className="bar" style={{width:this.state.score/4*100+'%'}}></span> <span className="score-text">{defaultLang[this.state.score]}</span>
                </div>
            </div>
            
        )


    }


}