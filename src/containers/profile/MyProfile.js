import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginImageEdit from "filepond-plugin-image-edit";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { KeyboardDatePicker } from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import MuiPhoneNumber from "material-ui-phone-number";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { inputFieldsValidators } from "../../validators/customInputValidators";
import { formErrorValidators } from "../../validators/formValidators";
import colors from "../../styles/Colors.scss";

import {
  RenderLinkButton,
  buttonTypes,
} from "../../components/button/renderButton";
import "../../styles/MyProfile.scss";
import { form_values, form_errors, form_errors_message } from "./ProfileForm";
import { PageNotifications } from "../../components/notifications/notificationService";
import { countries, countryToFlag } from "../../helpers/countries";

import { checkRequest } from "../../store/authentication/tokenHandlerAction";
import {
  getCurrentUserInfo,
  UpdatePhoto,
} from "../../store/userManagment/userActions";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize,
  FilePondPluginImageEdit
);

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
  body: {
    display: "grid",
    gridTemplateColumns: "auto auto",
  },
  input: {
    display: "none",
  },
  updateImage: {
    display: "flex",
    justifyContent: "center",
  },
  imageProfile: {
    margin: "0 10px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& .MuiIconButton-colorPrimary:hover": {
      backgroundColor: "transparent",
    },
  },
  SubmitButton: {
    margin: "0 10px",
    padding: "10px 5px",
    minWidth: "150px",
    justifySelf: "center",
    color: colors.white,
    background: colors.successColor,
    "&:hover": {
      background: colors.successColorHover,
    },
  },
  imageForm: {
    display: "grid",
  },
  imageBox: {
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    justifyContent: "center",
  },
}));

