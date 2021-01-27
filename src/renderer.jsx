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

import OfflineView from './container/OfflineView';
import OnlineView from './container/OnlineView';

import { store } from './store';

import './style/style.scss';

const Root = () => {
    return (
        <Provider store={store}>
            <OfflineView />
            <OnlineView />
        </Provider>
    );
}

ReactDOM.render(<Root />, document.querySelector('#root'));
