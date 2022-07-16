import React, { useState, useEffect } from "react";
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
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { playerMock } from "../../mockData/playersMock";
import { KeyboardDatePicker } from "@material-ui/pickers";
import ProfileItems from "../profile/ProfileItems";
import { Link } from "react-router-dom";

import PersonIcon from "@material-ui/icons/Person";
import PaymentIcon from "@material-ui/icons/Payment";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import BlockIcon from "@material-ui/icons/Block";
import Feature from "../../components/Feature";
import colors from "../../styles/Colors.scss";

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
      transform: "translate(25px, -6px) scale(0.75)",
    },
  },
}));

const PlayerResponsibleGaming = (props, context) => {
  const store = useSelector((state) => ({
    id: state.changeSelectedUser.id,
  }));
  const user = playerMock.filter((el) => el.userid === store.id);

  const classes = useStyles();
  const [form, setValues] = useState({
    userid: null,
    email: "",
    firstName: "",
    lastName: "",
    status: "",
    selfExclusionStart: "",
    selfExclusionEnd: "",
  });
  const [formValidator, setFormValidator] = useState(false);
  const [error, setError] = useState({
    email: false,
    firstName: false,
    lastName: false,
    status: false,
    selfExclusionStart: false,
    selfExclusionEnd: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    firstName: "",
    lastName: "",
    status: "",
    selfExclusionStart: "",
    selfExclusionEnd: "",
  });

  const title = `${form.firstName} ${form.lastName} Responsible Gaming Details`;

  useEffect(() => {
    document.title = title;

    setValues({
      id: store.id,
      email: user[0].email,
      firstName: user[0].firstName,
      lastName: user[0].lastName,
      status: user[0].status,
      selfExclusionStart: user[0].selfExclusionStart,
      selfExclusionEnd: user[0].selfExclusionEnd,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to /
    props.history.push("./responsibleGaming");

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
  const [statusType, setstatusType] = useState(user[0].status);
  const changestatusType = (event) => {
    setstatusType(event.target.value);
  };
  const [selfExclusionStart, handleselfExclusionStart] = useState(
    new Date(user[0].selfExclusionStart)
  );
  const [selfExclusionEnd, handleselfExclusionEnd] = useState(
    new Date(user[0].selfExclusionEnd)
  );
  return (
    <div className="main">
      <h3>{context.t("Player Responsible Gaming Details")}</h3>
      <hr />

      <div className="featureCointainer">
        <Feature value={100} text={context.t("Total Players")} icon="user" 
          subtext={context.t("Total registered players")}
        />
        <Feature value={88} text={context.t("Active Players")} icon="user" 
          subtext={context.t("Total active players in 6 months")}
        />
        <Feature value={12} text={context.t("Temporarily Blocked")} icon="user" 
          subtext={context.t("Excluded for up to 1 month")}
        />
        <Feature value={0} text={context.t("Permanently excluded")}icon="warning" 
          subtext={context.t("Self excluded indefinitely")}
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
          <div className="choosenImage">
              <ProfileItems name={context.t("Restrictions")} Icon={BlockIcon} />
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
          id="name"
          label={context.t("First Name")}
          value={form.firstName}
          onChange={handleChange}
          variant="outlined"
          labelWidth={120}
        />
        <TextField
          error={error.lastName}
          helperText={errorMessage.lastName}
          id="name"
          label={context.t("Last Name")}
          value={form.lastName}
          onChange={handleChange}
          variant="outlined"
          labelWidth={120}
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
            <MenuItem value={"Active"}>Active</MenuItem>
            <MenuItem value={"Inactive"}>Inactive</MenuItem>
            <MenuItem value={"Blocked"}>Blocked</MenuItem>
          </Select>
        </FormControl>
        <KeyboardDatePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          label={context.t("Self-Exclusion Start")}
          format="MM/dd/yyyy"
          value={selfExclusionStart}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date) => handleselfExclusionStart(date)}
          disabled
        />
        <KeyboardDatePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          label={context.t("Self-Exclusion End")}
          format="MM/dd/yyyy"
          value={selfExclusionEnd}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date) => handleselfExclusionEnd(date)}
          disabled
        />
        {RenderLinkButton({
          type: buttonTypes.submit,
          validator: formValidator,
          title: context.t("Submit"),
          customStyles: {
            display: "grid",
            maxWidth: 220,
            margin: "15px 10px",
          },
        })}
      </form>
      </div>
    </div>
  );
};

PlayerResponsibleGaming.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default PlayerResponsibleGaming;
