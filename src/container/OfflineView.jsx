'use strict';

import * as React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { connect } from 'react-redux';

import { getCurrentVersion, getAllVersions } from 'es-client-version';
import { esConnect } from '../action';

import ServerAddress from '../component/ServerAddress';
import ServerVersion from '../component/ServerVersion';
import ConnectButton from '../component/ConnectButton';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3)
    },
    grid: {
        minHeight: '100vh'
    }
}));

const OfflineView = props => {
    const classes = useStyles();

    const [address, setAddress] = React.useState('http://localhost:9200');
    const [version, setVersion] = React.useState(getCurrentVersion);
    const [loadingButtonPending, setLoadingButtonPending] = React.useState(false);
    const [loadingButtonDisabled, setLoadingButtonDisabled] = React.useState(false);
    const handleAddressChange = event => {
        let fieldValue = event.target.value;
        setAddress(event.target.value);
        if (fieldValue === '') {
            setLoadingButtonDisabled(true);
        } else {
            setLoadingButtonDisabled(false);
        }
    };
    const handleVersionChange = event => setVersion(event.target.value);
    const handleConnect = async () => {
        setLoadingButtonPending(true);

        let es_info_response = {};
        switch(version) {
            case '7.10':
                try {
                    let { Client: Client_7_10 } = require('es-client-7.10');
                    let client_7_10 = new Client_7_10({ node: address });
                    es_info_response = await client_7_10.info();
                    if (es_info_response.statusCode === 200) {
                        setLoadingButtonPending(false);
                        props.esConnect({
                            esClient: client_7_10,
                            address,
                            version
                        });
                    }
                } catch(error) {
                    setLoadingButtonPending(false);
                    console.log(error);
                }
                break;
        }
    };

    return !props.store.isConnected ? (
        <Container fixed>
            <Grid container spacing={0} direction='row' alignItems='center' justify='center' className={classes.grid}>
                <Paper className={classes.paper} elevation={2}>
                    <ServerAddress disabled={loadingButtonPending} defaultValue={address} onChange={handleAddressChange} />
                    <ServerVersion disabled={loadingButtonPending} value={version} onChange={handleVersionChange} availableVersions={getAllVersions} />
                    <ConnectButton pending={loadingButtonPending} disabled={loadingButtonDisabled} onClick={handleConnect} />
                </Paper>
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

export default connect(mapStateToProps, mapDispatchToProps)(OfflineView);
