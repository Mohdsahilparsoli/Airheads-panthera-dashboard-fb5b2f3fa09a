/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { inputFieldsValidators } from "../../validators/customInputValidators";
import { formErrorValidators } from "../../validators/formValidators";
import {
  RenderLinkButton,
  buttonTypes,
} from "../../components/button/renderButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { playerMock } from "../../mockData/playersMock";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { KeyboardDatePicker } from "@material-ui/pickers";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Link } from "react-router-dom";
import ProfileItems from "../profile/ProfileItems";
import PersonIcon from "@material-ui/icons/Person";
import PaymentIcon from "@material-ui/icons/Payment";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import BlockIcon from "@material-ui/icons/Block";
import Feature from "../../components/Feature";
import colors from "../../styles/Colors.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "96%",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      minWidth: "40%",
    },
    "& .MuiOutlinedInput-input": {
      border: "none",
    },
  },
  formControl: {
    minWidth: "40%",
    padding: "0 9px",
    margin: "8px 0",
    "& .MuiInputLabel-shrink": {
      transform: "translate(25px, -6px) scale(0.75)",
    },
  },
  progressBar: {
    margin: "0 30px",
    maxWidth: "500px",
  },
}));

const PlayerBonuses = (props, context) => {
  const store = useSelector((state) => ({
    id: state.changeSelectedUser.id,
  }));
  const classes = useStyles();

  const [form, setValues] = useState({
    userid: null,
    email: "",
    firstName: "",
    lastName: "",
    affiliateId: null,
    bonusStatus: "",
    typeofBonus: "",
    bonusGivenOn: "",
    bonusExpiresOn: "",
    cashBalance: null,
    promoBalance: null,
    amountWagered: null,
    bonusCleared: "",
  });
  const [formValidator, setFormValidator] = useState(false);
  const [error, setError] = useState({
    email: false,
    firstName: false,
    lastName: false,
    affiliateId: false,
    bonusStatus: false,
    typeofBonus: false,
    bonusGivenOn: false,
    bonusExpiresOn: false,
    cashBalance: false,
    promoBalance: false,
    amountWagered: false,
    bonusCleared: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    firstName: "",
    lastName: "",
    affiliateId: null,
    bonusStatus: "",
    typeofBonus: "",
    bonusGivenOn: "",
    bonusExpiresOn: "",
    cashBalance: null,
    promoBalance: null,
    amountWagered: null,
    bonusCleared: "",
  });
  const user = playerMock.filter((el) => el.userid === store.id)[0];
  const title = `${form.firstName} ${form.lastName}  Bonuses Details`;
  useEffect(() => {
    document.title = title;
    setValues({
      userid: user.userid,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      affiliateId: user.affiliateId,
      bonusStatus: user.bonusStatus,
      typeofBonus: user.typeofBonus,
      bonusGivenOn: user.bonusGivenOn,
      bonusExpiresOn: user.bonusExpiresOn,
      cashBalance: user.cashBalance,
      promoBalance: user.promoBalance,
      amountWagered: user.amountWagered,
      bonusCleared: user.bonusCleared,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [completed, setCompleted] = useState(
    // eslint-disable-next-line no-useless-escape
    user.bonusCleared.replace(/\%/g, "")
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to /
    props.history.push("./bonuses");

    console.log("handleSubmit: ", form);
  };

  const handleGoBack = (e) => {
    e.preventDefault();

    props.history.goBack();
  };

  const handleChange = (event) => {
    const field = event.target.id;
    const validators = inputFieldsValidators(field, event.target.value);
    const { errorCode, errorText } = validators;
    setFormValidator(formErrorValidators({ ...error, [field]: errorCode }));
    setError({ ...error, [field]: errorCode });
    setErrorMessage({ ...errorMessage, [field]: errorText });
    setValues({ ...form, [field]: event.target.value });
  };
  const [statusType, setstatusType] = useState(user.status);
  const changestatusType = (event) => {
    setstatusType(event.target.value);
  };
  const [startDate, handleStartDateChange] = useState(
    new Date(user.bonusGivenOn)
  );
  const [endDate, handleEndDateChange] = useState(
    new Date(user.bonusExpiresOn)
  );
  return (
    <div className="main">
      <h3>{context.t("Player Bonuses Details")}</h3>
      <hr />

      <div className="featureCointainer">
        <Feature
          value={111}
          text={context.t("Active Bonuses")}
        />
        <Feature
          value={222}
          text={context.t("Active Bonuses Value")}
        />
        <Feature
          value={333}
          text={context.t("Active Deposit Bonuses")}
        />
        <Feature
          value={444}
          text={context.t("Active Reload Bonuses")}
        />
      </div>

      <div className="gridWrap">
        <div className="ag-theme-material">
          {/* ---------------------------------  Go Back  ----------------------------------- */}
          {RenderLinkButton({
            type: buttonTypes.function,
            title: context.t("Go Back"),
            handleClick: handleGoBack,
            customStyles: { 
              margin: "25px 20px",
              color: colors.white,
              background: "#3f51b5",
            }
          }, context)}
        </div>
      </div>

      <br />

      <div className="container-box">
        <div className="editMenuProfile">
          <div className="menuIcon">
          <Link
              to={{
                pathname: "./playerProfile",
              }}
            >
            <ProfileItems name={context.t("Profile")} Icon={PersonIcon} />
            </Link>
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
          <div className="choosenImage">
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
          error={error.firstName}
          helperText={errorMessage.firstName}
          id="firstName"
          label={context.t("First Name")}
          value={form.firstName}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
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
        />
        <TextField
          id="affiliateId"
          label={context.t("affiliateId")}
          value={form.affiliateId}
          onChange={handleChange}
          variant="outlined"
          disabled
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>{context.t("Status")}</InputLabel>
          <Select
            value={statusType}
            onChange={changestatusType}
            labelWidth={60}
          >
            <MenuItem value={"Active"}>{context.t("Active")}</MenuItem>
            <MenuItem value={"Inactive"}>{context.t("Inactive")}</MenuItem>
            <MenuItem value={"Blocked"}>{context.t("Blocked")}</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="typeofBonus"
          label={context.t("Type Of Bonus")}
          value={form.typeofBonus}
          onChange={handleChange}
          variant="outlined"
          disabled
        />
        <KeyboardDatePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          label={context.t("Bonus Given On")}
          format="MM/dd/yyyy"
          value={startDate}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date) => handleStartDateChange(date)}
        />
        <KeyboardDatePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          label={context.t("Bonus Expires On")}
          format="MM/dd/yyyy"
          value={endDate}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date) => handleEndDateChange(date)}
        />
        <TextField
          id="cashBalance"
          label={context.t("Cash Balance")}
          value={form.cashBalance}
          onChange={handleChange}
          variant="outlined"
          disabled
        />
        <TextField
          id="promoBalance"
          label={context.t("Promo Balance")}
          value={form.promoBalance}
          onChange={handleChange}
          variant="outlined"
          disabled
        />
        <TextField
          id="bonusCleared"
          label={context.t("Bonus Cleared")}
          value={form.bonusCleared}
          onChange={handleChange}
          variant="outlined"
          disabled
        />
        <TextField
          id="amountWagered"
          label={context.t("Amount Wagered")}
          value={form.amountWagered}
          onChange={handleChange}
          variant="outlined"
          disabled
        />
        <LinearProgress
          variant="determinate"
          className={classes.progressBar}
          value={completed}
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

PlayerBonuses.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default PlayerBonuses;
