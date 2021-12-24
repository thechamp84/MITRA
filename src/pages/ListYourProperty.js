import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Divider, Card, CardHeader, Button } from "@material-ui/core";
import backgroundimage from "../assests/backgroundimage.png";
import form from "../assests/form.png";
import team from "../assests/team.png";
import listings from "../assests/listings.png";
import properties from "../assests/properties.png";
import tours from "../assests/3d_tours_app.png";
import tours2 from "../assests/tours2.png";
import Signup from "../components/Signup";
import Nav from "./Nav";
import Footer from "./Footer";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import arrowicon from "../assests/arrowicon.png";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
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
    color: "#006687",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    fontSize: "20px",
    fontWeight: "600",
  },

  data: {
    padding: "6%",
    marginLeft: "5%",
    color: "#fff",
  },
  img: {
    padding: "5%",
    marginTop: "1%",
  },
  backgroundImage: {
    top: "0%",
    marginTop: "0%",
    background: `url(${backgroundimage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  h1: {
    fontSize: "67px",
    lineHeight: ".9",
    marginBottom: "5%",
  },
  sign: {
    fontSize: "50px",
    color: "#006687",
  },
  check: {
    color: "#006687",
  },
  cross: {
    color: "red",
  },
  traditional: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "13%",
    },
  },
  package: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "5%",
    },
  },
  form: {
    marginTop: "5%",
    [theme.breakpoints.up("xl")]: {
      marginTop: "2%",
    },
  },
  dividers: {
    backgroundColor: "rgb(0 102 135 / 70%)",
  },
}));

const ListYourProperty = () => {
  const classes = useStyles();
  const myStates = useSelector((state) => state.changeDirection);

  console.log("listyour state", myStates);

  return (
    <React.Fragment>
      <Nav />
      <Divider className={classes.dividers} />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.backgroundImage}
      >
        {/* <Grid item xs={12} sm={12} md={12} lg={12} >

                </Grid> */}
        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          lg={5}
          style={{ marginTop: "65px", marginBottom: "65px" }}
        >
          <div>
            <div className={classes.data}>
              <h1 className={classes.h1}>
                Redefining <br /> the home
                <br /> rental
                <br /> process
              </h1>
              <Typography>
                Finding the right tenants just got easier with Atar.
                <br />
                Start by simple filling out of the form and our <br />
                team will reach out to you soon.
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          lg={5}
          style={{ marginTop: "65px", marginBottom: "65px" }}
        >
          <Signup />
        </Grid>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <div>
            <Typography
              style={{
                fontSize: "50px",
                fontWeight: "500",
                textAlign: "center",
                color: "#006687",
                marginTop: "10%",
              }}
            >
              How Atar Works
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <Card className={classes.paper}>
            <CardHeader
              avatar={
                <img src={form} alt="form_icon" width="50px" height="50px" />
              }
              title="Fill out the form"
            />
          </Card>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <PlayArrowIcon style={{ margin: "40%", color: "#006687" }} />
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <Card className={classes.paper}>
            <CardHeader
              avatar={
                <img src={team} alt="team_icon" width="50px" height="50px" />
              }
              title="A team member will reach out"
            />
          </Card>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <PlayArrowIcon style={{ margin: "40%", color: "#006687" }} />
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <Card className={classes.paper}>
            <CardHeader
              avatar={
                <img
                  src={listings}
                  alt="listings_icon"
                  width="50px"
                  height="50px"
                />
              }
              title="We’ll prepare your listings"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>

        <Grid item xs={12} sm={4} md={4} lg={4}></Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} className={classes.package}>
          <Card className={classes.paper}>
            <CardHeader
              avatar={
                <img
                  src={properties}
                  alt="properties_icon"
                  width="50px"
                  height="50px"
                />
              }
              title="Your properties will be listing on the Atar website and mobile application"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}></Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "5%", backgroundColor: "#f1f6f9" }}
      >
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ paddingTop: "4%" }}
        ></Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>

        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <h2 className={classes.sign}>
            <img src={arrowicon} alt="arrow_icon" width="60px" height="60px" />{" "}
            The Benefits of Using Atar
          </h2>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>

        <Grid container>
          <Grid item xs={2} sm={4} md={4} lg={4}></Grid>
          <Grid
            item
            xs={10}
            sm={3}
            md={3}
            lg={3}
            className={classes.padd}
            style={{ marginLeft: "-5%" }}
          >
            <p
              style={{
                color: "#006687",
                fontSize: "20px",
                marginBottom: "6%",
                fontWeight: "550",
              }}
            >
              Renting with Atar
            </p>
            <p>
              <CheckCircleIcon className={classes.check} /> Quick and easy forms
            </p>
            <p>
              <CheckCircleIcon className={classes.check} /> Professional
              photography
            </p>
            <p>
              <CheckCircleIcon className={classes.check} /> 3D Virtual Tours and
              Floorplans
            </p>
            <p>
              <CheckCircleIcon className={classes.check} /> Visit scheduling
            </p>
          </Grid>
          <Grid
            item
            xs={10}
            sm={3}
            md={3}
            lg={3}
            className={classes.traditional}
          >
            <p
              style={{
                color: "#006687",
                fontSize: "20px",
                lineHeight: "1",
                fontWeight: "550",
              }}
            >
              Traditional property
              <br /> management companies
            </p>
            <p>
              <CloseOutlinedIcon fontSize="small" className={classes.cross} />{" "}
              Tedious forms
            </p>
            <p>
              <CloseOutlinedIcon fontSize="small" className={classes.cross} />{" "}
              Limited visibility
            </p>
            <p>
              <CloseOutlinedIcon fontSize="small" className={classes.cross} />{" "}
              Unsuitable tenants
            </p>
            <p>
              <CloseOutlinedIcon fontSize="small" className={classes.cross} />{" "}
              Inconvenient viewing times
            </p>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
        </Grid>

        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ paddingBottom: "3%" }}
        ></Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
      </Grid>

      <Grid container style={{ paddingTop: "10%", paddingBottom: "5%" }}>
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ textAlign: "center" }}>
          <h2 className={classes.sign}>
            <img src={arrowicon} alt="arrow_icon2" width="60px" height="60px" />{" "}
            3D Virtual Tours
            <br /> & Floorplans
          </h2>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ textAlign: "center" }}>
          <div>
            <img src={tours} alt="tours_icon" width="320px" height="auto" />{" "}
            <img src={tours2} alt="tours_icon2" width="320px" height="auto" />
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          marginTop: "0%",
          backgroundColor: "#f1f6f9",
          textAlign: "center",
        }}
      >
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ paddingTop: "2%" }}
        ></Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>

        <Grid item xs={12} sm={4} md={4} lg={4}></Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <h2 className={classes.sign}>
            Ready to list your <br />
            property with Atar ?
          </h2>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}></Grid>

        <Grid item xs={12} sm={4} md={4} lg={4}></Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Button
            style={{
              backgroundColor: "#006687",
              color: "#fff",
              padding: "2%",
              marginTop: "5%",
              marginBottom: "5%",
            }}
          >
            Get Started
          </Button>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}></Grid>
      </Grid>

      <Footer />
    </React.Fragment>
  );
};

export default ListYourProperty;
