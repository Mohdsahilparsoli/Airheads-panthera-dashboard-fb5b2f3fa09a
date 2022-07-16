import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../../styles/Colors.scss";
import IconButton from "@material-ui/core/IconButton";
import AttachFile from "@material-ui/icons/AttachFile";

const useStyles = makeStyles((theme) => ({
  AddButton: {
    padding: theme.spacing(2),
    margin: "15px 0",
    minWidth: 220,
    color: colors.white,
    background: colors.successColor,
    "&:hover": {
      background: colors.successColorHover,
    },
  },
  formControl: {
    minWidth: 500,
    maxWidth: 500,
    margin: "10px 10px",
  },
  input: {
    display: "none",
  },
  medium:{
    color: colors.medium
  },
  low: {
    color: colors.low
  },
  high: {
    color: colors.high
  },
  critical: {
    color: colors.critical
  }
}));

const CreateTicket = ({ customStyles, title, context }) => {
  const [open, setOpen] = useState(false);
  const [urgency, setUrgency] = useState("medium");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");

  const changeAssignee = (event) => {
    setAssignee(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  

  const changeUrgency = (event) => {
    setUrgency(event.target.value);
  };

  const changeDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <Button
        variant="contained"
        className={classes.AddButton}
        onClick={handleClickOpen}
        style={customStyles}
      >
        {title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {context.t("Create Ticket")}
        </DialogTitle>
        <DialogContent>
          <div style={{ width: "96%", margin: "auto" }}>
            <DialogContentText>* required fields</DialogContentText>
            <TextField
              id="name"
              label={context.t("Title")}
              type="text"
              required
              className={classes.formControl}
            />
            <TextField
              id="description"
              multiline
              label={context.t("Description")}
              type="text"
              rows={10}
              rowsMax={16}
              value={description}
              onChange={changeDescription}
              className={classes.formControl}
              required
            />

            <DialogContentText className={classes.formControl}>
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
                  Attach a file
                </IconButton>
              </label>
            </DialogContentText>

            <FormControl className={classes.formControl}>
              <InputLabel>{context.t("Assignee")}</InputLabel>
              <Select
                value={assignee}
                onChange={changeAssignee}
                labelWidth={60}
              >
                <MenuItem value={"techTeam"}>{context.t("Tech team")}</MenuItem>
                <MenuItem value={"paymentsTeam"}>{context.t("Payments team")}</MenuItem>
                <MenuItem value={"customerSuccessTeam"}>{context.t("Customer success team")}</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel required>{context.t("Urgency")}</InputLabel>
              <Select
                value={urgency}
                onChange={changeUrgency}
                labelWidth={60}
              >
                <MenuItem className={classes.medium} value={"medium"}>Medium</MenuItem>
                <MenuItem className={classes.low} value={"low"}>Low</MenuItem>
                <MenuItem className={classes.high} value={"high"}>High</MenuItem>
                <MenuItem className={classes.critical} value={"critical"}>Critical</MenuItem>
              </Select>
            </FormControl>
            
        </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {context.t("Cancel")}
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {context.t("Create Ticket")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateTicket;
