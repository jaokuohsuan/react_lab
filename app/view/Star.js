/*jslint esnext: true , unused:false , camelcase: false */
import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import * as UserAction from "../action/UserAction";

@connect(state => ({
  starState: state.starState
}))
export default class Star extends Component {

     componentDidMount() {
         console.info("Star component did mount.");
     }

     onClick() {
          
          const action = bindActionCreators(UserAction, this.props.dispatch);
          action.addStar();
          console.info("Star was clicked." ,action);
     }

     render(){

          let pathData = [
               'M', '30.000', '40.000',
               'L', '41.756', '46.180',
               'L', '39.511', '33.090',
               'L', '49.021', '23.820',
               'L', '35.878', '21.910',
               'L', '30.000', '10.000',
               'L', '24.122', '21.910',
               'L', '10.979', '23.820',
               'L', '20.489', '33.090',
               'L', '18.244', '46.180',
               'L', '30.000', '40.000',
          ].join(' ');
      
          return (
               
                    <svg className="stars" xmlns="http://www.w3.org/svg/2000" width="60" height="60" onClick={::this.onClick}>
                         <path d={pathData} />
                    </svg>
               

          );
     }

}
