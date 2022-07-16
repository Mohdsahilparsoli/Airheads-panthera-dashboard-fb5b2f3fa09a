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

import {
  setShowNotificationMessage,
  setNotificationMessage,
  setNotificationSeverity
} from "../../store/notifications/notificationActions";
import { errors } from "../../containers/admin/AdminForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
}));

const ResetPassword = ({ match, history}) => {
  // Page Tab Title
  const title = "Panthera Platform - Reset Password";
  const {
    params: { token },
  } = match;
  // Redux store
  const state = useSelector((state) => ({
    notificationMessage: state.showNotification.notificationMessage,
    showNotificationMessage: state.showNotification.showNotificationMessage,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = title;
  }, []);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({error: false, errorMessage: ''})

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setShowNotificationMessage(false));
    let responseCode = 0;
    if(password !== confirmPassword){
        return setError({error: true, errorMessage: "New Password and Confirm Password do not match"})
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: password,
      }),
    };

    fetch(`${config.API_URL}admins/reset_password/${token}`, requestOptions)
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
        history.push("/login");
      })
      .catch((error) => {
        dispatch(setShowNotificationMessage(true));
        dispatch(setNotificationMessage(error.message));
      });
  };

  const classes = useStyles();

  return (
    <>
      {state.showNotificationMessage ? <PageNotifications /> : ""}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
             
              value={password}
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              id="password"
              label="New Password"
              name="password"
              autoComplete="password"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              error={error.error}
              helperText={error.errorMessage}
              fullWidth
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              id="password"
              label="Confirm New Password"
              name="password"
              autoComplete="password"
              autoFocus
            />
            <Grid container spacing={2} justify="center" alignItems="center">
              <Grid item>
                {RenderLinkButton({
                  type: buttonTypes.submit,
                  title: "Submit",
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

export default ResetPassword;
