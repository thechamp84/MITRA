import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    color: "#006687",
    padding: "5%",
    marginRight: "15%",
    marginTop: "6%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "1%",
      marginRight: "1%",
      marginBottom: "5%",
    },
  },
  root: {
    margingTop: "15%",
    width: "500px",
    padding: "2%",
  },
  title: {
    color: "#006687",
    fontWeight: "600",
  },
}));

const Signup = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Are you a property owner ? <br /> Let us handle it while you sit
            back.
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={5}>
          <div className="form-group">
            <TextField
              required
              fullWidth
              size="small"
              id="outlined-size-small"
              label="First Name"
              variant="outlined"
            />
          </div>
        </Grid>
        <Grid xs={1}></Grid>
        <Grid xs={6}>
          <div className="form-group">
            <TextField
              required
              fullWidth
              size="small"
              id="outlined-size-small"
              variant="outlined"
              label="Last Name"
            />
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={5}>
          <div className="form-group">
            <TextField
              required
              fullWidth
              size="small"
              variant="outlined"
              label="Email"
              type="email"
            />
          </div>
        </Grid>
        <Grid xs={1}></Grid>
        <Grid xs={6}>
          <div className="form-group">
            <TextField
              required
              fullWidth
              size="small"
              id="outlined-size-small"
              label="Phone Number"
              variant="outlined"
            />
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={5}>
          <div className="form-group">
            <TextField
              required
              fullWidth
              size="small"
              id="outlined-size-small"
              label="Number of Properties"
              variant="outlined"
              type="number"
            />
          </div>
        </Grid>
        <Grid xs={1}></Grid>
        <Grid xs={6}>
          <div className="form-group">
            <TextField
              select
              required
              fullWidth
              size="small"
              variant="outlined"
              label="City"
            >
              <MenuItem value="Riyadh">Riyadh</MenuItem>
            </TextField>
          </div>
        </Grid>
      </Grid>

      <div className="form-group">
        <TextField
          select
          required
          fullWidth
          size="small"
          id="outlined-size-small"
          label="Property Type"
          variant="outlined"
        >
          <MenuItem value="Apartment">Apartment</MenuItem>
        </TextField>
      </div>

      <div className="form-group">
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            style={{
              float: "right",
              backgroundColor: "#006687",
              color: "#fff",
            }}
          >
            Submit
          </Button>
        </Grid>
      </div>

      <div className="form-group">
        <Grid item xs={12} style={{ marginTop: "10%" }}></Grid>
      </div>
    </Paper>
  );
};

export default Signup;
