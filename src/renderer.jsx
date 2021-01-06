'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import OfflineHomePage from './page/OfflineHomePage';

import { store } from './module/redux/store';

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <OfflineHomePage />
            </Provider>
        );
    }
}

console.log('store = ', store);

ReactDOM.render(<Root />, document.querySelector('#root'));
