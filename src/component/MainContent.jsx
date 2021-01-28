'use strict';

import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/css/OverlayScrollbars.css';

const drawerWidth = 72;

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    mainContent: {
        flexGrow: 1,
        padding: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        overflow: 'auto',
        height: 'calc(100vh - 65px)',
        marginTop: '65px'
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0
    },
    contentPadding: {
        padding: theme.spacing(3)
    }
}));

const MainContent = props => {
    const classes = useStyles();

    return (
        <main className={clsx(classes.mainContent, {
            [classes.contentShift]: props.isOpen,
        })}>
            <OverlayScrollbarsComponent
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    overflow: 'auto'
                }}
                options={{
                    scrollbars: {
                        autoHide: 'leave'
                    }
                }}
            >
                <div className={classes.contentPadding}>
                    {props.children}
                </div>
            </OverlayScrollbarsComponent>
        </main>
    );
}

export default MainContent;