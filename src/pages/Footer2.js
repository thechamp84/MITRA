import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, List, ListItem, Link, Divider } from "@material-ui/core";
import ftr_logo from "../assests/fotr_logo.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  AppBar: {
    backgroundColor: "#22aa6f",
    backgroundSize: "cover",
    padding: "1%",
  },
  list: {
    display: "inline",
    color: "#fff",
    textDecoration: "none",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ backgroundColor: "#1e8e5b" }}
      >
        <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <div>
            {/* <h2 style={{fontSize:"40px", textAlign:"center", color:"#1e8e5b",marginTop:"7%"}}>Follow us for all recent updates</h2>   */}
            <Typography
              style={{ textAlign: "center", color: "#fff", marginTop: "7%" }}
            >
              Follow us for all recent updates
            </Typography>
          </div>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}></Grid>

        <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          style={{
            color: "#fff",
            marginTop: "1%",
            textAlign: "center",
            marginBottom: "3%",
          }}
        >
          <div>
            <TwitterIcon /> <InstagramIcon /> <LinkedInIcon />
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
      </Grid>
      <Divider />

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ backgroundColor: "#1e8e5b" }}
      >
        <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          lg={8}
          style={{ marginTop: "3%", textAlign: "center" }}
        >
          <div>
            <List className={classes.list}>
              <Link href="/about">
                <ListItem className={classes.list}>About us</ListItem>
              </Link>
              <Link href="/manageyourproperty">
                <ListItem className={classes.list}>
                  Manage your property
                </ListItem>
              </Link>
              <Link href="http://goatar.com/#findYourHome" target="_blank">
                <ListItem className={classes.list}>Find your home</ListItem>
              </Link>
              <Link href="http://goatar.com/listyourproperty" target="_blank">
                <ListItem className={classes.list}>List your property</ListItem>
              </Link>
              <Link href="/">
                <ListItem className={classes.list}>Login</ListItem>
              </Link>
              <Link href="/">
                <ListItem className={classes.list}>Signup</ListItem>
              </Link>
              <Link href="/contact">
                <ListItem className={classes.list}>Contact us</ListItem>
              </Link>
            </List>
          </div>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}></Grid>

        <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          lg={8}
          style={{
            color: "#fff",
            marginTop: "2%",
            textAlign: "center",
            marginBottom: "2%",
            fontSize: "10px",
          }}
        >
          <div>
            <span>
              2021 Atar Limited. All rights reserved. Company number 08845607.
              Riyadh, Saudi Arabia, AlMalqa 0989
            </span>
          </div>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}></Grid>

        <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          style={{
            color: "#fff",
            marginTop: "1%",
            textAlign: "center",
            marginBottom: "1%",
          }}
        >
          <div>
            <img
              src={ftr_logo}
              alt="AtarCloud_Logo"
              width="60px"
              height="60px"
            />
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Footer;
