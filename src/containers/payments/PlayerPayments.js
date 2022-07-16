/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// import './styles/PlayerPayments.scss'
import GridConfig from "../../components/grid/GridConfig";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { inputFieldsValidators } from "../../validators/customInputValidators";
import { formErrorValidators } from "../../validators/formValidators";
import { playerMock } from '../../mockData/playersMock';
import { gameTransactions } from '../../mockData/gameTransactionsMock'
import {
  RenderLinkButton,
  buttonTypes
} from "../../components/button/renderButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProfileItems from "../profile/ProfileItems";
import PersonIcon from "@material-ui/icons/Person";
import PaymentIcon from "@material-ui/icons/Payment";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import BlockIcon from "@material-ui/icons/Block";
import Feature from "../../components/Feature";
import colors from "../../styles/Colors.scss";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '96%',
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      minWidth: "40%"
    }
  },
}));

const PlayerPayments = (props, context) => {
  const store = useSelector(state => ({
    id:   state.changeSelectedUser.id
  }));
  const dispatch = useDispatch();
  const classes = useStyles();

  const [gridApi, setGridApi] = useState({});

  const [form, setValues] = useState({
    userid: null,
    email: "",
    cashBalance: "",
    promoBalance: "",
    KYC: "",
    paymentMethodType: "",
    paymentMethod: "",
  });
  const [formValidator, setFormValidator] = useState(false);
  const [error, setError] = useState({
    userid: false,
    email: false,
    cashBalance: false,
    promoBalance: false,
    KYC: false,
    paymentMethodType: false,
    paymentMethod: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    userid: null,
    email: "",
    cashBalance: "",
    promoBalance: "",
    KYC: "",
    paymentMethodType: "",
    paymentMethod: "",
  });
  const user = playerMock.filter(el => el.userid === store.id)[0]
  const title = `${user.firstName} ${user.lastName}  Payments Details`
  useEffect(() => {
    document.title = title;

     setValues({
      userid: user.userid,
      email: user.email,
      cashBalance: user.cashBalance,
      promoBalance: user.promoBalance,
      KYC: user.KYC,
      paymentMethodType: user.paymentMethodType,
      paymentMethod: user.paymentMethod,
        });
      

  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    // Redirect to /
    props.history.push("./payments");
  };

  const handleGoBack = (e) => {
    e.preventDefault();

    props.history.goBack();
  };

  const handleChange = event => {
    const field = event.target.id;
    const validators = inputFieldsValidators(field, event.target.value);
    const { errorCode, errorText } = validators;
    setFormValidator(formErrorValidators({ ...error, [field]: errorCode }));
    setError({ ...error, [field]: errorCode });
    setErrorMessage({ ...errorMessage, [field]: errorText });
    setValues({ ...form, [field]: event.target.value });
  };
  const onGridReady = params => {
    setGridApi(params.api);
  };

  return (
    <div className="main">
      <h3>{context.t("Player Payment Details")}</h3>
      <hr />
      <div className="featureCointainer">
        <Feature value={39504} text={context.t("24hr Money Won")} subtext={context.t("Average winner won") + ": 38.4"} />
        <Feature value={41504} text={context.t("24hr Money Lost")} subtext={context.t("Average loser lost") + ": 86.4"}/>
        <Feature value={2000} text={context.t("24hr Net Profit")} subtext={context.t("NGR per player") + ": 48"} />
        <Feature value={325} text={context.t("Players over 24hr")} icon="user" subtext={context.t("Total players who won or lost money")}/>
      </div>
      <div className="gridWrap">
        <div className="ag-theme-material">
          {/* ----------------------------------  Go Back  ------------------------------------ */}
          {RenderLinkButton({
            type: buttonTypes.function,
            title: context.t("Go Back"),
            handleClick: handleGoBack,
            customStyles: { 
              margin: "25px 20px",
              color: colors.white,
              background: "#3f51b5",
            }
          }, context)}
        </div>
      </div>

      <br />

      <div className="container-box">
        <div className="editMenuProfile">
          <div className="menuIcon">
          <Link
              to={{
                pathname: "./playerProfile",
              }}
            >
            <ProfileItems name={context.t("Profile")} Icon={PersonIcon} />
            </Link>
          </div>
          <div className="choosenImage">
              <ProfileItems name={context.t("Payments")} Icon={PaymentIcon} />
          </div>
          <div className="menuIcon">
            <Link
              to={{
                pathname: "./playerBonuses",
              }}
            >
              <ProfileItems
                name={context.t("Bonuses")}
                Icon={MonetizationOnIcon}
              />
            </Link>
          </div>
          <div className="menuIcon">
          <Link
              to={{
                pathname: "./playerResponsibleGaming",
              }}
            >
              <ProfileItems name={context.t("Restrictions")} Icon={BlockIcon} />
              </Link>

          </div>
        </div>
        
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          error={error.email}
          helperText={errorMessage.email}
          id="email"
          label={context.t("Email")}
          value={form.email}
          onChange={handleChange}
          variant="outlined"
          labelWidth={120}
          disabled
        />
        <TextField
          id="cashBalance"
          label={context.t("Cash Balance")}
          value={form.cashBalance}
          onChange={handleChange}
          variant="outlined"
          labelWidth={120}
          disabled
        />
        <TextField
          id="promoBalance"
          label={context.t("Promo Balance")}
          value={form.promoBalance}
          onChange={handleChange}
          variant="outlined"
          labelWidth={120}
          disabled
        />
        <TextField
          id="KYC"
          label={context.t("KYC")}
          value={form.KYC}
          onChange={handleChange}
          variant="outlined"
          labelWidth={120}
          disabled
        />
        <TextField
          id="paymentMethodType"
          label={context.t("Payment Method Type")}
          value={form.paymentMethodType}
          onChange={handleChange}
          variant="outlined"
          labelWidth={120}
          disabled
        />
        <TextField
          id="paymentMethod"
          label={context.t("Payment Method")}
          value={form.paymentMethod}
          onChange={handleChange}
          variant="outlined"
          labelWidth={120}
          disabled
        />
        {RenderLinkButton({
          type: buttonTypes.submit,
          validator: formValidator,
          title: context.t("Submit"),
          customStyles: {
          display: 'grid',
          maxWidth: 220,
          margin: "15px 10px",
          }
        })}
      </form>
      </div>

      <br />
      
      <div className="gridWrap">
        <div className="ag-theme-material">
          <div style={{ height: "40vh" }}>
            <GridConfig
              props={{ gridType: "PlayerPayments", onGridReady, rowData: gameTransactions }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

PlayerPayments.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default PlayerPayments;
