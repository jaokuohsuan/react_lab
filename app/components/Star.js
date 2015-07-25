
import React, { Component, PropTypes } from 'react';
// import {bindActionCreators} from "redux";
// import {connect} from "react-redux";
import classnames from 'classnames';

import * as UserAction from "../action/UserAction";

// @connect(state => ({
  
// }))
export default class Star extends Component {

     static propTypes = {
        isStar: PropTypes.bool,
     };



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
               
                    <svg onClick={this.props.starClick}  className={
                              classnames("stars",{
                                   "is-selected": this.props.isStar
                              })
                         }
                         width="60" height="60"
                         xmlns="http://www.w3.org/svg/2000"  >
                         <path d={pathData} />
                    </svg>
               

          );
     }

}
