'use strict';

import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';


class OfflineHomePage extends React.Component {
    render() {
        return (
            <Container fixed>
                <Grid
                    container
                    spacing={0}
                    direction="row"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}
                >
                    <TextField
                        label="Server address"
                        id="outlined-size-small"
                        defaultValue="http://localhost:9200"
                        variant="outlined"
                        size="small" 
                        style={{'width': '350px', 'margin': '0 20px 0 0'}}
                    />
                    <Button variant="contained" color="primary">Connect</Button>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    store: state.store
});

const mapDispatchToProps = {};

const OfflineHomePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OfflineHomePage);

export default OfflineHomePageContainer;
