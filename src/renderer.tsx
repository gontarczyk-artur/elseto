import * as React from 'react';
import * as ReactDOM from 'react-dom';

import OfflineHomePage from './page/OfflineHomePage';


class Root extends React.Component {
    render() {
        return <OfflineHomePage />
    }
}

ReactDOM.render(<Root />, document.querySelector('#root'));
