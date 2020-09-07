import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function HeaderBar() {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={styles.title}>
                        The Shoppies Nominator
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}