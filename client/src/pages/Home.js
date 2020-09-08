import React, { Component } from 'react';
import { makeStyles, Paper, InputBase, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
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

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            searchResults: {},
            searchTitle: ""
        }
    }

    // Handle Submit
    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        const searchMovie = {searchTitle: data.searchTitle};
        console.log("fetching..")

        fetch('/api/search', {
            method: 'POST',
            body: JSON.stringify(searchMovie),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
        .then(res => res.json())
        .then(searchResults => {
            this.setState({searchResults})
            console.log(searchResults);
        })
        .catch(err => console.error(err))
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({searchTitle: event.target.value})
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                {/* <Typography variant="h4">Seach for a movie!</Typography> */}
                <Paper component="form" className={classes.root}>
                    <InputBase 
                        className={classes.input} 
                        placeholder="Seach for a movie" 
                        inputProps={{'aria-label': 'search for a movie'}}
                        onChange={this.handleInputChange}
                    />
                    <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
                </Paper>
            </div>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(useStyles)(Home);