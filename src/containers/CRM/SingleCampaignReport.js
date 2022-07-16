import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { campaignReportsMock } from "../../mockData/campaignReportsMock";
import { CampaignReportsDataMock } from "../../mockData/CampaignReportsDataMock";
import "../../styles/PlayerProfile.scss";
import Feature from "../../components/Feature";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import BaseReports from "../../components/reports/BaseReports";
import {
  RenderLinkButton,
  buttonTypes,
} from "../../components/button/renderButton";
import { inputFieldsValidators } from "../../validators/customInputValidators";
import { formErrorValidators } from "../../validators/formValidators";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { KeyboardDatePicker } from "@material-ui/pickers";

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
}));

function SingleCampaignReport(props, context) {
  const store = useSelector((state) => ({
    id: state.changeSelectedUser.id,
  }));

  const classes = useStyles();

  const [form, setValues] = useState({
    id: null,
    bonusgiven: "",
    bonusspent: "",
    ctr: "",
    campaignName: "",
    status: "",
    startdate: "",
    enddate: ""
  });
  const [formValidator, setFormValidator] = useState(false);
  const [error, setError] = useState({
    id: false,
    bonusgiven: false,
    bonusspent: false,
    ctr: false,
    campaignName: false,
    status: false,
    startdate: false,
    enddate: false
  });
  const [errorMessage, setErrorMessage] = useState({
    id: null,
    bonusgiven: "",
    bonusspent: "",
    ctr: "",
    campaignName: "",
    status: "",
    startdate: "",
    enddate: ""
  });
  const title = `${form.campaignName}`;
  const user = campaignReportsMock.filter((el) => el.id === store.id)[0];
  useEffect(() => {
    document.title = title;
    setValues({
      id: user.id,
      bonusgiven: user.bonusgiven,
      bonusspent: user.bonusspent,
      ctr: user.ctr,
      campaignName: user.name,
      startdate: user.startdate,
      enddate: user.enddate,
      status: user.status
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to /
    props.history.push("./campaign-reports");

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
  const [statusType, setstatusType] = useState(user.status);
  const changestatusType = (event) => {
    setstatusType(event.target.value);
  };
  const [startDate, handleStartDateChange] = useState(
    new Date(user.startdate)
  );
  const [endDate, handleEndDate] = useState(
    new Date(user.enddate)
  );
  const renderBarChart = () => {
    return (
      <div>
        <BaseReports type="bar" data={CampaignReportsDataMock.newreg.bar} />
      </div>
    );
  };
  const renderLineChart = () => {
    return (
      <div>
        <BaseReports type="line" data={CampaignReportsDataMock.bonusSpent.line} />
      </div>
    );
  };

  const renderPieChart = () => {
    return (
      <div>
        <BaseReports type="pie" data={CampaignReportsDataMock.popularGames.pie} />
      </div>
    );
  };
  const renderNgrLineChart = () => {
    return (
      <div>
        <BaseReports type="line" data={CampaignReportsDataMock.campaignNGR.line} />
      </div>
    );
  };
  return (
    <div className="main">
      <div style={{ display: "flex" }}>
        <ArrowBackIcon
          style={{ padding: "0 10px", cursor: "pointer" }}
          onClick={() => props.history.goBack()}
        />
        <h3>{context.t("Campaign Report ")}</h3>
      </div>
      <hr />
      <div className="featureCointainer">
        <Feature value={3821} text={context.t("Total Bonuses Given")} icon="user" subtext="Total Campaign CTR: 1.9%" />
        <Feature value={12565} text={context.t("Bonus given in 24h")} icon="user" subtext="Amount given to 382 players" />
        <Feature value={3159} text={context.t("Bonus spent in 24h")} icon="user" subtext="Players who met wagger req: 42" />
        <Feature value={482} text={context.t("Bonuses claimed  in 24h")} icon="user" subtext="Bonuses claimed this week: 4892" />
      </div>
      <div className="container-box">
        <div className="editMenuProfile">
          
        </div>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            error={error.campaignName}
            helperText={errorMessage.campaignName}
            id="campaignName"
            label={context.t("Campaign Name")}
            value={form.campaignName}
            onChange={handleChange}
            variant="outlined"
            labelWidth={120}
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>{context.t("Status")}</InputLabel>
            <Select
              value={statusType}
              onChange={changestatusType}
              labelWidth={60}
            >
              <MenuItem value={"Active"}>Active</MenuItem>
              <MenuItem value={"Expired"}>Expired</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="ctr"
            label={context.t("CTR %")}
            value={form.ctr}
            onChange={handleChange}
            variant="outlined"
            labelWidth={120}
            disabled
          />
          <TextField
            id="bonusgiven"
            label={context.t("Bonus Given")}
            value={form.bonusgiven}
            onChange={handleChange}
            variant="outlined"
            labelWidth={120}
            disabled
          />
          <TextField
            id="bonusspent"
            label={context.t("Bonus Spent")}
            value={form.bonusspent}
            onChange={handleChange}
            variant="outlined"
            labelWidth={120}
            disabled
          />
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label={context.t("Start Time")}
            format="MM/dd/yyyy"
            value={startDate}
            InputAdornmentProps={{ position: "start" }}
            onChange={(date) => handleStartDateChange(date)}
            disabled
          />
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label={context.t("End Date")}
            format="MM/dd/yyyy"
            value={endDate}
            InputAdornmentProps={{ position: "start" }}
            onChange={(date) => handleEndDate(date)}
            disabled
          />
          
          {RenderLinkButton({
            type: buttonTypes.submit,
            validator: formValidator,
            title: context.t("Submit"),
            customStyles: {
              display: "grid",
              maxWidth: 220,
              margin: "15px 10px",
            },
          })}
        </form>
        
      </div>
      <div style={{ display: "flex", padding: "20px 0px 50px 0px" }}>
          <div style={{ width: "40%", paddingRight: "12%" }}>
            {renderBarChart()}
          </div>
          <div style={{ width: "40%" }}>{renderLineChart()}</div>
        </div>
        <div style={{ display: "flex", padding: "20px 0px 50px 0px" }}>
        <div style={{ width: "40%", paddingRight: "12%" }}>
            {renderPieChart()}
          </div>
        
          <div style={{ width: "40%" }}>{renderNgrLineChart()}</div>
          </div>
    </div>
  );
}

SingleCampaignReport.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default SingleCampaignReport;
