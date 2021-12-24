import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Divider, Button, TextField } from "@material-ui/core";
import Footer from "./Footer";
import ContactModal from "../components/ContactModal";
import axios from "axios";

import Nav from "./Nav";

const Contact = (props) => {
  const [doc, setDoc] = useState({
    firstName: "",
    lastName: "",
    email: "",
    enquiry: "",
  });
  const [display, setDisplay] = useState();

  const handleChange = (e) => {
    setDoc({ ...doc, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setDisplay(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(doc);

    axios
      .post("https://goatar.com/api/v1/send_email_contactus", doc)
      .then(function (response) {
        setDisplay(true);
        console.log("Response : ", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Nav />
      <Divider />
      <Grid container direction="row" justify="center" alignItems="center">
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
                Contact
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
                For all enquiries, please email us using the form below.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
        <Grid
          item
          xs={10}
          sm={10}
          md={10}
          lg={10}
          style={{ marginTop: "5%", marginBottom: "5%" }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid xs={1}></Grid>
              <Grid item xs={10}>
                <div className="form-group">
                  <TextField
                    required
                    fullWidth
                    id="outlined-size-small"
                    label="First Name"
                    variant="outlined"
                    name="firstName"
                    value={doc.firstName}
                    onChange={handleChange}
                  />
                </div>
              </Grid>
              <Grid xs={1}></Grid>
            </Grid>

            <Grid container>
              <Grid xs={1}></Grid>
              <Grid item xs={10}>
                <div className="form-group">
                  <TextField
                    required
                    fullWidth
                    id="outlined-size-small"
                    label="Last Name"
                    variant="outlined"
                    name="lastName"
                    value={doc.lastName}
                    onChange={handleChange}
                  />
                </div>
              </Grid>
              <Grid xs={1}></Grid>
            </Grid>

            <Grid container>
              <Grid xs={1}></Grid>
              <Grid item xs={10}>
                <div className="form-group">
                  <TextField
                    required
                    fullWidth
                    id="outlined-size-small"
                    label="What’s your email ?"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={doc.email}
                    onChange={handleChange}
                  />
                </div>
              </Grid>
              <Grid xs={1}></Grid>
            </Grid>

            <Grid container>
              <Grid xs={1}></Grid>
              <Grid item xs={10}>
                <div className="form-group">
                  <TextField
                    required
                    fullWidth
                    id="outlined-size-small"
                    label="Enquiry"
                    variant="outlined"
                    multiline
                    rows={10}
                    name="enquiry"
                    value={doc.enquiry}
                    onChange={handleChange}
                  />
                </div>
              </Grid>
              <Grid xs={1}></Grid>
            </Grid>

            <Grid container>
              <Grid xs={1}></Grid>
              <Grid item xs={10}>
                <div className="form-group">
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    style={{
                      float: "right",
                      backgroundColor: "#006687",
                      color: "#fff",
                    }}
                  >
                    Submit
                  </Button>
                  {display ? (
                    <ContactModal display={display} handleClose={handleClose} />
                  ) : null}
                </div>
              </Grid>
              <Grid xs={1}></Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
