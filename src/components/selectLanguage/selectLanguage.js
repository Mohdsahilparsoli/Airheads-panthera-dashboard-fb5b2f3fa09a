import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { setLanguage } from "redux-i18n";
import { connect } from "react-redux";
import LanguageIcon from "@material-ui/icons/Language";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";

const mapStateToProps = (state) => {
  return {
    lang: state.i18nState.lang,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (language) => dispatch(setLanguage(language)),
  };
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    padding: theme.spacing(1),
    minWidth: 220,
  },
  ButtonStyle: {
    color: "white",
    padding: 0,
  },
}));

const DialogSelect = (props, context) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    props.changeLanguage(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClickOpen} className={classes.ButtonStyle}>
        <LanguageIcon />
      </IconButton>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{context.t("Choose Language")}</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel> {context.t("Language")}</InputLabel>
              <Select
                value={props.lang}
                onChange={handleChange}
              >
                <MenuItem value={"en"}>English</MenuItem>
                <MenuItem value={"se"}>Swedish</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {context.t("Cancel")}
          </Button>
          <Button onClick={handleClose} color="primary">
            {context.t("OK")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
DialogSelect.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogSelect);
