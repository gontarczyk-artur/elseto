'use strict';

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    textField: {
        width: '300px'
    }
}));

const ServerAddress = props => {
    const classes = useStyles();

    return (
        <TextField 
            label='Server address' 
            disabled={props.disabled} 
            defaultValue={props.defaultValue} 
            onChange={props.onChange} 
            variant='outlined' 
            size='small' 
            className={classes.textField} />
    )
}

export default ServerAddress;
