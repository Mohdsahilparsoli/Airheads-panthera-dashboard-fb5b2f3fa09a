import React, { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
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
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import Slider from "@material-ui/core/Slider";
import { useDispatch } from "react-redux";
import {
  setShowNotificationMessage,
  setNotificationMessage,
} from "../../../store/notifications/notificationActions";

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
    maxWidth: 220,
    margin: "10px 10px",
  },
  bonusesDatesControl: {
    minWidth: 220,
    maxWidth: 220,
    margin: "10px 10px",
  },
  bonusDescription: {
    width: "460px",
    "padding-left": "15px",
  },
  subHeader: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  slider: {
    width: "400px",
    marginBottom: "30px",
    marginLeft: "60px",
  },
}));

const AddBonusType = ({ customStyles, title, context }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  const workflow = [
    "Should Be Finished Withdraw Condition First",
    "Do Not Allow Other Promotion",
    "Disable CashBack If Do Not Finish Withdraw Condition",
    "Always Join This Promotion Allow Multiple Request",
    "Dont Allow Request Promo From Same IPS",
  ];
  const depositProvidersList = ["EGT", "Playtech", "NetEnt"];

  const bonusPercentage = [
    {
      value: 50,
      label: "50%",
    },
    {
      value: 100,
      label: "100%",
    },
    {
      value: 150,
      label: "150%",
    },
    {
      value: 200,
      label: "200%",
    },
  ];
  const bonusAmount = [
    {
      value: 100,
      label: "100 EUR",
    },
    {
      value: 200,
      label: "200 EUR",
    },
    {
      value: 300,
      label: "300 EUR",
    },
    {
      value: 400,
      label: "400 EUR",
    },
  ];
  const wagger = [
    {
      value: 30,
      label: "x30",
    },
    {
      value: 35,
      label: "x35",
    },
    {
      value: 40,
      label: "x40",
    },
    {
      value: 45,
      label: "x45",
    },
  ];

  const handleSubmit = () => {
    dispatch(setShowNotificationMessage(true));
    dispatch(
      setNotificationMessage("This Feature is Not Avaliable in Demo Version")
    );
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [startDate, handleStartDateChange] = useState(new Date());
  const classes = useStyles();
  const [bonusCategory, setbonusCategory] = useState("Slot");
  const [gameFeatures, setGameFeatures] = useState([
    "Featured", "Promotions", "Latest releases", "Custom"
  ]);
  const [Release, setRelease] = useState("Automatic");
  const [personName, setPersonName] = React.useState([]);
  const [DepositPromo, setDepositPromo] = useState("DepositPromo");
  const [DepositCondition, setDepositCondition] = useState(
    "First Deposit Only"
  );
  const [DepositProvider, setDepositProvider] = useState([]);
  const changeDepositProvider = (event) => {
    setDepositProvider(event.target.value);
  };
  const changeDepositCondition = (event) => {
    setDepositCondition(event.target.value);
  };
  const changeDepositPromo = (event) => {
    setDepositPromo(event.target.value);
  };
  const changeRelease = (event) => {
    setRelease(event.target.value);
  };
  const changebonusCategory = (event) => {
    setbonusCategory(event.target.value);
  };
  const changeGameFeatures = (event) => {
    setGameFeatures(event.target.value);
  };
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
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
          {context.t("Add Bonus Type")}
        </DialogTitle>
        <DialogContent>
          <div style={{ width: "94%", margin: "auto" }}>
            <DialogContentText>* required fields</DialogContentText>
            <TextField
              id="name"
              label={context.t("Bonus Type Name")}
              type="text"
              required
              className={classes.formControl}
            />

            <FormControl className={classes.formControl}>
              <InputLabel>{context.t("Game Type")}</InputLabel>
              <Select
                value={bonusCategory}
                onChange={changebonusCategory}
                labelWidth={60}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Slots"}>Slots</MenuItem>
                <MenuItem value={"Table Games"}>Table Games</MenuItem>
                <MenuItem value={"Roulette only"}>Roulette only</MenuItem>
                <MenuItem value={"Blackjack only"}>Blackjack only</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">
            {context.t("Select Game Feature List")}
          </InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={gameFeatures}
            onChange={changeGameFeatures}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {gameFeatures.map((type) => (
              <MenuItem key={type} value={type}>
                <Checkbox checked={ gameFeatures.indexOf(type) > -1 }  
                />
                <ListItemText primary={type} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
            <KeyboardDatePicker
              className={classes.bonusesDatesControl}
              autoOk
              variant="inline"
              label={context.t("Bonus Start Date")}
              format="MM/dd/yyyy"
              value={startDate}
              //InputAdornmentProps={{ position: "start" }}
              onChange={(date) => handleStartDateChange(date)}
            />
            <KeyboardDatePicker
              className={classes.bonusesDatesControl}
              autoOk
              variant="inline"
              label={context.t("Bonus End Date")}
              format="MM/dd/yyyy"
              value={startDate}
              //InputAdornmentProps={{ position: "start" }}
              onChange={(date) => handleStartDateChange(date)}
            />
            <TextField
              id="dailyRequestLimit"
              label={context.t("Daily Request Limit")}
              type="number"
              required
              className={classes.formControl}
            />
            <TextField
              id="dailyApprovedLimit"
              label={context.t("Daily Approved Limit")}
              type="number"
              required
              className={classes.formControl}
            />
            <TextField
              margin="dense"
              id="deescription"
              label={context.t("Bonus Description")}
              multiline
              rows={4}
              className={classes.bonusDescription}
            />
            <Typography variant="h6" gutterBottom className={classes.subHeader}>
              Select Bonus Parameters:
            </Typography>

            <Typography id="discrete-slider-restrict" gutterBottom>
              Select Bonus Percentage
            </Typography>
            <Slider
              defaultValue={150}
              valueLabelFormat={bonusPercentage.value}
              aria-labelledby="discrete-slider-restrict"
              step={5}
              valueLabelDisplay="on"
              marks={bonusPercentage}
              max={200}
              min={50}
              className={classes.slider}
             
            />
            <Typography id="discrete-slider-restrict" gutterBottom>
              Select Bonus Amount
            </Typography>
            <Slider
              defaultValue={200}
              valueLabelFormat={bonusAmount.value}
              aria-labelledby="discrete-slider-restrict"
              step={5}
              valueLabelDisplay="on"
              marks={bonusAmount}
              max={400}
              min={100}
              className={classes.slider}

            />
            <Typography id="discrete-slider-restrict" gutterBottom>
              Select Wagger Requirment
            </Typography>
            <Slider
              defaultValue={35}
              valueLabelFormat={wagger.value}
              aria-labelledby="discrete-slider-restrict"
              step={1}
              valueLabelDisplay="on"
              marks={wagger}
              max={45}
              min={30}
              className={classes.slider}
            />

            <Typography variant="h6" gutterBottom className={classes.subHeader}>
              Workflow:
            </Typography>
            <FormControl className={classes.formControl} required>
              <InputLabel>{context.t("Release")}</InputLabel>
              <Select value={Release} onChange={changeRelease} labelWidth={60}>
                <MenuItem value={"Automatic"}>Automatic</MenuItem>
                <MenuItem value={"Manual"}>Manual</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-checkbox-label">
                {context.t("Conditions")}
              </InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<Input />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {workflow.map((workflowType) => (
                  <MenuItem key={workflowType} value={workflowType}>
                    <Checkbox checked={personName.indexOf(workflowType) > -1} />
                    <ListItemText primary={workflowType} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography variant="h6" gutterBottom className={classes.subHeader}>
              Deposit Settings:
            </Typography>

            <FormControl className={classes.formControl} required>
              <InputLabel>{context.t("Deposit Promo")}</InputLabel>
              <Select
                value={DepositPromo}
                onChange={changeDepositPromo}
                labelWidth={60}
              >
                <MenuItem value={"DepositPromo"}>Deposit Promo</MenuItem>
                <MenuItem value={"NonDepositPromo"}>Non-Deposit Promo</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel>{context.t("Deposit Condition")}</InputLabel>
              <Select
                value={DepositCondition}
                onChange={changeDepositCondition}
                labelWidth={60}
              >
                <MenuItem value={"First Deposit Only"}>
                  First Deposit Only
                </MenuItem>
                <MenuItem value={"Re-load Bonus"}>Re-load Bonus</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-checkbox-label">
                {context.t("Game Provider")}
              </InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={DepositProvider}
                onChange={changeDepositProvider}
                input={<Input />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {depositProvidersList.map((provider) => (
                  <MenuItem key={provider} value={provider}>
                    <Checkbox
                      checked={DepositProvider.indexOf(provider) > -1}
                    />
                    <ListItemText primary={provider} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {context.t("Cancel")}
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {context.t("Create Bonus Type")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddBonusType;
