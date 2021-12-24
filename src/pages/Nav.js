import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link, Button, Drawer } from "@material-ui/core";
import logo from "../assests/HOME/logo.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { direction } from "../actions/index";

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
  menuButton: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "inline",
      float: "right",
    },
  },
  drawer: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  list: {
    paddingRight: "20px",
    [theme.breakpoints.up("xl")]: {
      fontSize: "25px",
      paddingRight: "20px",
    },
  },
}));

const Nav = () => {
  const myStates = useSelector((state) => state.changeDirection);
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    top: false,
  });

  const [lang, setLang] = useState("English");
  const [btn, setBtn] = useState("عربي");
  const [dir, setDir] = useState("");
  const [text, setText] = useState("-webkit-auto");

  const changeText = () => {
    if (lang == "English") {
      setLang("عربي");
      setBtn("English");
      dispatch(direction("rtl"));
      setDir("rtl");
    } else {
      setLang("English");
      setBtn("عربي");
      dispatch(direction("ltr"));
      setDir("ltr");
    }
  };

  useEffect(() => {
    document.body.style.direction = myStates;
    document.body.style.textAlign = text;
  }, [myStates]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      style={{ color: "#fff", backgroundColor: "#006687", textAlign: "center" }}
    >
     <ul
                    className="navbar-nav ml-auto mb-2 mb-lg-0"
                    style={{ color: "#fff" }}
                  >
                    <li
                      className="nav-item"
                      style={{ color: "#fff" }}
                      className={classes.list}
                    >
                      <NavLink
                        style={{ color: "#fff" }}
                        exact
                        className="nav-link"
                        aria-current="page"
                        to="/"
                      >
                        About us
                      </NavLink>
                    </li>
                    <li
                      className="nav-item"
                      style={{ color: "#fff", textDecoration: "none" }}
                      className={classes.list}
                    >
                      <NavLink
                        style={{ color: "#fff", textDecoration: "none" }}
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/"
                      >
                        PRODUCTS
                      </NavLink>
                    </li>

                    <li
                      className="nav-item"
                      style={{ color: "#fff", textDecoration: "none" }}
                      className={classes.list}
                    >
                      <NavLink
                        style={{ color: "#fff", textDecoration: "none" }}
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/"
                      >
                        TECH SPECS
                      </NavLink>
                    </li>

                    <li
                      className="nav-item"
                      style={{ color: "#fff" }}
                      className={classes.list}
                    >
                      <NavLink
                        style={{ color: "#fff", textDecoration: "none" }}
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/"
                        target="_blank"
                      >
                       TRANSFORM
                      </NavLink>
                    </li>

                    <li
                      className="nav-item"
                      style={{ color: "#fff" }}
                      className={classes.list}
                    >
                      <NavLink
                        style={{ color: "#fff" }}
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/"
                      >
                       HELP
                      </NavLink>
                    </li>

                    <li
                      className="nav-item"
                      style={{ color: "#fff" }}
                      className={classes.list}
                    >
                      <Button
                        style={{ color: "#000", backgroundColor: "#fff" }}
                      >
                        BOOK NOW
                      </Button>
                    </li>
                  </ul>
    </div>
  );

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        style={{ backgroundColor: "#005373", height: "20%" }}
      >
        <div>
          <br />
        </div>
      </Grid>
      <div className="container-fluid nav_bg">
        <div className="row" style={{ backgroundColor: "#006687" }}>
          <div className="col-12 mx-auto">
            <nav
              className="navbar navbar-expand-lg navbar-light "
              style={{ padding: "2%" }}
            >
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img
                    src={logo}
                    width="150px"
                    height="60px"
                    style={{ marginLeft: "5%" }}
                  />
                </NavLink>
                <button
                  style={{ color: "#fff" }}
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={toggleDrawer("top", true)}
                >
                  <span
                    className="navbar-toggler-icon"
                    onClick={toggleDrawer("top", false)}
                    onKeyDown={toggleDrawer("top", false)}
                    style={{ color: "#fff" }}
                  ></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul
                    className="navbar-nav ml-auto mb-2 mb-lg-0"
                    style={{ color: "#fff" }}
                  >
                    <li
                      className="nav-item"
                      style={{ color: "#fff" }}
                      className={classes.list}
                    >
                      <NavLink
                        style={{ color: "#fff" }}
                        exact
                        className="nav-link"
                        aria-current="page"
                        to="/"
                      >
                        About us
                      </NavLink>
                    </li>
                    <li
                      className="nav-item"
                      style={{ color: "#fff", textDecoration: "none" }}
                      className={classes.list}
                    >
                      <NavLink
                        style={{ color: "#fff", textDecoration: "none" }}
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/"
                      >
                        PRODUCTS
                      </NavLink>
                    </li>

                    <li
                      className="nav-item"
                      style={{ color: "#fff", textDecoration: "none" }}
                      className={classes.list}
                    >
                      <NavLink
                        style={{ color: "#fff", textDecoration: "none" }}
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/"
                      >
                        TECH SPECS
                      </NavLink>
                    </li>

                    <li
                      className="nav-item"
                      style={{ color: "#fff" }}
                      className={classes.list}
                    >
                      <NavLink
                        style={{ color: "#fff", textDecoration: "none" }}
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/"
                      >
                       TRANSFORM
                      </NavLink>
                    </li>

                    <li
                      className="nav-item"
                      style={{ color: "#fff" }}
                      className={classes.list}
                    >
                      <NavLink
                        style={{ color: "#fff" }}
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/"
                      >
                       HELP
                      </NavLink>
                    </li>

                    <li
                      className="nav-item"
                      style={{ color: "#fff" }}
                      className={classes.list}
                    >
                      <Button
                        style={{ color: "#000", backgroundColor: "#fff" }}
                      >
                        BOOK NOW
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className={classes.drawer}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default Nav;
