'use strict';

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';

const drawerWidth = 72;

const useStyles = makeStyles(() => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
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
            variant='persistent'
            anchor='left'
            open={props.isOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                {props.children}
            </div>
        </Drawer>
    );
}

export default SideBar;
