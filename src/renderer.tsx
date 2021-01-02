import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

const Index = () => {
    return (
        <div>
            <p>Hello React World!</p>
            <Button variant="contained" color="primary">Press me!</Button>
        </div>
    )
}

ReactDOM.render(<Index />, document.body);
