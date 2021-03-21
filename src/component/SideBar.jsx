'use strict';

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
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
                <IconButton edge="start" onClick={props.toggleExtraSideBar} disabled={props.isDisabled} title="Toggle Extra Side Bar">
                    {props.isExtraSideBarOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />}
                </IconButton>
            </Toolbar>

            <div className={classes.drawerContainer}>
                {props.children}
            </div>
        </Drawer>
    );
}

export default SideBar;
