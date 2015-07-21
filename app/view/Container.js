
import React, { Component } from 'react';

import Thread from './Thread';
import ThreadInput from './ThreadInput';

export default class Container extends Component {
    render() {
    return (
      <div>
        <h1>Hello, world...lala</h1>
        <Thread />
        <div>
            <ThreadInput />
        </div>
      </div>

    );
  }
}

