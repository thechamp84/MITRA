import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Divider, Button } from "@material-ui/core";
import bnnr from "../assests/HOME/transform.png";
import BODY from "../assests/HOME/1.png";
import apple_store from "../assests/apple_store.png";
import android_store from "../assests/android_store.png";
import virtual from "../assests/3d.png";
import accurate_icon from "../assests/accurate_icon.png";
import visit_management from "../assests/visit_management.png";
import tours_app from "../assests/3d_tours_app.png";
import visit from "../assests/visit.png";
import real_time from "../assests/real_time.png";
import maintenance from "../assests/maintenance.png";
import income from "../assests/income.png";
import access from "../assests/access.png";
import status from "../assests/status.png";
import requests from "../assests/requests.png";
import expenses from "../assests/expenses.png";
import search from "../assests/search.png";
import walkthroughs from "../assests/walkthroughs.png";
import schedule from "../assests/schedule.png";
import Footer from "./Footer";
import global from "../global.css";
import Nav from "./Nav";
import heroImage from '../assests/HOME/heroImage.png'

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "#21e2fc",
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
    padding: "9%",
    marginRight: "10%",
    color: "#fff",
    // textAlign:'auto',
    [theme.breakpoints.down("xs")]: {
      padding: "5%",
      marginRight: "0%",
    },
  },
  img: {
    padding: "5%",
    marginTop: "1%",
    marginBottom: "-700px",
    marginLeft: "40%",
    animation: 'blast 5s',
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0%",
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: "-17%",
    },
  },
  h5: {
    marginTop: "5%",
    marginBottom: "5%",
  },
  umobile: {
    marginTop: "-200px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0%",
    },
  },
  dmobile: {
    marginBottom: "-200px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0%",
    },
  },
  heroImage: {
    position: 'absolute',
    backgroundRepeat: 'no-repeat',
    maxHeight: '70vh',
    // width:"1000px",
    backgroundSize: 'cover',
    backgroundImage: `url(${heroImage})`
  },
}));

