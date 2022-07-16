import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

import Copyright from "../footer/Footer";
import config from '../../config'
import { PageNotifications } from "../notifications/notificationService";
import { RenderLinkButton, buttonTypes } from "../button/renderButton";
import colors from "../../styles/Colors.scss";
import {
  setLoginForm,
  setPasswordVisibility,
  setClearLoginForm,
  setLoggedInUser
} from "../../store/loginPage/loginActions";
import { setShowNotificationMessage, setNotificationMessage } from "../../store/notifications/notificationActions";

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

const SignIn = (props) => {
  // Page Tab Title
  const title = "Panthera Platform - Login";
  // TODO Page Website 
  // const website = process.env.REACT_APP_DOMAIN
  // Redux store
  const state = useSelector((state) => ({
    email: state.changeLoginForm.email,
    password: state.changeLoginForm.password,
    showPassword: state.changeLoginForm.showPassword,
    notificationMessage: state.showNotification.notificationMessage,
    showNotificationMessage: state.showNotification.showNotificationMessage,
  }));
  const dispatch = useDispatch();
  // Clear Button 
  const [disableClear, setdisabledClear] = useState(true);

  const [formValidator, setformValidator] = useState(true);

  useEffect(() => {
    document.title = title;
    if (state.email.length > 0 && state.password.length > 0) {
      setformValidator(false);
    }
    if (state.email.length === 0 || state.password.length === 0) {
      setformValidator(true);
    }
  }, [ state.email.length, state.password.length, title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setShowNotificationMessage(false));
    let responseCode = 0;
    

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: state.email,
        password: state.password
      })
    };

    fetch(`${config.API_URL}auth/signin`, requestOptions)
      .then((response) => {
        responseCode = response.status;
        return response.json();
      })
      .then(data => {
        console.log(data)
        if (responseCode !== 200) {
          data.errors.forEach((el) => {
            throw new Error(el.message)
          });
        }
        dispatch(setLoggedInUser({data, props}))
      })
      .catch(error => {
        dispatch(setShowNotificationMessage(true));
        dispatch(setNotificationMessage(error.message));
      });
  };
  const handleChange = (event) => {
    dispatch(
      setLoginForm({ field: event.target.id, value: event.target.value })
    );
    if (state.email.length > 0 || state.password.length > 0) {
      setdisabledClear(false);
    }
  };
  const classes = useStyles();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const clearForm = () => {
    dispatch(setClearLoginForm());
    setdisabledClear(true);
  };
  return (
    <>
      {state.showNotificationMessage ? <PageNotifications /> : ""}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar
            className={classes.avatar}
            style={
              formValidator
                ? { backgroundColor: colors.alertMessageOptional }
                : { backgroundColor: colors.successColorOptional }
            }
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={state.email}
              onChange={handleChange}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={state.password}
              onChange={handleChange}
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
              type={state.showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        dispatch(setPasswordVisibility(!state.showPassword))
                      }
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Grid container spacing={2} justify="center" alignItems="center">
              <Grid item>
                {RenderLinkButton({
                  type: buttonTypes.function,
                  validator: disableClear,
                  title: "Clear Form",
                  handleClick: clearForm,
                  customStyles: {
                    padding: "10px 5px",
                    minWidth: "150px",
                  },
                })}
              </Grid>
              <Grid item>
                {RenderLinkButton({
                  type: buttonTypes.submit,
                  validator: formValidator,
                  title: "Submit",
                  customStyles: {
                    padding: "10px 5px",
                    minWidth: "150px",
                  },
                })}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Link href="/request_reset_password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Copyright />
    </>
  );
};

export default SignIn;
