/*jslint esnext: true , unused:false , camelcase: false */
import { ADD_THREAD } from '../constants/ActionTypes';

const initialState = { thread: [], idCounter: 0 };

export default function threadReducer (state=initialState, action) {

    switch (action.type) {
        case ADD_THREAD:
            console.log('store thred');
            return {

            };

        default:
            return state;

    }
}


