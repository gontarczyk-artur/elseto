'use strict';

import * as React from 'react';

import { connect } from 'react-redux';

const OnlineHomePage = props => {
    return props.store.isConnected ? (
        <div></div>
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
