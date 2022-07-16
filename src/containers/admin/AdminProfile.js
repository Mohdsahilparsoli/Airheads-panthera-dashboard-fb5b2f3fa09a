import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { KeyboardDatePicker } from "@material-ui/pickers";
import MuiPhoneNumber from "material-ui-phone-number";
import {
  RenderLinkButton,
  buttonTypes,
} from "../../components/button/renderButton";
import PropTypes from "prop-types";
import Feature from "../../components/Feature";
import colors from "../../styles/Colors.scss";
import "../../styles/AdminProfile.scss";
import { inputFieldsValidators } from "../../validators/customInputValidators";
import { form_data, errors, errorMessages } from "./AdminForm";
import { formErrorValidators } from "../../validators/formValidators";
import { countries, countryToFlag } from "../../helpers/countries";

import { checkRequest } from "../../store/authentication/tokenHandlerAction";
import { getUserInfo, UpdateUser } from "../../store/userManagment/userActions";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: "10px",
      width: "40%",
    },
  },
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
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

const AdminProfile = (props, context) => {
  const store = useSelector((state) => ({
    data: state.changeAdminGridData.data,
    userID: state.changeSelectedUser.adminId,
    user: state.changeUserData.user,
  }));
  const dispatch = useDispatch();
  const classes = useStyles();
  const [form, setValues] = useState(form_data);
  const [error, setError] = useState(errors);
  const [errorMessage, setErrorMessage] = useState(errorMessages);
  const [startDate, handleStartDateChange] = useState(new Date());
  const [formValidator, setFormValidator] = useState(false);
  const changePhoneNumber = (value) => {
    setValues({ ...form, phone: value });
  };
  const [statusType, setstatusType] = useState("");
  const changestatusType = (event) => {
    setstatusType(event.target.value);
    setValues({ ...form, status: event.target.value });
  };
  const [roleType, setroleType] = useState("");
  const changeroleType = (event) => {
    setroleType(event.target.value);
    setValues({ ...form, role: event.target.value });
  };

  const [departmentType, setdepartmentType] = useState("");
  const changedepartmentType = (event) => {
    setdepartmentType(event.target.value);
    setValues({ ...form, department: event.target.value });
  };
  const [country, setCountry] = useState(countries[0]);

  const title = `${store.user.firstName} ${store.user.lastName} Profile`;

  const changeFields = (field, newValue) => {
    const validators = inputFieldsValidators(field, newValue);
    const { errorCode, errorText } = validators;
    setFormValidator(formErrorValidators({ ...error, [field]: errorCode }));
    setError({ ...error, [field]: errorCode });
    setErrorMessage({ ...errorMessage, [field]: errorText });
    setValues({ ...form, [field]: newValue });
  };
 
  const handleGoBack = (e) => {
    e.preventDefault();
    props.history.goBack();
  };
 
  const handleChange = (event) => {
    const field = event.target.id;
    const newValue = event.target.value;
    changeFields(field, newValue);
  };
  
  useEffect(() => {
    document.title = title;
    dispatch(checkRequest(getUserInfo(store.userID)));

    setValues({
      firstName: store.user.firstName,
      lastName: store.user.lastName,
      email: store.user.email,
      department: store.user.department,
      role: store.user.role,
      date_of_birth: store.user.date_of_birth,
      phone: store.user.phone,
      country: store.user.country,
      city: store.user.city,
      address: store.user.address,
      status: store.user.status,
    });
    handleStartDateChange(store.user.date_of_birth);
    setroleType(store.user.role);
    setdepartmentType(store.user.department);
    setstatusType(store.user.status);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.user.id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO UPDATE
    dispatch(checkRequest(UpdateUser({UUID: store.userID, body: form})))
    props.history.push("/adminManagement");
  };
  
  return (
    <div className="main">
      <h3>{context.t("Admin Details")}</h3>
      <hr />
      <div className="featureCointainer">
        <Feature
          value={store.data.length}
          text={context.t("Total Admins")}
          icon="user"
        />
        <Feature
          value={store.data.filter((el) => el.status === "active").length}
          text={context.t("Active Admins")}
          icon="user"
          subtext={context.t("Total Active Admins")}
        />
        <Feature
          value={store.data.filter((el) => el.status === "inactive").length}
          text={context.t("Inactive Admins")}
          icon="user"
          subtext={context.t("Total Inactive Admins")}
        />
        <Feature
          value={store.data.filter((el) => el.status === "blocked").length}
          icon="warning"
          subtext={context.t("Permanently Removed Access")}
          text={context.t("Blocked Admins")}
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
          required
          id="email"
          error={error.email}
          helperText={errorMessage.email}
          label={context.t("Email")}
          value={form.email}
          onChange={handleChange}
          variant="outlined"
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>{context.t("Department")}</InputLabel>
          <Select
            value={departmentType}
            onChange={changedepartmentType}
            labelWidth={60}
          >
            <MenuItem value={"Administration"}>Administration</MenuItem>
            <MenuItem value={"Operations"}>Operations</MenuItem>
            <MenuItem value={"Players"}>Players</MenuItem>
            <MenuItem value={"Payments"}>Payments</MenuItem>
            <MenuItem value={"Support"}>Support</MenuItem>
            <MenuItem value={"Accounts"}>Accounts</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>{context.t("Role")}</InputLabel>
          <Select value={roleType} onChange={changeroleType} labelWidth={60}>
            <MenuItem value={"owner"}>Owner</MenuItem>
            <MenuItem value={"hr"}>HR</MenuItem>
            <MenuItem value={"players_management"}>Players Management</MenuItem>
            <MenuItem value={"developer"}>Developer</MenuItem>
            <MenuItem value={"tech"}>Tech</MenuItem>
          </Select>
        </FormControl>
        <KeyboardDatePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          label={context.t("Date Of Birth")}
          format="MM/dd/yyyy"
          value={startDate}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date) => { handleStartDateChange(date);  setValues({ ...form, date_of_birth: date })}}
        />
        <MuiPhoneNumber
          variant="outlined"
          id="phone"
          label={context.t("Phone")}
          defaultCountry={"bg"}
          value={form.phone}
          onChange={changePhoneNumber}
        />
        <TextField
          id="city"
          required
          error={error.city}
          helperText={errorMessage.city}
          label={context.t("City")}
          value={form.city}
          onChange={handleChange}
          variant="outlined"
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
          required
          id="address"
          error={error.address}
          helperText={errorMessage.address}
          label={context.t("Address")}
          value={form.address}
          onChange={handleChange}
          variant="outlined"
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
  );
};

AdminProfile.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default AdminProfile;
