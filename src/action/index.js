'use strict';

import { ES_CONNECT, SWITCH_MAIN_CONTENT } from '../action-type';

export const esConnect = data => ({
    type: ES_CONNECT,
    payload: {
        isConnected: true,
        ...data
    }
});

export const switchMainContent = data => ({
    type: SWITCH_MAIN_CONTENT,
    payload: {
        title: data.title,
        container: data.container
    }
});
