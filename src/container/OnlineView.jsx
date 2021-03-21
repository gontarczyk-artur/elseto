'use strict';

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListIcon from '@material-ui/icons/List';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { connect } from 'react-redux';

import { switchMainContent } from '../action';

import SideBar from '../component/SideBar';
import ExtraSideBar from '../component/ExtraSideBar';
import SideBarMenuItem from '../component/SidebarMenuItem';
import MainContent from '../component/MainContent';

import DashboardContent from './DashboardContent';
import IndicesContent from './IndicesContent';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

const OnlineView = props => {
    const classes = useStyles();

    const [isExtraSideBarOpen, setExtraSideBarOpen] = React.useState(false);

    const handleToggleExtraSideBar = () => {
        setExtraSideBarOpen(!isExtraSideBarOpen);
    }

    const sidebarMenu = [
        {
            title: 'Dashboard',
            container: <DashboardContent />,
            icon: <DashboardIcon />,
            extraSideBarMenu: [
                {
                    text: 'Add component'
                }
            ]
        },
        {
            title: 'Indices',
            container: <IndicesContent />,
            icon: <ListIcon />,
            extraSideBarMenu: [
                {
                    text: 'Switch view'
                }
            ]
        }
    ];

    return props.store.isConnected ? (
        <div className={classes.root}>
            <SideBar className={classes.sideBar} toggleExtraSideBar={handleToggleExtraSideBar} isDisabled={!props.store.title} isExtraSideBarOpen={isExtraSideBarOpen}>
                {sidebarMenu.map(linkItem => {
                    let onClickHandle = () => {
                        setExtraSideBarOpen(true);
                        props.switchMainContent(linkItem);
                    };

                    let isDisabled = linkItem.title === props.store.title;
                    return (
                        <SideBarMenuItem title={linkItem.title} onClick={onClickHandle} isDisabled={isDisabled}>
                            {linkItem.icon}
                        </SideBarMenuItem>
                    );
                })}
            </SideBar>

            <ExtraSideBar isOpen={isExtraSideBarOpen} title={props.store.title} menu={props.store.extraSideBarMenu} />

            <MainContent isExtraSideBarOpen={isExtraSideBarOpen}>
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
