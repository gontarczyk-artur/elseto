'use strict';

import * as React from 'react';

import { connect } from 'react-redux';

const DashboardContent = props => {
    return (
        <div>Dashboard Content</div>
    );
}

const mapStateToProps = state => ({
    store: state.store
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContent);
