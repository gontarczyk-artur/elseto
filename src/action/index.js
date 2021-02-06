'use strict';

import { ES_CONNECT, SWITCH_MAIN_CONTENT, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../action-type';

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

export const showNotification = data => ({
    type: SHOW_NOTIFICATION,
    payload: {
        snackbar: {
            isOpen: true,
            message: data.message
        }
    }
});

export const hideNotification = () => ({
    type: HIDE_NOTIFICATION,
    payload: {
        snackbar: {
            isOpen: false,
            message: ''
        }
    }
});
