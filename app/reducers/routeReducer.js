import { ROUTE_CHANGE,TOGGLE_LOADING } from '../constants/ActionTypes';

import page from 'page';

const initialState = {
	currentView: 'index',
	isLoading: false,
	loadingMsg: '',
    data: ''
};


export default function routeReducer (state=initialState, action) {

	switch (action.type){

        case ROUTE_CHANGE:
            console.log('action.view=',action.view);
       
            return {
                ...state,
                currentView: action.view,
                data: action.data
            }

        case TOGGLE_LOADING:

            return {
                ...state,
                loadingMsg: action.msg,
                isLoading: action.show

            }

        default:
            return state;
    }
}