/*jslint esnext: true , unused:false , camelcase: false */

import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import zxcvbn from 'zxcvbn';

import * as UserAction from "../action/UserAction";

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

    componentWillMount() {

        // console.log('zzzz=',zxcvbn('jsgacj2@tuqwd'));
        // var zxcvbnSrc = 'https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/2.0.2/zxcvbn.min.js';
        
        // // snippet to async load zxcvbn if enabled
        // (function() {
        //     var a;
        //     a = function() {
        //         var a, b;
        //         b = document.createElement("script");
        //         b.src = zxcvbnSrc;
        //         b.type = "text/javascript";
        //         b.async = !0;
        //         a = document.getElementsByTagName("head")[0];
        //         return a.parentNode.insertBefore(b, a)
        //     };
        //     null != window.attachEvent ? window.attachEvent("onload", a) : window.addEventListener("load", a, !1)
        // }).call(this);

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
                <span className="bar" style={{width:this.state.score/4*100+'%'}}></span> <span className="score-text">{this.state.score}</span>
                </div>
            </div>
            
        )


    }


}