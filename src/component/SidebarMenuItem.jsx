'use strict';

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    iconButtonRoot: {
        marginLeft: '12px',
        marginTop: theme.spacing(2)
    }
}));

const SideBarMenuItem = props => {
    const classes = useStyles();

    return (
        <Tooltip title={props.title} placement='right'>
            <IconButton classes={{root: classes.iconButtonRoot}} disabled={props.isDisabled} onClick={props.onClick}>
                {props.children}
            </IconButton>
        </Tooltip>
    );
}

export default SideBarMenuItem;
