'use strict';

import * as React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    drawerPaper: {
        padding: theme.spacing(1)
    }
}));

const OnlineHomePage = props => {
    const classes = useStyles();

    return props.store.isConnected ? (
        <div className={classes.root}>
            <Drawer variant='permanent' classes={{paper: classes.drawerPaper}}>
                <Tooltip placement='right' title='Home'>
                    <IconButton>
                        <HomeIcon />
                    </IconButton>
                </Tooltip>
            </Drawer>
        </div>
    ) : null;
}

const mapStateToProps = state => ({
    store: state.store
});

const mapDispatchToProps = {};

const OnlineHomePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OnlineHomePage);

export default OnlineHomePageContainer;
