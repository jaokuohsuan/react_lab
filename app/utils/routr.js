var page = require('page');
import * as UserAction from '../action/UserAction';

export default class Routr {

	constructor( store ) {
        
		this.doAction = function(action){
			return function(){
				return store.dispatch(UserAction[action].apply( null, arguments));
			}
		}

        var routines = require('../routing.js');

        routines.forEach((item) => {
            page( item.path, this[item.handler].bind(this) );
        })
        setTimeout( () => {

                console.log('Client Router 啟動');
                //init router
                page({dispatch: true});
        }, 0)
	}

    getIndex(ctx){
        console.log('index - ',ctx.path);
    }

    editOneThread(ctx) {
        //remember ctx.params.id is String
        var id = +ctx.params.id;
        return this.doAction('changeRoute')('editing',id)
        
    }
}