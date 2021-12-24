import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { Grid, Typography, makeStyles, InputBase } from "@material-ui/core";
import logo from "../assests/atarcloud.png";
import axios from "axios";
import style from './style.css'


const styles = (theme) => ({
  root: {
    color: '#fff'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  paper: {
    color: '#006687',
    padding: '5%',
    marginRight: '15%',
    marginTop: '6%'
  },
  input: {
    border: '1px solid black !important',
    backgroundColor: 'red'
  },
  text: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "green"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "red"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple"
    }
  }
});
const useStyles = makeStyles((theme) => ({
  input: {
    border: '1px solid white !important',
    borderRadius: theme.shape.borderRadius,
    height: '6vh',
    padding: theme.spacing(2),
    color: 'white'
    // backgroundColor: 'red'
  },
  dateInput: {
    "& .MuiFormLabel-root": {
      color: 'white !important',
      backgroundColor: '#135c3a'
    },
    "& .MuiPickersToolbar-toolbar": {
      color: 'white !important',
      backgroundColor: '#135c3a'
    },
    "& .MuiInputBase-input": {
      color: 'white !important',
      backgroundColor: '#135c3a'
    },
    "& .MuiButton-textPrimary": {
      color: '#135c3a !important',
      backgroundColor: '#135c3a'
    },
    "& .MuiOutlinedInput-notchedOutline":{
      borderColor:'white !important'
    },
    border: '1px solid white !important',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    color: 'white',
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
  },
}))(MuiDialogContent);

const SignupModal = (props) => {
  const [demoDate, setDemoDate] = useState();

  const classess = useStyles();
  const [doc, setDoc] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    companyName: "",
    email: "",
  });

  const handleChange = (e) => {
    setDoc({ ...doc, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { doc, demoDate };

    axios
      .post("http://goatar.com/api/v1/send_email_demodate", data)
      .then(function (response) {
        props.handleClickShow();
        props.handleClose();
        console.log("Response : ", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Dialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={props.handleClose}
          style={{ backgroundColor: "#135c3a" }}
        ></DialogTitle>
        <DialogContent style={{ backgroundColor: "#135c3a", color: "#fff" }}>
          <Grid container style={{ backgroundColor: "#135c3a", color: "#fff" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ textAlign: "center" }}
            >
              <img src={logo} alt="Atar_Logo" width="200px" height="auto" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography
                style={{
                  textAlign: "center",
                  marginTop: "5%",
                  marginBottom: "5%",
                }}
                color="#fff"
                gutterBottom
              >
                BE THE FIRST TO REGISTER
              </Typography>
            </Grid>
          </Grid>

          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={5} sm={5} md={5} lg={5}>
                <div className="form-group">
                  <InputBase
                    required
                    fullWidth
                    size="small"
                    label="First Name"
                    variant="outlined"
                    placeholder="First Name"
                    className={classess.input}
                    name="firstName"
                    value={doc.firstName}
                    onChange={handleChange}
                  />
                </div>
              </Grid>
              <Grid xs={1} sm={1} md={1} lg={1}></Grid>
              <Grid xs={6} sm={6} md={6} lg={6}>
                <div className="form-group">
                  <InputBase
                    required
                    fullWidth
                    size="small"
                    id="outlined-size-small"
                    variant="outlined"
                    label="Last Name"
                    placeholder="Last Name"
                    className={classess.input}
                    name="lastName"
                    value={doc.lastName}
                    onChange={handleChange}
                  />
                </div>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={5} sm={5} md={5} lg={5}>
                <div className="form-group">
                  <InputBase
                    required
                    fullWidth
                    size="small"
                    id="outlined-size-small"
                    label="Phone Number"
                    variant="outlined"
                    placeholder="Phone Number"
                    className={classess.input}
                    name="phoneNumber"
                    value={doc.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </Grid>
              <Grid xs={1} sm={1} md={1} lg={1}></Grid>
              <Grid xs={6} sm={6} md={6} lg={6}>
                <div className="form-group">
                  <InputBase
                    required
                    fullWidth
                    size="small"
                    id="outlined-size-small"
                    variant="outlined"
                    label="Company Name"
                    placeholder="Company Name"
                    className={classess.input}
                    name="companyName"
                    value={doc.companyName}
                    onChange={handleChange}
                  />
                </div>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <div className="form-group">
                  <InputBase
                    required
                    fullWidth
                    size="small"
                    id="outlined-size-small"
                    label="Email"
                    variant="outlined"
                    type="email"
                    placeholder="Email"
                    className={classess.input}
                    name="email"
                    value={doc.email}
                    onChange={handleChange}
                  />
                </div>
              </Grid>
            </Grid>

            <div className="form-group">
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                  format={"DD-MM-YYYY"}
                  label="Pick your demo date"
                  inputVariant="outlined"
                  helperText=""
                  placeholder="Pick your demo date"
                  size="small"
                  value={demoDate}
                  className={classess.dateInput}
                  onChange={(date) => setDemoDate(date)}
                />
              </MuiPickersUtilsProvider>
            </div>

            <div className="form-group">
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  style={{
                    float: "right",
                    backgroundColor: "#fff",
                    color: "#135c3a",
                    marginBottom: "10%",
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </div>
          </form>
          <div className="form-group">
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ marginTop: "10%" }}
            ></Grid>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default SignupModal;
