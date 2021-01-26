'use strict';

const { Menu } = require('electron').remote;
const menu = new Menu();

// Update titlebar including menu and title
const customTitleBar = require('custom-electron-titlebar');
const elsetoTitleBar = new customTitleBar.Titlebar({
    backgroundColor: customTitleBar.Color.BLACK
});
elsetoTitleBar.updateTitle('ELSETO');
elsetoTitleBar.updateMenu(menu);

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
