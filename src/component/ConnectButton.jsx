'use strict';

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoadingButton from '@material-ui/lab/LoadingButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
    button: {
        height: '40px'
    }
}));

const ConnectButton = props => {
    const classes = useStyles();

    return (
        <LoadingButton 
            className={classes.button} 
            variant='contained' 
            color='primary' 
            pending={props.pending} 
            disabled={props.disabled} 
            onClick={props.onClick} 
            disableElevation>
                <ArrowForwardIcon />
        </LoadingButton>
    );
}

export default ConnectButton;
