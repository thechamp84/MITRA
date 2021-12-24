import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Grid, Typography } from "@material-ui/core";
import logo from "../assests/logo.png";

const styles = (theme) => ({
  root: {
    color: "#fff",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  paper: {
    color: "#006687",
    padding: "5%",
    marginRight: "15%",
    marginTop: "6%",
  },
  input: {
    border: "1px solid black !important",
    backgroundColor: "red",
  },
  text: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "green",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple",
    },
  },
});

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

const ContactModal = (props) => {
  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.display}
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={props.handleClose}
        style={{ backgroundColor: "#006584" }}
      ></DialogTitle>
      <DialogContent style={{ backgroundColor: "#006584", color: "#fff" }}>
        <Grid container style={{ backgroundColor: "#006584", color: "#fff" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{ textAlign: "center" }}
          >
            <img src={logo} alt="atar_Logo" width="200px" height="auto" />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <h1
              style={{
                textAlign: "center",
                marginTop: "5%",
                marginBottom: "5%",
                fontSize: "35px",
              }}
              color="#fff"
            >
              Thank you for reaching out!
            </h1>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              style={{
                textAlign: "center",
                marginTop: "3%",
                marginBottom: "5%",
                fontSize: "20px",
              }}
              color="#fff"
              gutterBottom
            >
              We will get back to you shortly!
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
export default ContactModal;
