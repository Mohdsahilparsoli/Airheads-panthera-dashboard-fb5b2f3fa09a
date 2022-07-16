/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import colors from "../../styles/Colors.scss";
import PropTypes from "prop-types";

import ChooseOneAndEdit from "./chooseOneAndEdit/chooseOneAndEdit";
import CreateTicket from "./createTicket/createTicket";
import AddBonusType from "./addBonusType/addBonusType";
import AddButton from "./addButton/addButton";
import RemoveButton from "./deleteButton/deletebutton";
// avaliable props:

// required:
// type  - object -below we got the types avaliable
//         if you need extra just add them in buttonTypes object
// title - string -title of the button

// custom:
// selectedPlayer - object - on row selection
// link - string - if your button has redirection link this is the place
// customStyles - object - it added customStyles to the button
//                please don't touch global declared here
// gridApi - if you need manipulation with the grid
//         - example delete button
// validator - boolean - disable button in case of false

// example of the component usage:
// import {
//   RenderLinkButton,
//   buttonTypes
// } from "../components/button/renderButton";
// ...
// ...
/* ---------------------------------  Create Player  ----------------------------------- */
//  {RenderLinkButton({
//   selectedPlayer,
//   type: buttonTypes.add,
//   title: "Create Player",
//   customStyles: { margin: "25px 20px" }
// }, context)}

/* ----------------------------------  Edit Player  ------------------------------------ */
// {RenderLinkButton({
//   selectedPlayer,
//   link: "./playerProfile",
//   type: buttonTypes.chooseOneAndEdit,
//   title: "Edit Profile",
//   customStyles: { margin: "25px 20px" }
// }, context)}

/* ---------------------------------  Delete Player  ---------------------------------- */
// {RenderLinkButton({
//   selectedPlayer,
//   type: buttonTypes.delete,
//   title: "Deactivate",
//   customStyles: { margin: "25px 20px" },
//   gridApi
// }, context)}

/* ---------------------------------  Form Submit  ---------------------------------- */
// {RenderLinkButton({
//   type: buttonTypes.submit,
//   validator: formValidator,
//   title: 'Submit',
//   customStyles: {
//   display: 'grid',
//   maxWidth: 220,
//   margin: "15px 10px",
//  }
// }, context)}

//buttons default styling
const useStyles = makeStyles((theme) => ({
  SubmitButton: {
    padding: theme.spacing(2),
    margin: "15px 0",
    minWidth: 220,
    color: colors.white,
    background: colors.successColor,
    "&:hover": {
      background: colors.successColorHover,
    },
  },
  FunctionButton: {
    padding: theme.spacing(2),
    margin: "15px 0",
    minWidth: 220,
  },
}));

//types of the buttons
export const buttonTypes = {
  chooseOneAndEdit: "chooseOneAndEdit",
  add: "add",
  delete: "delete",
  submit: "submit",
  function: "function",
  addBonusType: "addBonusType",
  createTicket: "createTicket",
};

//main function
export const RenderLinkButton = (props, context) => {
  const classes = useStyles();

  const {
    selectedPlayer,
    link,
    type,
    title,
    customStyles,
    gridApi,
    validator,
    handleClick,
  } = props;
  switch (type) {
    case "chooseOneAndEdit":
      return (
        <ChooseOneAndEdit
          selectedPlayer={selectedPlayer}
          title={title}
          link={link}
          customStyles={customStyles}
        />
      );
    case "add":
      return (
        <AddButton
          context={context}
          title={title}
          customStyles={customStyles}
        />
      );
    case "delete":
      return (
        <RemoveButton
          selectedPlayer={selectedPlayer}
          customStyles={customStyles}
          context={context}
          title={title}
          gridApi={gridApi}
        />
      );
    case "submit":
      return (
        <>
          <Button
            variant="contained"
            className={classes.SubmitButton}
            type="submit"
            style={customStyles}
            disabled={validator}
            onClick={handleClick}
          >
            {title}
          </Button>
        </>
      );
    case "function":
      return (
        <>
          <Button
            variant="contained"
            className={classes.FunctionButton}
            style={customStyles}
            disabled={validator}
            onClick={handleClick}
          >
            {title}
          </Button>
        </>
      );
    case "addBonusType":
      return (
        <AddBonusType
          customStyles={customStyles}
          title={title}
          context={context}
        />
      );
    case "createTicket":
      return (
        <CreateTicket
          customStyles={customStyles}
          title={title}
          context={context}
        />
      );
    default:
      return <>OOooopss, something is wrong</>;
  }
};

RenderLinkButton.contextTypes = {
  t: PropTypes.func,
};
