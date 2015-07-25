import { ROUTE_CHANGE,TOGGLE_LOADING } from '../constants/ActionTypes';

import page from 'page';

const initialState = {
	currentView: 'master',
	isLoading: false,
	loadingMsg: ''
};


export default function routeReducer (state=initialState, action) {

	switch (action.type){

        case ROUTE_CHANGE:
            return

        case TOGGLE_LOADING:
            return
            
        default:
            return state;
    }
}