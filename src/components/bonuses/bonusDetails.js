import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { formatISO } from "date-fns";
import Typography from "@material-ui/core/Typography";

const BonusDetails = (props) => {
  const { open, close, data } = props;
  const useStyles = makeStyles({
    root: {
      width: "95%",
      paddingBottom: "0px",
      margin: "15px 10px",
      "& .bodyText": {
        color: "black",
      },
    },
    cardContent: {
      paddingBottom: "0px",
    },
    active: {
      "& .status": {
        color: "green",
      },
    },
    deactivated: {
      "& .status": {
        color: "red",
      },
    },
    title: {
      fontWeight: "500",
    },
  });
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={() => close()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>{data.title}</DialogTitle>
      <DialogContent>
        <div>
          <Typography
            className={classes.pos}
            color="textSecondary"
            gutterBottom
          >
            <span> ID: {data.id}</span>
          </Typography>
          <Typography
            className={
              data.status === "Active" ? classes.active : classes.deactivated
            }
            color="textSecondary"
          >
            Status:
            <span className="status"> {data.status} </span>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Duration:
            <span> {data.startDate} - {data.endDate}
            </span>
            <br />
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Providers:
            <span> {data.provider} </span>
            <br />
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Condition:
            <span> {data.depositCondition} </span>
            <br />
          </Typography>
        </div>
        <DialogContentText
          id="alert-dialog-description"
          style={{ marginTop: "20px" }}
        >
          {data.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          Close
        </Button>
      </DialogActions>
    </Modal>
  );
};

export default BonusDetails;
