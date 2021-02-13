'use strict';

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
        <IconButton classes={{root: classes.iconButtonRoot}} disabled={props.isDisabled} onClick={props.onClick} title={props.title}>
            {props.children}
        </IconButton>
    );
}

export default SideBarMenuItem;