const MyProfile = (props, context) => {
  const classes = useStyles();
  const store = useSelector((state) => ({
    profilePicture: state.loggedInUser.profilePicture,
    user_data: state.changeProfileUserData.current_user,
    notificationMessage: state.showNotification.notificationMessage,
    showNotificationMessage: state.showNotification.showNotificationMessage,
  }));
  const dispatch = useDispatch();

  const [buttonsDisabled, setButtonsDisabled] = useState(true);
  const [form, setValues] = useState(form_values);
  const [formValidator, setFormValidator] = useState(false);
  const [error, setError] = useState(form_errors);
  const [errorMessage, setErrorMessage] = useState(form_errors_message);

  useEffect(() => {
    document.title = `User Profile`;
    dispatch(checkRequest(getCurrentUserInfo()));
    setValues({
      ...form,
      firstName: store.user_data.firstName,
      lastName: store.user_data.lastName,
      email: store.user_data.email,
      department: store.user_data.department,
      role: store.user_data.role,
      date_of_birth: store.user_data.date_of_birth,
      phone: store.user_data.phone,
      country: store.user_data.country,
      city: store.user_data.city,
      address: store.user_data.address,
      status: store.user_data.status,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.user_data.firstName,
    store.user_data.lastName,
    store.user_data.email,
    store.user_data.department,
    store.user_data.role,
    store.user_data.date_of_birth,
    store.user_data.phone,
    store.user_data.country,
    store.user_data.city,
    store.user_data.address,
    store.user_data.status,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonsDisabled(true);
  };

  const handleEdit = (e) => {
    setButtonsDisabled(false);
  };

  const handleCancel = (e) => {
    setButtonsDisabled(true);
  };
  const changeFields = (field, newValue) => {
    const validators = inputFieldsValidators(field, newValue);
    const { errorCode, errorText } = validators;
    setFormValidator(formErrorValidators({ ...error, [field]: errorCode }));
    setError({ ...error, [field]: errorCode });
    setErrorMessage({ ...errorMessage, [field]: errorText });
    setValues({ ...form, [field]: newValue });
  };

  const handleChange = (event) => {
    const field = event.target.id;
    const newValue = event.target.value;
    changeFields(field, newValue);
  };
  const [startDate, handleStartDateChange] = useState(new Date());
  const [imgCollection, setImgCollection] = useState("");
  const [country, setCountry] = useState(countries[0]);
  const onFileChange = (files) => {
    if (files[0] && files[0].file.name) {
      let items = files.map((fileItem) => fileItem.file);
      setImgCollection([items]);
    } else {
      setImgCollection("");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();

    for (let img in imgCollection) {
      formData.append("imgCollection", imgCollection[0][img]);
    }

    formData.append("folder", "profile_picture");
    dispatch(checkRequest(UpdatePhoto(formData)));
  };

  const changePhoneNumber = (value) => {
    setValues({ ...form, phone: value });
  };
  return (
    <div className="main">
      {store.showNotificationMessage ? <PageNotifications /> : ""}
      <div style={{ display: "flex" }}>
        <ArrowBackIcon
          style={{ padding: "0 10px", cursor: "pointer" }}
          onClick={() => props.history.goBack()}
        />
        <h3>{context.t("User Profile")}</h3>
      </div>

      <hr />
      <div className={classes.body}>
        <div className={classes.imageProfile}>
          <img
            src={
              store.profilePicture === null
                ? "https://i2.wp.com/brookfieldsschool.org/wp-content/uploads/2019/03/blank-profile-picture-973460_960_720.png?fit=720%2C720&ssl=1&w=640"
                : store.profilePicture
            }
            alt="profile"
            className={classes.imageBox}
          />

          {!buttonsDisabled ? (
            <>
              <form onSubmit={onSubmit} className={classes.imageForm}>
                <div className="filepond-wrapper">
                  <FilePond
                    files={imgCollection}
                    labelIdle={`Drag & Drop your picture or <span class="filepond--label-action">Browse</span>`}
                    allowRevert={false}
                    allowImagePreview={true}
                    acceptedFileTypes={["image/png", "image/jpeg"]}
                    maxFileSize={"5MB"}
                    allowMultiple={false}
                    server={null}
                    instantUpload={false}
                    onupdatefiles={(fileItems) => onFileChange(fileItems)}
                  ></FilePond>
                </div>
                <Button
                  variant="contained"
                  className={classes.SubmitButton}
                  type="submit"
                  // disabled={validator}
                >
                  submit
                </Button>
              </form>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="user-profile-form">
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
              label={context.t("Name")}
              value={form.firstName}
              onChange={handleChange}
              variant="outlined"
              disabled={buttonsDisabled}
            />
            <TextField
              error={error.lastName}
              helperText={errorMessage.lastName}
              id="lastName"
              label={context.t("Name")}
              value={form.lastName}
              onChange={handleChange}
              variant="outlined"
              disabled={buttonsDisabled}
            />
            <TextField
              error={error.email}
              helperText={errorMessage.email}
              id="email"
              label={context.t("Email")}
              value={form.email}
              onChange={handleChange}
              variant="outlined"
              disabled={buttonsDisabled}
            />
            <TextField
              id="department"
              label={context.t("Department")}
              value={form.department}
              onChange={handleChange}
              variant="outlined"
              disabled
            />
            <TextField
              id="role"
              label={context.t("Role")}
              value={form.role}
              onChange={handleChange}
              variant="outlined"
              disabled
            />
            <KeyboardDatePicker
              autoOk
              variant="inline"
              inputVariant="outlined"
              label={context.t("Date Of Birth")}
              format="MM/dd/yyyy"
              value={startDate}
              InputAdornmentProps={{ position: "start" }}
              onChange={(date) => {
                handleStartDateChange(date);
                setValues({ ...form, date_of_birth: date });
              }}
              disabled={buttonsDisabled}
            />
            <MuiPhoneNumber
              variant="outlined"
              id="phone"
              label={context.t("Phone")}
              defaultCountry={"bg"}
              value={form.phone}
              onChange={changePhoneNumber}
              disabled={buttonsDisabled}
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
              disabled={buttonsDisabled}
            />
            <Autocomplete
              options={countries}
              id="country"
              value={country}
              disabled={buttonsDisabled}
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
              disabled={buttonsDisabled}
              id="address"
              error={error.address}
              helperText={errorMessage.address}
              label={context.t("Address")}
              value={form.address}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              id="status"
              label={context.t("Status")}
              value={form.status}
              onChange={handleChange}
              variant="outlined"
              disabled
            />

            <Grid container spacing={2}>
              {buttonsDisabled && (
                <Grid item>
                  {RenderLinkButton({
                    type: buttonTypes.function,
                    title: context.t("Edit"),
                    handleClick: handleEdit,
                    customStyles: {
                      margin: "0 10px",
                      padding: "10px 5px",
                      minWidth: "150px",
                      color: colors.white,
                      background: "#3f51b5",
                    },
                  })}
                </Grid>
              )}

              <Grid item>
                {RenderLinkButton({
                  type: buttonTypes.submit,
                  // validator: buttonsDisabled ? buttonsDisabled : buttonsDisabled || formValidator,
                  validator: formValidator,
                  title: context.t("Save"),
                  customStyles: {
                    margin: "0 10px",
                    padding: "10px 5px",
                    minWidth: "150px",
                    display: buttonsDisabled ? "none" : "block",
                  },
                })}
              </Grid>

              {!buttonsDisabled && (
                <Grid item>
                  {RenderLinkButton({
                    type: buttonTypes.function,
                    title: context.t("Cancel"),
                    handleClick: handleCancel,
                    customStyles: {
                      margin: "0 10px",
                      padding: "10px 5px",
                      minWidth: "150px",
                    },
                  })}
                </Grid>
              )}
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

MyProfile.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default MyProfile;
