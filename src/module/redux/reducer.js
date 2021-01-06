'use strict';

import { combineReducers } from 'redux';


const elseto = (state={}, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export const reducers = combineReducers({
    store: elseto
});
