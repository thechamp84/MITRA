import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Divider } from "@material-ui/core";
import about1 from "../assests/about1.png";
import about2 from "../assests/about2.png";
import Footer from "./Footer";
import Nav from "./Nav";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  AppBar: {
    backgroundColor: "#006687",
    backgroundSize: "cover",
    padding: "1%",
  },
  list: {
    display: "inline",
    color: "#fff",
  },
  paper: {
    padding: "1%",
    backgroundColor: "#006687",
  },
  data: {
    padding: "4%",
    marginRight: "10%",
    color: "#fff",
  },
  img: {
    padding: "5%",
    marginTop: "1%",
  },
  middle: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      alignItems: "center",
    },
  },
  atarcloud: {
    marginTop: "-300px",
    padding: "10%",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      marginTop: "0px",
    },
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Nav />
      <Divider />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <div>
            <h1
              style={{
                textAlign: "center",
                fontSize: "60px",
                marginTop: "10%",
                color: "#006687",
              }}
            >
              Not your typical property <br /> management & listing solution
            </h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>

        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <div>
            <Typography style={{ textAlign: "center", marginTop: "1%" }}>
              Our vision at Atar is to digitally transform everything it means
              to live in and manage homes. The future of home-listing and
              property management is here.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>

        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
        <Grid item xs={12} sm={5} md={5} lg={5} className={classes.middle}>
          <div>
            <h2
              style={{ fontSize: "50px", marginBottom: "2%", color: "#006687" }}
            >
              Meet Atar
            </h2>
            <p>
              Aren’t we all tired of the process of finding our dream home? Or
              looking for reliable tenants to rent our homes? The cost, the
              hassle, the inaccurate ads, and most importantly the time spent.
              So, we decided to take matters into our own hands. To make renting
              easier and the ability to find a suitable home for all and an
              enjoyable journey you deserve.
            </p>
            <p>
              Meet Atar. An easy-to-use, user-friendly platform that has the
              ability to search for homes with different specifications and
              filters. Atar focuses on quality, validity, and comprehensiveness
              when it comes to 3D floor plans. You no longer have to deal with
              outdated pictures and inaccurate information! Our 3D tech is also
              VR compatible which means, which will allow you to have
              walk-throughs right at your fingertips. With Atar, you also have
              the ability to schedule a visit at your connivence – Pick a day
              and time that suits your needs in finding your dream home with
              Atar.
            </p>
            <p>
              We know that a home is not a place, it’s a feeling. So, we took
              the responsibility of understanding the true wants of renters and
              the needs of the landlords. We have created a well-comprehensive
              platform that will efficiently allow you to simply sit back and
              begin your journey from the comfort of your own home.
            </p>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          lg={5}
          style={{ textAlign: "center", marginTop: "5%" }}
        >
          <div>
            <img src={about1} alt="Mobile1" width="350px" height="auto" />
          </div>
        </Grid>
        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>

        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} style={{ textAlign: "center" }}>
          <div>
            <img
              src={about2}
              alt="Mobile2"
              width="350px"
              height="auto"
              style={{ marginTop: "5%" }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={5} md={5} lg={5}>
          <div className={classes.atarcloud}>
            <h2
              style={{ fontSize: "50px", marginBottom: "2%", color: "#006687" }}
            >
              Meet AtarCloud
            </h2>
            <p>
              Atar Cloud is a cloud-based property management system that allows
              you to manage your payment collections, rental agreements,
              maintenance requests, onboarding tenants, managing lease,
              communicate with your tenants, generating reports, and so much
              more.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
      </Grid>

      <Footer />
    </React.Fragment>
  );
};

export default About;
