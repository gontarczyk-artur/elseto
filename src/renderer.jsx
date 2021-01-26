'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import OfflineHomePage from './page/OfflineHomePage';
import OnlineHomePage from './page/OnlineHomePage';

import { store } from './module/redux/store';

import './style/style.scss';

function Root() {
    return (
        <Provider store={store}>
            <OfflineHomePage />
            <OnlineHomePage />
        </Provider>
    );
}

ReactDOM.render(<Root />, document.querySelector('#root'));
