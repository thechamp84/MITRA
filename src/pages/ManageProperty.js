import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Divider, Button, Card, CardHeader } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import atarcloud_banner from "../assests/atarcloud_banner.png";
import apple_store from "../assests/apple_store.png";
import appStore from "../assests/AppStore11.png";
import playStore from "../assests/PlayStore11.png";
import android_store from "../assests/android_store.png";
import atarcloud_dashboard from "../assests/atarcloud_dashboard.png";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import invite from "../assests/invite.png";
import manage from "../assests/manage.png";
import profile from "../assests/profile.png";
import property from "../assests/property.png";
import packet from "../assests/packet.png";
import freesignup from "../assests/freesignup.png";
import real_time from "../assests/real_time.png";
import maintenance from "../assests/maintenance.png";
import income from "../assests/income.png";
import access from "../assests/access.png";
import status from "../assests/status.png";
import requests from "../assests/requests.png";
import expenses from "../assests/expenses.png";
import SignupModal from "../components/SignupModal";
import Footer from "./Footer2";
import Nav from "./Nav2";
import SuccessModal from "../components/SuccessModal";

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
  paper: {
    padding: "1%",
    color: "#1e8e5b",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    fontSize: "20px",
    fontWeight: "600",
  },
  data: {
    padding: "4%",
    color: "#fff",
  },
  img: {
    padding: "5%",
    marginTop: "1%",
  },
  backgroundImage: {
    top: "0%",
    marginTop: "0%",
    background: `url(${atarcloud_banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  padd: {
    padding: "1%",
    marginTop: "4%",
    marginBottom: "3%",
  },
  list: {
    display: "inline",
    color: "#fff",
    textDecoration: "none",
    textAlign: "center",
  },
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "#22aa6fad",
  },
  dashboardImage: {
    marginTop: "-100px",
    marginBottom: "5%",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0%",
    },
  },
  package: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "5%",
    },
  },
  sign: {
    fontSize: "50px",
    color: "#1e8e5b",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  umobile: {
    marginTop: "-200px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "5%",
    },
  },
  dmobile: {
    marginBottom: "-200px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5%",
    },
  },
}));

const ManageProperty = (props) => {
  const [open, setOpen] = React.useState();
  const [show, setShow] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickShow = () => {
    console.log("method call");
    setShow(true);
  };

  const handleCloseShow = () => {
    setShow(false);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <Nav />
      <Divider />
      <Grid container className={classes.backgroundImage}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className={classes.data}>
            <div>
              <h1 style={{ fontSize: "70px", lineHeight: "1" }}>
                Property <br /> Management <br /> Simplified
              </h1>
            </div>
            <div>
              <p>
                <CheckCircleIcon /> Real-time status summaries{" "}
              </p>
              <p>
                <CheckCircleIcon /> Manage employees and staff
              </p>
              <p>
                <CheckCircleIcon /> Provide app access to tenants
              </p>
              <p>
                <CheckCircleIcon /> Manage accounting and finances
              </p>
              <p>
                <CheckCircleIcon /> Generate reports
              </p>
            </div>
            <div>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
                style={{
                  marginTop: "1%",
                  marginBottom: "2%",
                  color: "#fff",
                  border: "2px solid #fff",
                  width: "260px",
                }}
              >
                Request Demo
              </Button>
              {open ? (
                <SignupModal
                  open={true}
                  handleClose={handleClose}
                  handleClickShow={handleClickShow}
                />
              ) : null}
              {console.log(show)}
              <SuccessModal show={show} handleCloseShow={handleCloseShow} />
            </div>
            <div>
              <img
                src={apple_store}
                style={{ cursor: "pointer", marginRight: "2%" }}
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/us/app/atarcloud/id1563617068",
                    "_blank"
                  )
                }
              />

              <img
                src={android_store}
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.atar",
                    "_blank"
                  )
                }
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
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
                color: "#1e8e5b",
                marginTop: "10%",
                lineHeight: "normal",
              }}
            >
              Free, cloud-based property management system
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>

        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <div>
            <Typography
              style={{
                fontSize: "18px",
                textAlign: "center",
                color: "grey",
                marginTop: "1%",
              }}
            >
              Introducing the property management dashboard.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "1%", marginBottom: "10%" }}
      >
        <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          style={{ textAlign: "center" }}
        ></Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "1%", backgroundColor: "#f1f6f9" }}
      >
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ textAlign: "center" }}>
          <img
            src={atarcloud_dashboard}
            width="100%"
            height="auto"
            className={classes.dashboardImage}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
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
                color: "#1e8e5b",
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
          {/* <Paper className={classes.paper}> */}
          {/* <Grid container>
                <Grid  item xs={6} sm={6} md={6} lg={6}>
                    <img src={schedule}  width="100%" height="80%" />
                </Grid>
                <Grid  item xs={6} sm={6} md={6} lg={6}>
                    <h3>Fill out the form</h3>
                </Grid>
            </Grid> */}
          <Card className={classes.paper}>
            <CardHeader
              avatar={<img src={profile} width="60px" height="50px" />}
              title="Create your profile"
            />
          </Card>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <PlayArrowIcon style={{ margin: "40%", color: "#1e8e5b" }} />
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <Card className={classes.paper}>
            <CardHeader
              avatar={<img src={property} width="60px" height="50px" />}
              title="Add your first property"
            />
          </Card>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <PlayArrowIcon style={{ margin: "40%", color: "#1e8e5b" }} />
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <Card className={classes.paper}>
            <CardHeader
              avatar={<img src={invite} width="60px" height="50px" />}
              title="Invite owners & tenants"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>

        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid item xs={12} sm={2} md={2} lg={2} className={classes.package}>
          {/* <Paper className={classes.paper}> */}
          {/* <Grid container>
                <Grid  item xs={6} sm={6} md={6} lg={6}>
                    <img src={schedule}  width="100%" height="80%" />
                </Grid>
                <Grid  item xs={6} sm={6} md={6} lg={6}>
                    <h3>Fill out the form</h3>
                </Grid>
            </Grid> */}
          <Card className={classes.paper}>
            <CardHeader
              avatar={<img src={packet} width="60px" height="50px" />}
              title="Select your package"
            />
          </Card>
          {/* </Paper> */}
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1}>
          <PlayArrowIcon style={{ margin: "40%", color: "#1e8e5b" }} />
        </Grid>

        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Card className={classes.paper}>
            <CardHeader
              avatar={<img src={manage} width="60px" height="50px" />}
              title="Manage your properties the easy ways"
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "5%", backgroundColor: "#f1f6f9" }}
      >
        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
        <Grid item xs={12} sm={5} md={5} lg={5} className={classes.padd}>
          <div>
            <Grid container>
              <Grid item xs={12}>
                {/* <img src={arrowicon} />
           </Grid>                 
          <Grid item xs={8}> */}
                <h2 className={classes.sign}>
                  You heard that right,
                  <br /> it is free to sign-up!
                </h2>
              </Grid>
            </Grid>
          </div>
          <div>
            <Typography>
              With our free Basic Account you can manage tenants, owners, and
              professionals in one convenient location. Additionally, you can
              keep track of your rental information, accept and send payments,
              manage maintenance, and communicate easily at no cost. You can
              always upgrade for additional features or downgrade to our Basic
              Account at any time.
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          lg={5}
          style={{ textAlign: "center" }}
          className={classes.padd}
        >
          <img src={freesignup} width="100%" height="auto" />
        </Grid>
        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
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
                color: "#22aa6f",
                marginTop: "10%",
              }}
            >
              Manage Your Home
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>

        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <div>
            <Typography
              style={{
                fontSize: "18px",
                textAlign: "center",
                color: "grey",
                marginTop: "2%",
              }}
            >
              We're aware of the hassle that comes with managing homes. No more
              disputes and unexpected surprises. Simply manage your properties,
              generate reports, and interact with tenant from the comfort of
              your phone screen.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "5%" }}
      >
        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          lg={2}
          style={{ textAlign: "center", color: "#22aa6f" }}
        >
          <div>
            <img src={real_time} width="100px" />
          </div>
          <div>
            <p style={{ marginTop: "10%" }}>
              Real-time Status
              <br /> Summaries
            </p>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          lg={2}
          style={{ textAlign: "center", color: "#22aa6f" }}
        >
          <div>
            <img src={maintenance} width="100px" />
          </div>
          <div>
            <p style={{ marginTop: "10%" }}>
              Manage Maintenance &<br /> Other Requests
            </p>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          lg={2}
          style={{ textAlign: "center", color: "#22aa6f" }}
        >
          <div>
            <img src={income} width="100px" />
          </div>
          <div>
            <h6 style={{ marginTop: "10%" }}>
              Track Your Income
              <br /> and Expenses
            </h6>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          lg={2}
          style={{ textAlign: "center", color: "#22aa6f" }}
        >
          <div>
            <img src={access} width="100px" />
          </div>
          <div>
            <h5 style={{ marginTop: "10%" }}>
              Provide Access
              <br /> to Users
            </h5>
          </div>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "10%", marginBottom: "10%" }}
      >
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ textAlign: "center" }}
        ></Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "1%", backgroundColor: "#f1f6f9" }}
      >
        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} style={{ textAlign: "center" }}>
          <img
            src={status}
            width="320px"
            height="auto"
            className={classes.umobile}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          style={{ textAlign: "center", color: "#22aa6f" }}
        >
          <h1>
            Real-time <br />
            Status Summaries
          </h1>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>

        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          style={{
            textAlign: "center",
            fontSize: "70px",
            color: "#22aa6f",
            marginTop: "10%",
          }}
        >
          <h1>Manage Maintenance & Other Requests</h1>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} style={{ textAlign: "center" }}>
          <img
            src={requests}
            width="320px"
            height="auto"
            className={classes.dmobile}
          />
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>

        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ textAlign: "center", marginBottom: "10%" }}
        ></Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>

        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} style={{ textAlign: "center" }}>
          <img
            src={expenses}
            width="320px"
            height="auto"
            className={classes.dmobile}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          style={{ textAlign: "center", color: "#22aa6f" }}
        >
          <h1>Track your Income & Expenses</h1>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
      </Grid>

      {/* <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"10%",marginBottom:"10%",backgroundColor:""}}>
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} style={{textAlign:"center"}}>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid>

    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"10%",marginBottom:"10%",backgroundColor:"red"}}>
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid> */}

      {/* <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"10%",marginBottom:"10%",backgroundColor:"#f1f6f9"}}>
     <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} style={{textAlign:"center"}}>
        <img src={expenses} width="320px" height="auto" style={{marginBottom:"-200px"}} />
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} style={{textAlign:"center",color:"#006687"}}>
      <h1>Track Your Income & Expenses</h1>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
    </Grid> */}

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          marginTop: "10%",
          marginBottom: "10%",
          backgroundColor: "red",
        }}
      >
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ textAlign: "center" }}
        ></Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "3%" }}
      >
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ textAlign: "center" }}>
          <Button
            style={{
              backgroundColor: "#22aa6f",
              color: "#fff",
              padding: "1% 2% 1% 2%",
            }}
            target="_blank"
            href="https://atarcloud.com/en/sign-up"
          >
            Manage your property today
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <div>
            <h2
              style={{
                fontSize: "40px",
                textAlign: "center",
                color: "#1e8e5b",
                marginTop: "7%",
              }}
            >
              We have apps available for both Apple and Android devices
            </h2>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>

        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          lg={8}
          style={{ marginTop: "3%", textAlign: "center", marginBottom: "5%" }}
        >
          <div>
            <img
              src={appStore}
              width="300px"
              height="auto"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/us/app/atarcloud/id1563617068",
                  "_blank"
                )
              }
              style={{ cursor: "pointer" }}
            />{" "}
            &nbsp;
            <img
              src={playStore}
              width="300px"
              height="auto"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.atar",
                  "_blank"
                )
              }
              style={{ cursor: "pointer" }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
      </Grid>

      <Footer />
    </React.Fragment>
  );
};

export default ManageProperty;
