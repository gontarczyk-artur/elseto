import { createStore } from 'redux';

import { reducers } from './reducer';


const initialState = {
    store: { isConnected: false }
};

function configureStore() {
    return createStore(reducers, initialState);
}

export const store = configureStore();
