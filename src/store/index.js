import { createStore } from 'redux';

import { reducers } from '../reducer';


const initialState = {
    store: {
        isConnected: false,
        title: null,
        container: null
    }
};

function configureStore() {
    return createStore(reducers, initialState);
}

export const store = configureStore();
