'use strict';

import { ES_CONNECT } from '../action-type';

export const esConnect = data => ({
    type: ES_CONNECT,
    payload: {
        isConnected: true,
        ...data
    }
});
