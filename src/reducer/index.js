'use strict';

import { combineReducers } from 'redux';

import { ES_CONNECT } from '../action-type';


const reducer = (state={}, action) => {
    switch(action.type) {
        case ES_CONNECT:
            return action.payload;
        default:
            return state;
    }
}

export const reducers = combineReducers({
    store: reducer
});
