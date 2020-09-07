import React, { Component } from 'react';
import { Typography, makeStyles, Paper, InputBase, IconButton } from '@material-ui/core';
// import { SearchIcon } from '@material-ui/icons/Search';
// import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        margin: '8px',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

export default function Home() {
    const styles = useStyles();

    return (
        <div>
            {/* <Typography variant="h4">Seach for a movie!</Typography> */}
            <Paper component="form" className={styles.root}>
                <InputBase 
                    className={styles.input} 
                    placeholder="Seach for a movie" 
                    inputProps={{'aria-label': 'search for a movie'}}
                />
            </Paper> 
        </div>
    )
}