import React from 'react/addons';
var TestUtils = React.addons.TestUtils;

import threadReducer from '../app/reducers/threadReducer.js';

describe('thread reducer Test',function(){


	it('thread reducer  add thead should add right content', function() {
		const initialState = [{
		  text: 'Use Default',
		  marked: false,
		  id: 0
		}];
		const tempAction= {
	      type: 'ADD_THREAD',
	      text: 'im a testing text;'
	    };

		expect(threadReducer(initialState,tempAction).length).toEqual(2);
		expect(threadReducer(initialState,tempAction)[0].text).toMatch('im a testing text;');

	});

	it('thread reducer  remove thead work', function() {
		const initialState = [{
		  text: 'Use Default',
		  marked: false,
		  id: 0
		}];
		const tempAction= {
	      type: 'REMOVE_THREAD',
	      id: 0
	    };

		expect(threadReducer(initialState,tempAction).length).toEqual(0);
		// expect(threadReducer(initialState,tempAction)[0].text).toMatch('im a testing text;');

	});




});