const Home = (props) => {
  const classes = useStyles();

  const { lang } = props;

  return (
    <React.Fragment>
      <Nav />
      <Divider />
      <Paper className={classes.paper}>
        <Grid container spacing={5} className={classes.heroImage}>
          <Grid item xs={12} sm={5} md={5} lg={5} xl={6} >
            <div className={classes.data}>
              <h1 style={{ fontSize: "70px", lineHeight: "1" }}>
                Share your scans to stay on track.{" "}
              </h1>
              <h5 className={global.h5}>MITRA</h5>
              <p>
                Once a week you'll review your scan with your trainer who will use it to track your changes, tweak your plan, and keep you challenged.
              </p>
              <h5>
                Download our apps <br />
                today to learn more!
              </h5>
              <div style={{ marginTop: "4%" }}>
                <img
                  src={apple_store}
                  alt="appStore_logo"
                  style={{ cursor: "pointer", marginRight: "2%" }}
                />

                <img
                  src={android_store}
                  alt="androidStore_logo"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={7} md={7} lg={7} xl={6}>
            <div >
              <img src={bnnr} alt="BannerImage" width="60%" height="30%" className={classes.img} />
            </div>
          </Grid>
        </Grid>
      </Paper>

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
              BOOK NOW
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>

        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
        <Grid item xs={10} sm={8} md={8} lg={8}>
          <div>
            <Typography
              style={{
                fontSize: "18px",
                textAlign: "center",
                color: "grey",
                marginTop: "3%",
              }}
            >
              Listing home is much more than placing ads, and our aim is to find
              right tenant for the right price, all the while making sure your
              home looks its best.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "3%" }}
      >
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          lg={2}
          style={{ textAlign: "center", color: "#006687" }}
        >
          <div>
            <img src={accurate_icon} alt="accurate_icon" width="100px" />
          </div>
          <div>
            <h5 className={classes.h5}>
              Acurate <br />
              Listing
            </h5>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          lg={2}
          style={{ textAlign: "center", color: "#006687" }}
        >
          <div>
            <img src={bnnr} alt="virtual_icon" width="100px" />
          </div>
          <div>
            <h5 className={classes.h5}>
              3D Virtual Tours
              <br /> & Floorplans
            </h5>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          lg={2}
          style={{ textAlign: "center", color: "#006687" }}
        >
          <div>
            <img
              src={bnnr}
              alt="visitManagement_icon"
              width="100px"
            />
          </div>
          <div>
            <h5 className={classes.h5}>
              Visit Management for
              <br /> your property
            </h5>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
      </Grid>

      {/* <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "4%" }}
      >
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ textAlign: "center" }}>
          <Button
            style={{
              backgroundColor: "#006687",
              color: "#fff",
              padding: "1% 2% 1% 2%",
            }}
            target="_blank"
            href="/listyourproperty"
          >
            BOOK NOW
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
      </Grid> */}



      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <div>
            <Typography
              style={{
                fontSize: "50px",
                fontWeight: "500",
                textAlign: "center",
                color: "#2596be",
                marginTop: "15%",
              }}
            >
              Work with a trainer to transform your body.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>

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
              With guidance from your trainer, set acheivable goals for body fat, muscle mass, and measurements based on your 3D body model.
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
          style={{ textAlign: "center", color: "#2596be" }}
        >
          <div>
            <img src={real_time} alt="realTime_icon" width="100px" />
          </div>
          <div>
            <h5 className={classes.h5}>
              Personal Trainer
              <br /> Workouts
            </h5>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          lg={2}
          style={{ textAlign: "center", color: "#2596be" }}
        >
          <div>
            <img src={maintenance} alt="maintenance_icon" width="100px" />
          </div>
          <div>
            <h5 className={classes.h5}>
              Improve your  <br /> eating habits
            </h5>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          lg={2}
          style={{ textAlign: "center", color: "#2596be" }}
        >
          <div>
            <img src={income} alt="income_icon" width="100px" />
          </div>
          <div>
            <h5 className={classes.h5}>
              Guidance on muscle
              <br /> recovery
            </h5>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          lg={2}
          style={{ textAlign: "center", color: "#2596be" }}
        >
          <div>
            <img src={access} alt="access_icon" width="100px" />
          </div>
          <div>
            <h5 className={classes.h5}>
              Personalized workouts
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
        style={{ marginTop: "1%", backgroundColor: "#2596be" }}
      >
        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} style={{ textAlign: "center" }}>
          <img
            src={bnnr}
            alt="tour_icon"
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
          style={{ textAlign: "center", color: "#fff", marginBottom: "5%" }}
        >
          <h1>Personalized workouts</h1>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>

        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          style={{ textAlign: "center", color: "#fff", marginTop: "2%" }}
        >
          <h1>Nutrition coaching</h1>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} style={{ textAlign: "center" }}>
          <img
            src={bnnr}
            alt="visit_icon"
            width="320px"
            height="auto"
            className={classes.dmobile}
          />
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




      {/* <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "1%" }}
      >
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ textAlign: "center" }}>
          <Button
            style={{
              backgroundColor: "#006687",
              color: "#fff",
              padding: "1% 2% 1% 2%",
            }}
            target="_blank"
            href="/listyourproperty"
          >
            List your home today
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
      </Grid> */}





      {/* <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "5%" }}
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
            href="https://www.atarcloud.com/"
          >
            Manage your property today
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
      </Grid> */}


      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        id="findYourHome"
      >
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <div>
            <Typography
              style={{
                fontSize: "50px",
                fontWeight: "500",
                textAlign: "center",
                color: "#2596be",
                marginTop: "10%",
              }}
            >
              Follow a weekly plan designed for you.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>

        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <div>
            <Typography
              style={{
                fontSize: "18px",
                textAlign: "center",
                color: "grey",
                marginTop: "2%",
              }}
            >
              Workouts will include a mix of resistance training, cardo, and HIIT based on your goals.
              Personal guidance around nutrition, macros, and meal-timing will help drive your tranformation.
              your trainer will assign dynamic recovery activites like foam-rolling, yoga, or stretching on your rest days.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "5%" }}
      >
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          lg={2}
          style={{ textAlign: "center", color: "#006687" }}
        >
          <div>
            <img src={search} alt="search_icon" width="100px" />
          </div>
          <div>
            <h5 style={{ marginTop: "10%", color: '#2596be' }}>Personalized plan</h5>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          lg={2}
          style={{ textAlign: "center", color: '#2596be' }}
        >
          <div>
            <img src={walkthroughs} alt="walkthrough_icon" width="100px" />
          </div>
          <div>
            <h5 style={{ marginTop: "13%" }}>Realistic, visual goals</h5>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          lg={2}
          style={{ textAlign: "center", color: '#2596be' }}
        >
          <div>
            <img src={schedule} alt="schedule_icon" width="100px" />
          </div>
          <div>
            <h5 style={{ marginTop: "10%" }}>One-on-one coaching</h5>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
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
        style={{ marginTop: "1%", backgroundColor: "#2596be" }}
      >
        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} style={{ textAlign: "center" }}>
          <img
            src={BODY}
            alt="status_icon"
            width="220px"
            height="700px"
            className={classes.umobile}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          style={{ textAlign: "center", color: "#fff" }}
        >
          <h1>
            WAIST GOAL
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
            color: "#fff",
            marginTop: "10%",
          }}
        >
          <h1>STARTING SCAN</h1>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} style={{ textAlign: "center" }}>
          <img
            src={BODY}
            alt="requests_icon"
            width="220px"
            height="700px"
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
            src={BODY}
            alt="expenses_icon"
            width="220px"
            height="700px"
            className={classes.dmobile}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          style={{ textAlign: "center", color: "#fff" }}
        >
          <h1>BODY FAT GOAL</h1>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
      </Grid>

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

      {/* <Grid
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
            href="https://www.atarcloud.com/"
          >
            Manage your property today
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
      </Grid> */}



      {/* <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "5%" }}
      >
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ textAlign: "center" }}>
          <Button
            style={{
              backgroundColor: "#006687",
              color: "#fff",
              padding: "1% 2% 1% 2%",
            }}
            target="_blank"
            href="/listyourproperty"
          >
            Find your dream home today
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
      </Grid> */}

      <Footer />
    </React.Fragment>
  );
};

export default Home;
