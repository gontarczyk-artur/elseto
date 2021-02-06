'use strict';

import * as React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

import { connect } from 'react-redux';

import { showNotification, hideNotification } from '../action';

const Notification = props => {
    const handleCloseSnackbar = () => {
        props.hideNotification();
    }

    return (
        <Snackbar 
            open={props.store.snackbar.isOpen} 
            message={props.store.snackbar.message} 
            autoHideDuration={3000} 
            onClose={handleCloseSnackbar} />
    );
}

const mapStateToProps = state => ({
    store: state.store
});

const mapDispatchToProps = {
    hideNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
