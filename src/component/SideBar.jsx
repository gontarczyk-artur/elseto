'use strict';

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';

const drawerWidth = 72;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: 'transparent',
        borderRight: 'none'
    },
    drawerContainer: {
        overflow: 'auto'
    },
    iconButtonRoot: {
        marginLeft: '12px',
        marginTop: theme.spacing(2)
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
                <Tooltip title='Dashboard' placement='right'>
                    <IconButton classes={{root: classes.iconButtonRoot}} disabled>
                        <DashboardIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </Drawer>
    );
}

export default SideBar;
