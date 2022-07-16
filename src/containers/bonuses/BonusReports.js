/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
// import "../../styles/Bonuses.scss";
import { KeyboardDatePicker } from "@material-ui/pickers";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";
import BaseReports from "../../components/reports/BaseReports";
import { bonusesReportsChartsMock } from "../../mockData/bonusesReportsChartsMock";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { singleBonusReportsDataMock } from "../../mockData/singleBonusReportsDataMock";
import { inputFieldsValidators } from "../../validators/customInputValidators";
import { formErrorValidators } from "../../validators/formValidators";
import { useSelector, useDispatch } from "react-redux";
import GridConfig from "../../components/grid/GridConfig";
import {
  RenderLinkButton,
  buttonTypes,
} from "../../components/button/renderButton";

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

const BonusReports = (props, context) => {
  const store = useSelector((state) => ({
    id:   state.changeSelectedUser.bonusId
  }));
  const dispatch = useDispatch();
  const classes = useStyles();

  const [rowData, setRowData] = useState([]);

  const [form, setValues] = useState({
    id: "",
    name: "",
    status: "",
    ctr: "",
    bonusgiven: "",
    bonusspent: "",
    startdate: "",
    enddate: ""
  });
  const [formValidator, setFormValidator] = useState(false);
  const [error, setError] = useState({
    id: false,
    name: false,
    status: false,
    ctr: false,
    bonusgiven: false,
    bonusspent: false,
    startdate: false,
    enddate: false
  });
  const [errorMessage, setErrorMessage] = useState({
    id: "",
    name: "",
    status: "",
    ctr: "",
    bonusgiven: "",
    bonusspent: "",
    startdate: "",
    enddate: ""
  });
  const bonus = singleBonusReportsDataMock.filter((el) =>el.id === store.id)[0];
  const title = `${bonus.name}`;
  useEffect(() => {
    document.title = title;
    setValues({
      id: bonus.id,
      name: bonus.name,
      status: bonus.status,
      ctr: bonus.ctr,
      bonusgiven: bonus.bonusgiven,
      bonusspent: bonus.bonusspent,
      startdate: bonus.startdate,
      enddate: bonus.enddate
      });

      setRowData(singleBonusReportsDataMock);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to /
    props.history.push("./bonusesReports");

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

  const renderBarChart = () => {
    return (
      <div>
        <BaseReports type="bar" data={bonusesReportsChartsMock.newreg.bar} />
      </div>
    );
  };
  const renderPieChart = () => {
    return (
      <div>
        <BaseReports type="pie" data={bonusesReportsChartsMock.popularGames.pie} />
      </div>
    );
  };
  const renderNgrLineChart = () => {
    return (
      <div>
        <BaseReports type="line" data={bonusesReportsChartsMock.bonusNGR.line} />
      </div>
    );
  };
  
  const renderLineChart = () => {
    return (
      <div>
        <BaseReports type="line" data={bonusesReportsChartsMock.bonusSpent.line} />
      </div>
    );
  };

  const [gridApi, setGridApi] = useState({});

  const onGridReady = (params) => {
    setGridApi(params.api)
  };

  return (
    <div className="main">
      <div style={{ display: "flex" }}>
        <ArrowBackIcon
          style={{ padding: "0 10px", cursor: "pointer" }}
          onClick={() => props.history.goBack()}
        />
        <h3>{context.t("Bonus Reports")}</h3>
      </div>
      <hr />
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
            error={error.id}
            helperText={errorMessage.id}
            id="id"
            label={context.t("Bonus ID")}
            value={form.id}
            onChange={handleChange}
            variant="outlined"
            labelWidth={120}
            disabled
          />
          <TextField
            error={error.name}
            helperText={errorMessage.name}
            id="name"
            label={context.t("Bonus Name")}
            value={form.name}
            onChange={handleChange}
            variant="outlined"
            labelWidth={120}
            disabled
          />
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label={context.t("Bonus Start")}
            format="MM/dd/yyyy"
            value={form.startdate}
            InputAdornmentProps={{ position: "start" }}
            disabled
          />
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label={context.t("Bonus End")}
            format="MM/dd/yyyy"
            value={form.enddate}
            InputAdornmentProps={{ position: "start" }}
            disabled
          />
          <TextField
            id="status"
            label={context.t("Status")}
            value={form.status}
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
         
        </form>
      </div>


      <div className="gridWrap">
          <div className="ag-theme-material">
                  {/* ----------------------------------  Bonus Details  ------------------------------------ */}
  

            <div style={{ height: "310px" }}>
              <GridConfig
                props={{
                  gridType: "BonusReports",
                  onGridReady,
                  // onRowSelected: onProviderSelected,
                  rowData,
                }}
              />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", padding: "20px 0px 50px 0px" }}>
        <div style={{ width: "40%", paddingRight: "12%" }}>
          {renderBarChart()}
        </div>
        <div style={{ width: "40%" }}>
          {renderLineChart()}
        </div>
        </div>
        <div style={{ display: "flex", padding: "20px 0px 50px 0px" }}>
          <div style={{ width: "40%", paddingRight: "12%" }}>
            {renderPieChart()}
          </div>
          
          <div style={{ width: "40%" }}>
            {renderNgrLineChart()}
          </div>
        </div>
      </div>
  )
};

BonusReports.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default BonusReports;
