'use strict';

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    textField: {
        margin: '0 20px'
    }
}));

const ServerVersion = props => {
    const classes = useStyles();

    return (
        <TextField 
            select 
            disabled={props.disabled} 
            value={props.value} 
            onChange={props.onChange} 
            margin='normal' 
            variant='outlined' 
            size='small' 
            className={classes.textField}>
                {props.availableVersions.map(versionValue => {
                    return <MenuItem key={`version-${versionValue}`} value={versionValue}>{versionValue}</MenuItem>
                })}
        </TextField>
    )
}

export default ServerVersion;
