'use strict';

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(() => ({
    drawer: {
        width: '72px',
        flexShrink: 0
    },
    drawerPaper: {
        width: '72px'
    },
    drawerContainer: {
        overflow: 'auto'
    }
}));

const SideBar = props => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar>
                <IconButton edge='start'>
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            <div className={classes.drawerContainer}>
                {props.children}
            </div>
        </Drawer>
    );
}

export default SideBar;
