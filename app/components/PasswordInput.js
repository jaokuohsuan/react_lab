/*jslint esnext: true , unused:false , camelcase: false */

import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import zxcvbn from 'zxcvbn';

require('../sass/password-input.scss');

export default class PasswordInput extends Component {

    static propTypes = {
        text: PropTypes.string,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            text: this.props.text || '',
            isPassword: true,
        };
    }

    maskPassword() {
        clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout((function(){
            this.setState({
                isPassword: true,
            });
        }).bind(this), 1500);
    }

    handleChange(e) {

        var score,
            val = e.target.value;
        e.preventDefault();
        this.setState({
            text: val,
            score: zxcvbn(val).score,
            isPassword: false
        });
        this.maskPassword();
    }


    render() {
        let defaultLang=['Bad','Not good', 'Decent', 'Strong', 'Great'];
        return (

            <div className = "password-input" >
                password:
                <br / >
                <input 
                    value = {this.state.text}
                    type = {this.state.isPassword ? 'password' : 'text'}
                    onChange = {::this.handleChange}
                    value = {this.state.text} />
                <div className="scorebar">
                <span className="bar" style={{width:this.state.score/4*100+'%'}}></span> <span className="score-text">{defaultLang[this.state.score]}</span>
                </div>
            </div>
            
        )


    }


}