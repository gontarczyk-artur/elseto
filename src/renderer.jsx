'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import OfflineView from './container/OfflineView';
import OnlineView from './container/OnlineView';
import Notification from './container/Notification';

import { store } from './store';

import './style/style.scss';

const theme = createMuiTheme({
    typography: {
        'fontFamily': '"Open Sans"'
    }
});

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <OfflineView />
                <OnlineView />
                <Notification />
            </Provider>
        </ThemeProvider>
    );
}

ReactDOM.render(<Root />, document.querySelector('#root'));
