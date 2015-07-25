import { ADD_THREAD, EDIT_THREAD,CHANGE_MARK,REMOVE_THREAD } from '../constants/ActionTypes';

const initialState = [{
  text: 'Use Default',
  marked: false,
  id: 0
}];

export default function threadReducer (state=initialState, action) {

    switch (action.type) {
        case ADD_THREAD:
            console.log(...state);
            return [{
              text: action.text,
              marked: false,
              id: state[0]!==undefined ? state[0].id+ 1 : 0
            },...state];
        case REMOVE_THREAD:
            console.log(...state);
            return state.filter(thread =>
              thread.id !== action.id
            );
        case EDIT_THREAD:
            console.log('store EDIT_THREAD');
            return state.map(thread =>
                     thread.id === action.id ?
                       { ...thread, text: thread.text } :
                       thread
          );
        case CHANGE_MARK:

             return state.map(thread =>
                     thread.id === action.id ?
                       { ...thread, marked: !thread.marked } :
                       thread
                   );
              

        default:
            return state;

    }
}


