import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import Input from "@material-ui/core/Input";
import PropTypes from "prop-types";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useSelector, useDispatch } from 'react-redux'
import { setStepOneData } from '../../store/createCampaign/createCampaignActions'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "75%",
    "& .MuiTextField-root": {
      minWidth: "40%",
    },
    "& .MuiOutlinedInput-input": {
      border: "none",
    },
    "& .MuiInputLabel-formControl": {
      left:"10px"
    }
  },
  formControl: {
    width: "90%",
    padding: "0 11px",
    margin: "8px 0 10px",
    "& .MuiInputLabel-shrink": {
      transform: "translate(20px, -6px) scale(0.75)",

    }
  },
  datePicker: {
    width: "45%",
    padding: "0 9px",
    margin: "15px 0",
    "& .MuiInputLabel-shrink": {
      transform: "translate(25px, -6px) scale(0.75)",
    },
    "& .MuiInputLabel-formControl": {
      left:"0px"
    }
  },

}));

const StepOne = (props, context) => {
  const title = `Select Campaign Settings - Panthera Platform`;
  const store = useSelector((state) => ({
    startDate: state.changeCampaignData.stepOneData.startDate,
    endDate: state.changeCampaignData.stepOneData.endDate,
    campaignName: state.changeCampaignData.stepOneData.name,
    targetName: state.changeCampaignData.stepOneData.targetName,
    countries: state.changeCampaignData.stepOneData.countries,
    description: state.changeCampaignData.stepOneData.description,
  }));
  const dispatch = useDispatch();
  const [targetGroup, setTargetGroup] = useState([])
  const [countries, setCountries] = useState([
    "Italy",
    "Sweden",
    "Germany",
    "France"
  ])
  

  useEffect(() => {
    document.title = title;
    
    setTargetGroup([
      "Players who registered in the last week",
      "Players who registered in the last month",
      "Not active for > 1 month",
      "GGR > 1k",
      "More than 5 deposits in last month"
    ])

    setCountries([
      "Italy",
      "Sweden",
      "Germany",
      "France"
    ])

  }, []);

  const classes = useStyles();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      },
    },
  };

  return (
    <>
      <div className={classes.root}>
        <KeyboardDatePicker
          autoOk
          required
          className={classes.datePicker}
          variant="inline"
          inputVariant="outlined"
          label={context.t("Campaign Start")}
          format="MM/dd/yyyy"
          value={store.startDate}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date) =>  dispatch(setStepOneData('startDate', date))}
        />
        <KeyboardDatePicker
          autoOk
          required
          className={classes.datePicker}
          variant="inline"
          inputVariant="outlined"
          label={context.t("Campaign End")}
          format="MM/dd/yyyy"
          value={store.endDate}
          minDate={store.startDate}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date) =>  dispatch(setStepOneData('endDate', date))}
        />
        <TextField
          id="name"
          label={context.t("Campaign Name")}
          type="text"
          required
          value={store.campaignName}
          onChange={(event) => dispatch(setStepOneData('name', event.target.value))}
          className={classes.formControl}
        />
      
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">
            {context.t("Countries Included in Promo")}
          </InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={store.countries.length === 0 ? countries : store.countries}
            onChange={(event) => dispatch(setStepOneData('countries', event.target.value))}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                <Checkbox checked={store.countries.length === 0 
                  ? countries.indexOf(country) > -1 
                  : store.countries.indexOf(country) > -1}  
                />
                <ListItemText primary={country} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel required id="demo-mutiple-checkbox-label">
            {context.t("Target Group")}
          </InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={store.targetName}
            onChange={(event) => dispatch(setStepOneData('targetName', event.target.value))}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >  
            {targetGroup.map((target) => (
              <MenuItem key={target} value={target}>
                <Checkbox checked={store.targetName.indexOf(target) > -1}/>
                <ListItemText primary={target} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="description"
          multiline
          label={context.t("Campaign Description")}
          type="text"
          rows={6}
          rowsMax={6}
          value={store.description}
          onChange={(event) => dispatch(setStepOneData('description', event.target.value))}
          className={classes.formControl}
        />
      </div>
    </>
  );
};
StepOne.contextTypes = {
  t: PropTypes.func.isRequired,
};
export default StepOne;
