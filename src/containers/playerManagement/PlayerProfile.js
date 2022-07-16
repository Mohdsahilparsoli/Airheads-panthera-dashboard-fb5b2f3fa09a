/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/PlayerProfile.scss";
import ProfileItems from "../profile/ProfileItems";
// TODO - optimisation
import PersonIcon from "@material-ui/icons/Person";
import PaymentIcon from "@material-ui/icons/Payment";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import BlockIcon from "@material-ui/icons/Block";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { inputFieldsValidators } from "../../validators/customInputValidators";
import { formErrorValidators } from "../../validators/formValidators";
import {
  RenderLinkButton,
  buttonTypes,
} from "../../components/button/renderButton";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { KeyboardDatePicker } from "@material-ui/pickers";
import Feature from "../../components/Feature";
import colors from "../../styles/Colors.scss";
import { form_data, errors, errorMessages } from "./PlayerForm";
import { checkRequest } from "../../store/authentication/tokenHandlerAction";
import { getPlayerInfo } from "../../store/playerManagement/playerActions";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { countries, countryToFlag } from "../../helpers/countries";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: "10px",
      width: "40%",
    },
  },
  formControl: {
    minWidth: "40%",
    padding: "0 10px",
    margin: "8px 0",
    "& .MuiInputLabel-shrink": {
      transform: "translate(25px, -5px) scale(0.75)",
    },
  },
}));

