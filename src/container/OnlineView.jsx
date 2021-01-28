'use strict';

import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CloseIcon from '@material-ui/icons/Close';

import { connect } from 'react-redux';

const drawerWidth = 72;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        boxShadow: 'none',
        backgroundColor: '#fff',
        color: '#000'
    },
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
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbarTypographyH6: {
        marginLeft: theme.spacing(3)
    },
    iconButtonRoot: {
        marginLeft: '12px',
        marginTop: theme.spacing(2)
    },
    mainContent: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    toolbar: theme.mixins.toolbar
}));

const OnlineView = props => {
    const classes = useStyles();

    const [isOpen, setOpen] = React.useState(false);

    const handleToggleDrawer = () => {
        setOpen(!isOpen);
    };

    return props.store.isConnected ? (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        onClick={handleToggleDrawer}
                        edge='start'
                    >
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>

                    <Typography variant='h6' noWrap className={classes.toolbarTypographyH6}>
                        Dashboard
                    </Typography>
                </Toolbar>
                <Divider />
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant='persistent'
                anchor='left'
                open={isOpen}
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

            <main className={clsx(classes.mainContent, {
                [classes.contentShift]: isOpen,
            })}>
                <div className={classes.toolbar} />
                <Typography paragraph>Dashboard</Typography>
            </main>
        </div>
    ) : null;
}

const mapStateToProps = state => ({
    store: state.store
});

const mapDispatchToProps = {};

export default connect(mapStateToProps,mapDispatchToProps)(OnlineView);
