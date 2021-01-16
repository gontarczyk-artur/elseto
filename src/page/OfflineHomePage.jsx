'use strict';

import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import { connect } from 'react-redux';

function OfflineHomePage() {
    const [address, setAddress] = React.useState('http://localhost:9200');
    const [version, setVersion] = React.useState(7.10);
    const handleAddressChange = event => setAddress(event.target.value);
    const handleVersionChange = event => setVersion(event.target.value);
    const onConnect = () => {}

    return (
        <Container fixed>
            <Grid container spacing={0} direction="row" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
                <TextField label="Server address" defaultValue={address} onChange={handleAddressChange} variant="outlined" size="small"  style={{'width': '300px'}} />
                
                <TextField select value={version} onChange={handleVersionChange} margin="normal" variant="outlined" size="small" style={{'margin': '0 20px'}}>
                    <MenuItem key={7.10} value={7.10}>7.10</MenuItem>
                </TextField>

                <Button variant="contained" color="primary" onClick={onConnect}>Connect</Button>
            </Grid>
        </Container>
    )
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