const PlayerProfile = (props, context) => {
  const store = useSelector((state) => ({
    id: state.changeSelectedUser.id,
    player: state.changePlayerData.player,
  }));
  const dispatch = useDispatch();
  const classes = useStyles();

  const [form, setValues] = useState(form_data);
  const [formValidator, setFormValidator] = useState(false);
  const [error, setError] = useState(errors);
  const [errorMessage, setErrorMessage] = useState(errorMessages);
  const [country, setCountry] = useState(countries[0]);
  const [statusType, setstatusType] = useState(store.player.status);
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const [startDate, handleStartDateChange] = useState(
    new Date(store.player.createdAt).toLocaleDateString(undefined, options)
  );
  const [lastLoginTime, handlelastLoginTime] = useState(
    store.player.loginStatus.length !== 0
      ? new Date(
          store.player.loginStatus.slice(-1)[0].login_time
        ).toLocaleDateString(undefined, options)
      : "No Login Records"
  );
  const [lastBetTime, handlelastBetTime] = useState(
    store.player.lastBetTime === undefined
      ? "No Bet Records"
      : Date(store.player.lastBetTime).toLocaleDateString(undefined, options)
  );

  const title = `${form.firstName} ${form.lastName} Profile`;

  const changeFields = (field, newValue) => {
    const validators = inputFieldsValidators(field, newValue);
    const { errorCode, errorText } = validators;
    setFormValidator(formErrorValidators({ ...error, [field]: errorCode }));
    setError({ ...error, [field]: errorCode });
    setErrorMessage({ ...errorMessage, [field]: errorText });
    setValues({ ...form, [field]: newValue });
  };

  useEffect(() => {
    document.title = title;

    dispatch(checkRequest(getPlayerInfo(store.id)));
    setValues({
      email: store.player.email,
      firstName: store.player.firstName,
      lastName: store.player.lastName,
      status: store.player.status,
      affiliateId: store.player.affiliateId,
      country: store.player.country,
      createdAt: store.player.createdAt,
      loginStatus: store.player.loginStatus,
      lastBetTime: store.player.lastBetTime,
      balance: store.player.balance,
      promo_balance: store.player.promo_balance,
      kycStatus: store.player.kycStatus,
      siteID: store.player.siteID,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.player.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to /
    props.history.push("./");

    console.log("handleSubmit: ", form);
  };

  const handleGoBack = (e) => {
    e.preventDefault();
    props.history.goBack();
  };

  const handleChange = (event) => {
    const field = event.target.id;
    const value = event.target.value;
    changeFields(field, value);
  };

  const changestatusType = (event) => {
    setstatusType(event.target.value);
  };

  return (
    <div className="main">
      <h3>{context.t("Player Details")}</h3>
      <hr />
      <div className="featureCointainer">
        <Feature
          value={store.player.balance}
          text={context.t("Lifetime Value")}
          icon="user"
        />
        <Feature
          value={store.player.balance}
          text={context.t("Total Balance")}
          icon="user"
        />
        <Feature
          value={store.player.kycStatus}
          text={context.t("Passed KYC")}
          icon="user"
        />
        <Feature
          value={store.player.status ? "Yes" : "No"}
          text={context.t("Active")}
          icon="user"
        />
      </div>

      <div className="gridWrap">
        <div className="ag-theme-material">
          {/* ---------------------------------  Go Back  ----------------------------------- */}
          {RenderLinkButton(
            {
              type: buttonTypes.function,
              title: context.t("Go Back"),
              handleClick: handleGoBack,
              customStyles: {
                margin: "25px 20px",
                color: colors.white,
                background: "#3f51b5",
              },
            },
            context
          )}
        </div>
      </div>

      <br />

      <div className="container-box">
        <div className="editMenuProfile">
          <div className="choosenImage">
            <ProfileItems name={context.t("Profile")} Icon={PersonIcon} />
          </div>
          <div className="menuIcon">
            <Link
              to={{
                pathname: "./playerPayments",
              }}
            >
              <ProfileItems name={context.t("Payments")} Icon={PaymentIcon} />
            </Link>
          </div>
          <div className="menuIcon">
            <Link
              to={{
                pathname: "./playerBonuses",
              }}
            >
              <ProfileItems
                name={context.t("Bonuses")}
                Icon={MonetizationOnIcon}
              />
            </Link>
          </div>
          <div className="menuIcon">
            <Link
              to={{
                pathname: "./playerResponsibleGaming",
              }}
            >
              <ProfileItems name={context.t("Restrictions")} Icon={BlockIcon} />
            </Link>
          </div>
        </div>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            required
            id="firstName"
            error={error.firstName}
            helperText={errorMessage.firstName}
            label={context.t("Name")}
            value={form.firstName}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            required
            error={error.lastName}
            helperText={errorMessage.lastName}
            id="lastName"
            label={context.t("Last Name")}
            value={form.lastName}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            error={error.email}
            helperText={errorMessage.email}
            id="email"
            label={context.t("Email")}
            value={form.email}
            onChange={handleChange}
            variant="outlined"
            labelWidth={120}
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>{context.t("Status")}</InputLabel>
            <Select
              value={statusType}
              onChange={changestatusType}
              labelWidth={60}
            >
              <MenuItem value={"active"}>Active</MenuItem>
              <MenuItem value={"inactive"}>Inactive</MenuItem>
              <MenuItem value={"blocked"}>Blocked</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="affiliateId"
            label={context.t("Affiliate Id")}
            value={form.affiliateId}
            onChange={handleChange}
            variant="outlined"
            labelWidth={120}
            disabled
          />
          <Autocomplete
            options={countries}
            id="country"
            value={country}
            onChange={(event, newValue) => {
              setCountry(newValue);
            }}
            inputValue={form.country}
            onInputChange={(event, newInputValue) => {
              changeFields("country", newInputValue);
            }}
            classes={{
              option: classes.option,
            }}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(option) => (
              <React.Fragment>
                <span>{countryToFlag(option.code)}</span>
                {option.label}
              </React.Fragment>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                required
                label={context.t("Country")}
                error={error.country}
                helperText={errorMessage.country}
                variant="outlined"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
          <TextField
            id="createdAt"
            label={context.t("Registration Time")}
            value={startDate}
            variant="outlined"
            labelWidth={120}
            disabled
          />
          <TextField
            id="loginStatus"
            label={context.t("Last Login Time")}
            value={lastLoginTime}
            variant="outlined"
            labelWidth={120}
            disabled
          />
          <TextField
            id="createdAt"
            label={context.t("Last Bet Time")}
            value={lastBetTime}
            variant="outlined"
            labelWidth={120}
            disabled
          />
          <TextField
            id="cashBalance"
            label={context.t("Cash Balance")}
            value={form.balance}
            variant="outlined"
            labelWidth={120}
            disabled
          />
          <TextField
            id="promoBalance"
            label={context.t("Promo Balance")}
            value={form.promo_balance}
            variant="outlined"
            labelWidth={120}
            disabled
          />
          <TextField
            id="KYC"
            label={context.t("KYC")}
            value={form.kycStatus}
            variant="outlined"
            labelWidth={120}
            disabled
          />
          <TextField
            id="siteID"
            label={context.t("SiteID")}
            value={form.siteID}
            variant="outlined"
            labelWidth={120}
            disabled
          />
          {RenderLinkButton({
            type: buttonTypes.submit,
            validator: formValidator,
            title: context.t("Submit"),
            customStyles: {
              display: "grid",
              maxWidth: 220,
              margin: "15px 10px 60px",
            },
          })}
        </form>
      </div>
    </div>
  );
};

PlayerProfile.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default PlayerProfile;
