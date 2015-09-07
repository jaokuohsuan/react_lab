
import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as UserAction from "../action/UserAction";

import Thread from './Thread';
import ThreadInput from './ThreadInput';
import EditPad from './EditPad';
import PasswordInput from './PasswordInput';
import PasswordInputFlux from './PasswordInputFlux';

@connect(state => ({
  threads: state.threadReducer,
  view: state.routeReducer,
  pass: state.passReducer,
}))
export default class Container extends Component {

    render() {

        const {threads,view,pass,dispatch}=this.props;
        let preEditedWord;
        if(typeof(view.data)!=='undefined' && view.data <=threads.length){
            preEditedWord=threads.filter(thread => thread.id===(+view.data))[0].text;
        }else{
            preEditedWord='';
        }

        return (
          <div>
            <PasswordInput />
            <h1>todo list...</h1>
            <div>
                <ThreadInput 

                    {...bindActionCreators(UserAction,dispatch)}
                    placeholder={'type some words'}
                    
                />
            </div>
            {threads.map(thread =>
                <Thread key={thread.id} id={thread.id} thread={thread} {...bindActionCreators(UserAction,dispatch)} />
            )}
            <PasswordInputFlux isPassword={pass.isPassword} {...bindActionCreators(UserAction,dispatch)} />

            <EditPad editing={view.currentView==='editing'} text={preEditedWord} view={view} {...bindActionCreators(UserAction,dispatch)} />
          </div>

        );
  }
}

