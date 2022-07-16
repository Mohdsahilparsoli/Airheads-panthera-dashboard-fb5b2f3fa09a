/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import GridConfig from "../../components/grid/GridConfig";
import "../../styles/PlayerProfile.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import TextField from "@material-ui/core/TextField";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import { inputFieldsValidators } from "../../validators/customInputValidators";
import { formErrorValidators } from "../../validators/formValidators";
import IconButton from "@material-ui/core/IconButton";
import AttachFile from "@material-ui/icons/AttachFile";
import DialogContentText from "@material-ui/core/DialogContentText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import {
  RenderLinkButton,
  buttonTypes,
} from "../../components/button/renderButton";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { communicationsDataMock } from '../../mockData/communicationsMockData' 

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: "10px",
      minWidth: "40%",
    }
  },
  description: {
    margin: "10px",
    width: "81.5%",
  },
  notes: {
    width: "90%",
    margin: "8px 0"
  },
  input: {
    display: "none",
  },
  formControl: {
    minWidth: "40%",
    margin: "10px 10px",
  },
}));

const ViewTicket = (props, context) => {
  const store = useSelector((state) => ({
    ticketId: state.changeSelectedUser.ticketId,
  }));

  const ticket = communicationsDataMock.filter((el) => el.id === store.ticketId)[0];

  const classes = useStyles();
  let ticketData = [];
  const [gridApi, setGridApi] = useState({});

  const [additionalNotes, setAdditionalNotes] = useState("");
  const [assignee, setAssignee] = useState(ticket.assignee);

  const changeAssignee = (event) => {
    setAssignee(event.target.value);
  };

  const onGridReady = params => {
    setGridApi(params.api);
  };

  const [form, setValues] = useState({
    ticketId: "",
    status: "",
    date: "",
    title: "",
    description: "",
  });
  const [formValidator, setFormValidator] = useState(false);
  const [error, setError] = useState({
    ticketId: false,
    status: false,
    date: false,
    title: false,
    description: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    ticketId: "",
    status: "",
    date: "",
    title: "",
    description: "",
  });
  const title = `View Ticket`;

  ticketData = [
    {
      date: '01.03.2020 12:35',
      status: 'Submitted',
      comments: 'Editing an inactive player throws an error'
  },
  {
    date: '02.03.2020 13:12',
    status: 'In Review',
    comments: 'Dev team working on hotfix'
},
  {
      date: '02.03.2020 13:45',
      status: 'Solved',
      comments: 'Issue resolved'
  }]

  useEffect(() => {
    document.title = title;
    setValues({
      ticketId: ticket.id,
      status: ticket.status,
      date: ticket.date,
      title: ticket.title,
      description: ticket.description,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.history.push("/communications");

    console.log("handleSubmit: ", form);
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

  return (
    <div className="main">
      <div style={{ display: "flex" }}>
        <ArrowBackIcon
          style={{ padding: "0 10px", cursor: "pointer" }}
          onClick={() => props.history.goBack()}
        />
        <h3>{context.t("Ticket Details")}</h3>
      </div>
      <hr />
      <div className="container-box">
        <div className="editMenuProfile">
          
        </div>

        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          // onSubmit={handleSubmit}
        >
          <TextField
            error={error.ticketId}
            helperText={errorMessage.ticketId}
            id="ticketId"
            label={context.t("Ticket Id")}
            value={form.ticketId}
            onChange={handleChange}
            variant="outlined"
            labelWidth={120}
            disabled
          />
          <TextField
            error={error.status}
            helperText={errorMessage.status}
            id="status"
            label={context.t("Status")}
            value={form.status}
            onChange={handleChange}
            variant="outlined"
            labelWidth={120}
            disabled
          />
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label={context.t("Date")}
            format="MM/dd/yyyy"
            value={form.date}
            InputAdornmentProps={{ position: "start" }}
            disabled
          />
          <TextField
            error={error.title}
            helperText={errorMessage.title}
            id="title"
            label={context.t("Title")}
            value={form.title}
            onChange={handleChange}
            variant="outlined"
            labelWidth={120}
            disabled
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>{context.t("Assignee")}</InputLabel>
            <Select
              value={assignee}
              onChange={changeAssignee}
              labelWidth={60}
            >
              <MenuItem value={"Tech team"}>{context.t("Tech team")}</MenuItem>
              <MenuItem value={"Payments team"}>{context.t("Payments team")}</MenuItem>
              <MenuItem value={"Customer success team"}>{context.t("Customer success team")}</MenuItem>
            </Select>
          </FormControl>
          <TextField
            error={error.description}
            multiline
            rows={2}
            rowsMax={2}
            helperText={errorMessage.description}
            id="description"
            label={context.t("Description")}
            value={form.description}
            onChange={handleChange}
            variant="outlined"
            labelWidth={120}
            disabled
            className={classes.description}
          />
        </form>
      </div>
      <div style={{ display: "flex", margin: "8px 0" }}>
          <h4>{context.t("Additional Information")}</h4>
        </div>
        <hr/>
        
          <TextField
            id="name"
            label={context.t("Additional Notes")}
            type="text"
            value={additionalNotes}
            onChange={(event) => setAdditionalNotes(event.target.value)}
            className={classes.notes}
          />
          
          <DialogContentText className={classes.notes}>
            {context.t("Attach a file")}

            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload file"
                component="span"
              >
                <AttachFile />
              </IconButton>
            </label>
          </DialogContentText>

          {RenderLinkButton({
            type: buttonTypes.submit,
            validator: formValidator,
            title: context.t("Submit"),
            handleClick: handleSubmit,
            customStyles: {
              display: "grid",
              maxWidth: 220,
              // margin: "15px 10px",
            },
          })}

          <div className="gridWrap">
            <div className="ag-theme-material">
              <div style={{ height: "33vh" }}>
                <GridConfig
                  props={{
                    gridType: "ViewTicket",
                    onGridReady,
                    // onRowSelected: onTicketSelected,
                    rowData: ticketData
                  }}
                />
              </div>
            </div>
          </div>          
    </div>
  );
};

ViewTicket.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default ViewTicket;
