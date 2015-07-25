import { ADD_STAR, REMOVE_SATR, ADD_THREAD,CHANGE_MARK,REMOVE_THREAD } from '../constants/ActionTypes';

export function addStar() {
  console.log('addStar action');
  return {
    type: ADD_STAR,

  };
}

export function removeStar() {
  return {
    type: REMOVE_SATR,
  };
}

export function changeMark(id) {
  return {
    type: CHANGE_MARK,
    id
  };
}

export function addThred(text) {
    return {
      type: ADD_THREAD,
      text
    };
}

export function removeThred(id) {
    return {
      type: REMOVE_THREAD,
      id
    };
}

export function editThred(id,text) {
    return {
      type: EDIT_THREAD,
      id,
      text
    };
}

// 
// export function addThred(text) {
//     console.log('addThred action 2', text);
//     return (dispatch,getState)=>{
//         const {text}=getState();
//         console.log('txtx=',text);
//         // dispatch(addStar());
//     };
// }

