'use strict';

import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/css/OverlayScrollbars.css';

import { connect } from 'react-redux';

import AppTopBar from '../component/AppTopBar';


const drawerWidth = 72;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
    iconButtonRoot: {
        marginLeft: '12px',
        marginTop: theme.spacing(2)
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
        marginLeft: 0,
    },
    contentPadding: {
        padding: theme.spacing(3)
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
            <AppTopBar onClick={handleToggleDrawer} isOpen={isOpen} title='Dashboard' />

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
                        <Typography paragraph>Dashboard</Typography>
                        <Typography paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in consequat justo. Vivamus nec dolor nibh. Fusce laoreet volutpat metus, in sodales nunc luctus vel. In tortor mauris, elementum sit amet libero ut, consectetur pellentesque velit. Proin cursus, metus sit amet pretium gravida, mauris erat luctus neque, et bibendum elit neque sed dui. Praesent ornare, ante facilisis fermentum vulputate, risus justo bibendum leo, eget pulvinar nisl enim vel leo. Ut ac maximus eros. Donec luctus lectus sed tellus condimentum vulputate in nec ante. Nullam tempus gravida ullamcorper. Vivamus eu felis et odio condimentum ullamcorper in ac tortor.</Typography>
                        <Typography paragraph>Aliquam non orci quam. Etiam metus nisl, scelerisque ut condimentum ut, fringilla sed odio. Phasellus egestas accumsan libero quis iaculis. Nulla sed urna eget tortor posuere tincidunt. Mauris blandit volutpat nulla, ut porta lectus dictum eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed finibus tortor et odio lacinia fermentum. Aliquam gravida ut odio sed facilisis. In sit amet leo non nunc molestie malesuada. Ut fermentum at ligula sit amet consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sapien ex, sollicitudin et fermentum eget, lobortis vitae augue. Nulla sit amet diam sed neque mattis mattis non ac orci.</Typography>
                        <Typography paragraph>Proin id ligula eget mauris dictum aliquam. Cras vehicula ipsum id mauris fringilla iaculis. Etiam lobortis elit vel egestas mattis. Donec fringilla ultricies enim. Quisque hendrerit aliquam velit, at faucibus mi tempus nec. Cras ac fermentum tortor. In at diam id nulla porttitor tristique. Curabitur scelerisque convallis feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed bibendum ullamcorper ultricies.</Typography>
                        <Typography paragraph>Vivamus sed odio suscipit, pulvinar nunc condimentum, placerat nulla. Nam cursus nibh ac diam feugiat pharetra. Pellentesque congue ligula a gravida commodo. Nunc tincidunt pharetra placerat. Vivamus ultrices metus nec mi tincidunt, nec pretium dolor faucibus. Ut elit sem, dignissim non sodales at, dignissim id leo. Proin aliquam, enim tempor aliquam finibus, ex justo gravida nisl, vitae bibendum dui tortor non augue. Nulla eu eros commodo, viverra mi in, suscipit arcu. Integer odio velit, feugiat vel mi ac, accumsan tristique mauris. Ut ac fermentum mauris. Quisque luctus vel sapien pellentesque posuere. Vivamus id magna justo. Duis bibendum enim quis justo tincidunt cursus.</Typography>
                        <Typography paragraph>Praesent erat urna, maximus nec felis ac, posuere consectetur tortor. Aenean finibus nisl quis arcu placerat commodo. Aenean et turpis eget tellus ornare pharetra auctor ut libero. Sed consectetur risus id mauris auctor, id tristique risus tempus. In hac habitasse platea dictumst. Vestibulum rutrum ut nunc quis viverra. Fusce ut pretium risus. Fusce erat mi, sagittis nec pharetra in, convallis in odio. Aenean nec mauris sed mi suscipit gravida. Mauris quis arcu accumsan, mattis nisl nec, suscipit justo. Suspendisse pellentesque vulputate semper.</Typography>
                    </div>
                </OverlayScrollbarsComponent>
            </main>
        </div>
    ) : null;
}

const mapStateToProps = state => ({
    store: state.store
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OnlineView);
