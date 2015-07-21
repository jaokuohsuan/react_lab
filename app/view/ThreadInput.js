/*jslint esnext: true , unused:false , camelcase: false */
import React, { Component } from 'react';

require('../sass/btn.scss');

export default class ThreadInput extends Component {



     render(){
          let olderWording="add new thread..."
          return (
                    <div className="thread-input">
                         <input className="th-input" type="text" placeholder={olderWording} /> <button className="btn"> add thred </button>
                    </div>
          );
     }

}