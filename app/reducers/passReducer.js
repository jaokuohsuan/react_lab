import { EDIT_PASSWORD,MASK_PASSWORD } from '../constants/ActionTypes';

const initialState = {
    text: undefined,
    score: undefined,
    isPassword: true
};

export default function passReducer (state=initialState, action) {

    switch (action.type) {

        case EDIT_PASSWORD:
            console.log(action.text);
            return ({
              text: action.text
            });
        case MASK_PASSWORD:
        	console.log('maskPassword');
            return ({
              isPassword: true,
            });

        default:
            return state;

    }
}