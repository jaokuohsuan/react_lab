/*jslint esnext: true , unused:false , camelcase: false */
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

require('../sass/btn.scss');



export default class ThreadInput extends Component {

     static propTypes = {
        text: PropTypes.string,
     };

     constructor(props, context) {
        super(props, context);
        this.state = {
           text: this.props.text || ''
        };
     }


     handleChange(e) {
        this.setState({ text: e.target.value });

        // const {changeWording} =this.props;
        // changeWording(this.state.text);

     }

     handleSubmit(e) {
        const {addThred} =this.props;

        if (e.which === 13 && this.state.text!=='') {
          addThred(this.state.text);
          this.setState({ text: '' });
        }
        

     }

     handleClick(e) {
        console.log(this.props);
        const {addThred} =this.props;

        if(this.state.text!==''){

          addThred(this.state.text);
          this.setState({ text: '' });
        }
        

     }


     render(){

        return (
              <div className="thread-input">
                   <input 
                        className="th-input" 
                        autoFocus="true"
                        type="text" 
                        placeholder={this.props.placeholder}
                        onChange={::this.handleChange}
                        onKeyDown={::this.handleSubmit}
                        value={this.state.text}
                   />
                   <button className="btn" onClick={::this.handleClick}>
                        add thread 
                   </button>
              </div>
        );
     }

}