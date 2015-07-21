/*jslint esnext: true , unused:false , camelcase: false */
import { ADD_STAR, REMOVE_SATR } from '../constants/ActionTypes';

const initialState = { isStar: [], idCounter: 0 };

export default function starReducer (state=initialState, action) {

    switch (action.type) {
        case ADD_STAR:
            console.log('store add star');
            return {

            };
        case REMOVE_SATR:
            return {

            };
        default:
            return state;

    }
}


