import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Copyright from "../footer/Footer";
import config from "../../config";
import { PageNotifications } from "../notifications/notificationService";
import { RenderLinkButton, buttonTypes } from "../button/renderButton";
import colors from "../../styles/Colors.scss";

import {
  setShowNotificationMessage,
  setNotificationMessage,
  setNotificationSeverity
} from "../../store/notifications/notificationActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  text: {
    padding: "0 0 20px 0",
  },
}));

const RequestResetPassword = (props) => {
  // Page Tab Title
  const title = "Panthera Platform - Reset Password";
  // Redux store
  const state = useSelector((state) => ({
    notificationMessage: state.showNotification.notificationMessage,
    showNotificationMessage: state.showNotification.showNotificationMessage,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = title;
  }, []);
  const handleGoBack = (e) => {
    e.preventDefault();
    props.history.goBack();
  };
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setShowNotificationMessage(false));
    let responseCode = 0;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
      }),
    };

    fetch(`${config.API_URL}admins/forgot_password`, requestOptions)
      .then((response) => {
        responseCode = response.status;
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (responseCode !== 200) {
          data.errors.forEach((el) => {
            throw new Error(el.message);
          });
        }
        dispatch(
            setNotificationMessage(data.message)
          );
          dispatch(setNotificationSeverity("success"));
          dispatch(setShowNotificationMessage(true));
      })
      .catch((error) => {
        dispatch(setShowNotificationMessage(true));
        dispatch(setNotificationMessage(error.message));
      });
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const classes = useStyles();

  return (
    <>
      {state.showNotificationMessage ? <PageNotifications /> : ""}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h3" className={classes.text}>
            Forgot Password?
          </Typography>
          <Typography component="h1" variant="h5" className={classes.text}>
            Enter the email address associated with your account.
          </Typography>
          <Typography component="h1" variant="h6" className={classes.text}>
            We will email you a link to reset your password
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={handleChange}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Grid container spacing={2} justify="center" alignItems="center">
              <Grid item>
                
                {RenderLinkButton({
                  type: buttonTypes.function,
                  title: "Go Back",
                  handleClick: handleGoBack,
                  customStyles: {
                    padding: "10px 5px",
                    color: colors.white,
                    margin: "0 10px",
                    minWidth: "150px",
                    background: colors.materialBlue,
                  },
                })}
                {RenderLinkButton({
                  type: buttonTypes.submit,
                  title: "Reset Password",
                  customStyles: {
                    padding: "10px 5px",
                    minWidth: "150px",
                  },
                })}
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Copyright />
    </>
  );
};

export default RequestResetPassword;
