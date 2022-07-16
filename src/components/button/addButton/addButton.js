import React from 'react'
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../../styles/Colors.scss";

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
      minWidth: 220,
      margin: "10px 10px",
    },
  }));


const AddButton = ({context, title, customStyles}) =>{ 
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
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
              {context.t("Add User")}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Here You can add some Lorem Ipsum Text
              </DialogContentText>
              <TextField
                margin="dense"
                id="name"
                label={context.t("Enter Name")}
                type="text"
                className={classes.formControl}
              />
              <TextField
                margin="dense"
                id="email"
                label={context.t("Enter Email")}
                type="email"
                className={classes.formControl}
              />
              <TextField
                margin="dense"
                id="city"
                label={context.t("Enter City")}
                type="text"
                className={classes.formControl}
              />
              <TextField
                margin="dense"
                id="zipCode"
                label={context.t("Enter Zip Code")}
                type="text"
                className={classes.formControl}
              />
              <TextField
                margin="dense"
                id="street"
                label={context.t("Enter Street")}
                type="text"
                className={classes.formControl}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                {context.t("Cancel")}
              </Button>
              <Button onClick={handleClose} color="primary">
                {context.t("Add")}
              </Button>
            </DialogActions>
          </Dialog>
        </>
      );

}

export default AddButton