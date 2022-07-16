import React from "react";
import { useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

import { checkRequest } from "../../../store/authentication/tokenHandlerAction";
import { bulkUpatePlayers } from "../../../store/gridPlayersLoad/gridPlayersActions";
const useStyles = makeStyles((theme) => ({
  RemoveButton: {
    padding: theme.spacing(2),
    margin: "15px 0",
    minWidth: 220,
  },
}));
const DeleteButton = ({
  selectedPlayer,
  customStyles,
  context,
  title,
  gridApi,
}) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const UpdateAction = () => {
    const requestBody = {
      field: {
        status: "blocked",
      },
      userIds: selectedPlayer,
    };
    dispatch(checkRequest(bulkUpatePlayers(requestBody)));

    setOpen(false);
  };

  if (selectedPlayer.length === 0) {
    return (
      <Button
        variant="contained"
        color="secondary"
        className={classes.RemoveButton}
        disabled
        style={customStyles}
      >
        {context.t("Deactivate")}
      </Button>
    );
  } else {
    return (
      <>
        <Button
          variant="contained"
          color="secondary"
          className={classes.RemoveButton}
          onClick={handleClickOpen}
          style={customStyles}
        >
          {title}
        </Button>
        <Dialog
          open={open}
          type="submit"
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {context.t("Deactivate User Account")}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {/* TODO: Name should be fixed because selectedPlayer is only userId now. */}
              {context.t("Are you sure you want to Deactivate")}{" "}
              {selectedPlayer.length === 1
                ? `${context.t("selected account")}`
                : `${context.t("selected accounts")}`}{" "}
              ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              {context.t("Disagree")}
            </Button>
            <Button
              onClick={() => {
                UpdateAction();
              }}
              color="primary"
              autoFocus
            >
              {context.t("Agree")}
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
};

export default DeleteButton;
