'use strict';

import { combineReducers } from 'redux';

import { ES_CONNECT, SWITCH_MAIN_CONTENT, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../action-type';


const reducer = (state={}, action) => {
    switch(action.type) {
        case ES_CONNECT:
        case SWITCH_MAIN_CONTENT:
        case SHOW_NOTIFICATION:
        case HIDE_NOTIFICATION:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export const reducers = combineReducers({
    store: reducer
});
