
import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as UserAction from "../action/UserAction";

import Thread from './Thread';
import ThreadInput from './ThreadInput';

@connect(state => ({
  threads: state.threadReducer
}))
export default class Container extends Component {


    render() {
        const {threads,dispatch}=this.props;
        return (
          <div>
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
            

            
          </div>

        );
  }
}

