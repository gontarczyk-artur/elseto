'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import OfflineHomePage from './page/OfflineHomePage';

import { store } from './module/redux/store';

function Root() {
    return (
        <Provider store={store}>
            <OfflineHomePage />
        </Provider>
    );
}

ReactDOM.render(<Root />, document.querySelector('#root'));
