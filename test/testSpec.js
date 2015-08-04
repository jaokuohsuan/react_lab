// var jest=require('jest-cli');
// jest.dontMock('../app/components/Thread.js');

import React from 'react/addons';
var TestUtils = React.addons.TestUtils;


import EditPad from '../app/components/EditPad.js';
import Star from '../app/components/Star.js';
import ThreadInput from '../app/components/ThreadInput.js';

describe('components Test',function(){

	
	var editPadComp,starComp,ThreadInputComp;

	beforeEach(function() {
	    
    });

    it('EditPad should exists', function() {
	    // Render into document
	    editPadComp = TestUtils.renderIntoDocument(<EditPad />);
	    expect(TestUtils.isCompositeComponent(editPadComp)).toBeTruthy();
	 });
    it('Star should exists', function() {
	   	starComp = TestUtils.renderIntoDocument(<Star />);
	    expect(TestUtils.isCompositeComponent(starComp)).toBeTruthy();
	 });
    it('Input should exists', function() {
	   	ThreadInputComp = TestUtils.renderIntoDocument(<ThreadInput />);
	    expect(TestUtils.isCompositeComponent(ThreadInputComp)).toBeTruthy();
	 });


});