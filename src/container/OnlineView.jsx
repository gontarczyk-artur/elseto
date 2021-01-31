'use strict';

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListIcon from '@material-ui/icons/List';

import { connect } from 'react-redux';

import { switchMainContent } from '../action';

import TopBar from '../component/TopBar';
import SideBar from '../component/SideBar';
import SideBarMenuItem from '../component/SidebarMenuItem';
import MainContent from '../component/MainContent';

import DashboardContent from './DashboardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

const OnlineView = props => {
    const classes = useStyles();

    const [isOpen, setOpen] = React.useState(false);

    const handleToggleDrawer = () => {
        setOpen(!isOpen);
    };

    const switchDashboardContent = () => {
        props.switchMainContent({
            title: 'Dashboard',
            container: <DashboardContent />
        });
    };

    return props.store.isConnected ? (
        <div className={classes.root}>
            <TopBar onClick={handleToggleDrawer} isOpen={isOpen} title={props.store.title} />
            <SideBar isOpen={isOpen}>
                <SideBarMenuItem title='Dashboard' onClick={switchDashboardContent}>
                    <DashboardIcon />
                </SideBarMenuItem>
            </SideBar>
            <MainContent isOpen={isOpen}>
                {props.store.container}
            </MainContent>
        </div>
    ) : null;
}

const mapStateToProps = state => ({
    store: state.store
});

const mapDispatchToProps = {
    switchMainContent
};

export default connect(mapStateToProps, mapDispatchToProps)(OnlineView);
