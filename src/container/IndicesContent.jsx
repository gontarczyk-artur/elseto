'use strict';

import * as React from 'react';

import { connect } from 'react-redux';

const IndicesContent = props => {
    return (
        <div>Indices Content</div>
    );
}

const mapStateToProps = state => ({
    store: state.store
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(IndicesContent);
