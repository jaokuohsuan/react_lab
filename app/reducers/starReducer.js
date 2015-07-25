/*jslint esnext: true , unused:false , camelcase: false */
import { ADD_STAR, REMOVE_SATR} from '../constants/ActionTypes';

const initialState = [{ isStar: false, id: 0 }];

export default function starReducer (state=initialState, action) {

    switch (action.type) {
        case ADD_STAR:
            
            return (
                state.map( ()=>{
                    console.log('run run')
                })
            );
        case REMOVE_SATR:
             return (
                state.map( ()=>{
                    console.log('run run 2')
                })
            );
        

            
        default:
            return state;

    }
}


