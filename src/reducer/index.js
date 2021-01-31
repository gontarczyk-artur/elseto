'use strict';

import { combineReducers } from 'redux';

import { ES_CONNECT, SWITCH_MAIN_CONTENT } from '../action-type';


const reducer = (state={}, action) => {
    switch(action.type) {
        case ES_CONNECT:
        case SWITCH_MAIN_CONTENT:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export const reducers = combineReducers({
    store: reducer
});
