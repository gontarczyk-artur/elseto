'use strict';

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CloseIcon from '@material-ui/icons/Close';

import { connect } from 'react-redux';

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
        width: '72px',
        flexShrink: 0,
    },
    drawerPaper: {
        width: '72px'
    },
    drawerContainer: {
        overflow: 'auto',
        marginTop: theme.spacing(3)
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    listItemButtonGutter: {
        paddingLeft: '24px',
        paddingRight: '24px'
    },
    listItemIconRoot: {
        minWidth: '24px'
    },
    toolbarTypographyH6: {
        marginLeft: theme.spacing(3)
    }
}));

const OnlineView = props => {
    const classes = useStyles();

    const [isOpen, setOpen] = React.useState(false);

    const handleToggleDrawer = () => {
        setOpen(!isOpen);
    };

    return props.store.isConnected ? (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
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
                    <List>
                        <ListItem button key='Dashboard' classes={{ gutters: classes.listItemButtonGutter }} selected>
                            <Tooltip title='Dashboard' placement='right'>
                                <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
                                    <DashboardIcon />
                                </ListItemIcon>
                            </Tooltip>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    ) : null;
}

const mapStateToProps = state => ({
    store: state.store
});

const mapDispatchToProps = {};

export default connect(mapStateToProps,mapDispatchToProps)(OnlineView);
