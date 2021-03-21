'use strict';

import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        width: '160px',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -232
    },
    sidebarShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0
    }
}));

const ExtraSideBar = props => {
    const classes = useStyles();

    return (
        <Paper square elevation={3} className={clsx(classes.sidebar, {
            [classes.sidebarShift]: props.isOpen,
        })}>
            <Toolbar>
                <Typography variant='h6' noWrap>
                    {props.title}
                </Typography>
            </Toolbar>
            <Divider />

            {props.children}
        </Paper>
    );
}

export default ExtraSideBar;
