'use strict';

import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import LoadingButton from '@material-ui/lab/LoadingButton';
import MenuItem from '@material-ui/core/MenuItem';

import { connect } from 'react-redux';

function OfflineHomePage() {
    const [address, setAddress] = React.useState('http://localhost:9200');
    const [version, setVersion] = React.useState(7.10);
    const [loadingButtonPending, setLoadingButtonPending] = React.useState(false);
    const handleAddressChange = event => setAddress(event.target.value);
    const handleVersionChange = event => setVersion(event.target.value);
    const handleConnect = async () => {
        setLoadingButtonPending(true);

        switch(version) {
            case 7.1:
                const { Client } = require('es-client-7.10');
                const client = new Client({ node: address });
                let info = await client.info();
                if (info.statusCode === 200) {
                    setLoadingButtonPending(false);
                }
                break;
        }
    }

    return (
        <Container fixed>
            <Grid container spacing={0} direction='row' alignItems='center' justify='center' style={{ minHeight: '100vh' }}>
                <TextField label='Server address' defaultValue={address} onChange={handleAddressChange} variant='outlined' size='small' style={{'width': '300px'}} />
                
                <TextField select value={version} onChange={handleVersionChange} margin='normal' variant='outlined' size='small' style={{'margin': '0 20px'}}>
                    <MenuItem key={7.10} value={7.10}>7.10</MenuItem>
                </TextField>

                <LoadingButton variant='contained' color='primary' pending={loadingButtonPending} onClick={handleConnect}>Connect</LoadingButton>
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
