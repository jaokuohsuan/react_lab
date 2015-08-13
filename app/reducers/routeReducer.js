import { ROUTE_CHANGE,TOGGLE_LOADING,ROUTE_PATH } from '../constants/ActionTypes';

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
            // page('/');
       
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
        case ROUTE_PATH:

            return {
                ...state,
                loadingMsg: action.msg,
                isLoading: action.show
            }
        
        default:
            return state;
    }
}