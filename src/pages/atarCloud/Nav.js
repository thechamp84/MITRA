import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Paper, Grid, List, ListItem, Link } from '@material-ui/core';
import logo from '../../assests/atarCloudImages/atarcloud.png';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  AppBar: {
    backgroundColor: "#006687",
    backgroundSize: "cover",
    padding:'1%',
  },
  list:{
    display:"inline",
    color:'#fff'
  }
}));

const Nav = (props) => {

  const classes = useStyles();

  return (

    <AppBar position="static" color="default" className={classes.AppBar}>
      <Grid container  >
      <Grid item sm={12} xs={12}>
        <Toolbar>
            <Grid item xs={4}>
              <img src={logo} width="100px"/>
            </Grid>
            <Grid item xs={8}>
                <List className={classes.list}>
                <Link href="/about"><ListItem className={classes.list}>About us</ListItem></Link>
                  <Link href="/layout2"><ListItem className={classes.list}>Find your home</ListItem></Link>
                  <Link href="/listyourproperty"><ListItem className={classes.list}>List your property</ListItem></Link>
                  <Link href="/layout2"><ListItem className={classes.list}>Manage your property</ListItem></Link>
                  <Link href="/layout2"><ListItem className={classes.list}>Login</ListItem></Link>
                  <Link href="/layout2"><ListItem className={classes.list}>Signup</ListItem></Link>
                  <Link href="/layout2"><ListItem className={classes.list}>Contact us</ListItem></Link>
                </List>
            </Grid>
        </Toolbar>
      </Grid>
      </Grid>
    </AppBar>
  );
}

export default Nav;