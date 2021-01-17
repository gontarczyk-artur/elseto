'use strict';

import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import LoadingButton from '@material-ui/lab/LoadingButton';
import MenuItem from '@material-ui/core/MenuItem';

import { connect } from 'react-redux';

import { getCurrentVersion, getAllVersions } from '../module/es-client-version';
import { esConnect } from '../module/redux/action';

const OfflineHomePage = props => {
    const [address, setAddress] = React.useState('http://localhost:9200');
    const [version, setVersion] = React.useState(getCurrentVersion);
    const [loadingButtonPending, setLoadingButtonPending] = React.useState(false);
    const handleAddressChange = event => setAddress(event.target.value);
    const handleVersionChange = event => setVersion(event.target.value);
    const handleConnect = async () => {
        setLoadingButtonPending(true);

        let es_info_response = {};
        switch(version) {
            case '7.10':
                let { Client: Client_7_10 } = require('es-client-7.10');
                let client_7_10 = new Client_7_10({ node: address });
                es_info_response = await client_7_10.info();
                if (es_info_response.statusCode === 200) {
                    setLoadingButtonPending(false);
                    props.esConnect({
                        esClient: client_7_10
                    });
                }
                break;
        }
    }

    return !props.store.isConnected ? (
        <Container fixed>
            <Grid container spacing={0} direction='row' alignItems='center' justify='center' style={{ minHeight: '100vh' }}>
                <TextField label='Server address' defaultValue={address} onChange={handleAddressChange} variant='outlined' size='small' style={{'width': '300px'}} />

                <TextField select value={version} onChange={handleVersionChange} margin='normal' variant='outlined' size='small' style={{'margin': '0 20px'}}>
                    {getAllVersions.map(versionValue => {
                        return <MenuItem key={`version-${versionValue}`} value={versionValue}>{versionValue}</MenuItem>
                    })}
                </TextField>

                <LoadingButton variant='contained' color='primary' pending={loadingButtonPending} onClick={handleConnect}>Connect</LoadingButton>
            </Grid>
        </Container>
    ) : null;
}

const mapStateToProps = state => ({
    store: state.store
});

const mapDispatchToProps = {
    esConnect
};

const OfflineHomePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OfflineHomePage);

export default OfflineHomePageContainer;
