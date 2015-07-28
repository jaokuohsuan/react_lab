import { ADD_STAR, REMOVE_SATR, ADD_THREAD,CHANGE_MARK,EDIT_THREAD,SAVE_THREAD,REMOVE_THREAD,TOGGLE_LOADING,ROUTE_CHANGE} from '../constants/ActionTypes';

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
      text,
    };
}

export function saveThred(id,text) {
    return {
      type: SAVE_THREAD,
      id,
      text,
    };
}


//router action

export function changeRoute(view,data) {
  return {
    type: ROUTE_CHANGE,
    view,
    data
  };
}


export function toggleLoading( show:Boolean, msg:String ) {

  return {
    type: TOGGLE_LOADING,
    msg,
    show
  };
}


