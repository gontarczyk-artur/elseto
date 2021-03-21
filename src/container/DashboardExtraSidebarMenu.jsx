'use strict';

import * as React from 'react';

import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const DashboardExtraSidebarMenu = props => {
    return (
        <List component="nav" aria-label="">
            <ListItem button>
                <ListItemText primary="Add comp" />
            </ListItem>
        </List>
    );
}

const mapStateToProps = state => ({
    store: state.store
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardExtraSidebarMenu);
