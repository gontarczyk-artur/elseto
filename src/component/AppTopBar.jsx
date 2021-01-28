'use strict';

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        boxShadow: 'none',
        backgroundColor: '#fff',
        color: '#000'
    },
    toolbarTypographyH6: {
        marginLeft: theme.spacing(3)
    }
}));

const AppTopBar = props => {
    const classes = useStyles();

    return (
        <AppBar position='fixed' className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color='inherit'
                    aria-label='open drawer'
                    onClick={props.onClick}
                    edge='start'
                >
                    {props.isOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>

                <Typography variant='h6' noWrap className={classes.toolbarTypographyH6}>
                    {props.title}
                </Typography>
            </Toolbar>
            <Divider />
        </AppBar>
    );
}

export default AppTopBar;
