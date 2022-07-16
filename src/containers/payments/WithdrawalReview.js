/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import GridConfig from "../../components/grid/GridConfig";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { inputFieldsValidators } from "../../validators/customInputValidators";
import { formErrorValidators } from "../../validators/formValidators";
import { withdrawalReviewDataMock } from "../../mockData/WithdrawalReviewDataMock";
import {
  RenderLinkButton,
  buttonTypes
} from "../../components/button/renderButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from "prop-types";
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
  buttons: {
    display: "block"
  }
}));

const WithdrawalReview = (props, context) => {
  const store = useSelector(state => ({
    id:   state.changeSelectedUser.withdrawalId
  }));
  const dispatch = useDispatch();
  const classes = useStyles();

  const [gridApi, setGridApi] = useState({});

  const [form, setValues] = useState({
    userid: null,
    name: "",
    email: "",
    cashBalance: "",
    promoBalance: "",
    KYC: "",
    kycAdd: "",
    kycPay: "",
    paymentType: "",
    amount: "",
  });
  const [formValidator, setFormValidator] = useState(false);
  const [error, setError] = useState({
    userid: false,
    name: false,
    email: false,
    cashBalance: false,
    promoBalance: false,
    kycId: false,
    kycAdd: false,
    kycPay: false,
    paymentType: false,
    amount: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    userid: null,
    name: "",
    email: "",
    cashBalance: "",
    promoBalance: "",
    kycId: "",
    kycAdd: "",
    kycPay: "",
    paymentType: "",
    amount: "",
  });
  const user = withdrawalReviewDataMock.filter(el => el.transactionId === store.id)[0]
  const title = `${user.name}  Withdrawal`
  useEffect(() => {
    document.title = title;

     setValues({
      userid: user.userid,
      name: user.name,
      email: user.email,
      cashBalance: user.cashBalance,
      promoBalance: user.promoBalance,
      kycId: user.kycId,
      kycAdd: user.kycAdd,
      kycPay: user.kycPay,
      paymentType: user.paymentType,
      amount: user.amount,
      activeBonus: user.activeBonus
  });
      

  }, []);

  // const [activeBonus, setActiveBonus] = useState(user.activeBonus);
  // const changeActiveBonus = (event) => {
  //   setActiveBonus(event.target.value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    // Redirect to /
    props.history.push("./withdrawalTransactions");
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
      <h3>{context.t("Review Withdrawal")}</h3>
      <hr />

      <div className="featureCointainer">
        <Feature value={368} text={context.t("Transactions in 1h")} icon="payment" subtext={context.t("200 deposits / 168 withdrawals")} />
        <Feature value={12565} text={context.t("Transactions in 24hrs")} icon="payment" subtext={context.t("8565 deposits / 4000 withdrawals")}/>
      </div>

      <div className="gridWrap">
        <div className="ag-theme-material">
          {/* ---------------------------------  Go Back  ----------------------------------- */}
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

        </div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          error={error.name}
          helperText={errorMessage.name}
          id="name"
          label={context.t("Name")}
          value={form.name}
          onChange={handleChange}
          variant="outlined"
          labelWidth={120}
          disabled
        />
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
          id="activeBonus"
          label={context.t("Active Bonus")}
          value={form.activeBonus}
          onChange={handleChange}
          variant="outlined"
          labelWidth={120}
          disabled
        />
        <TextField
          id="amount"
          label={context.t("Withdrawal Amount")}
          value={form.amount}
          onChange={handleChange}
          variant="outlined"
          labelWidth={120}
          disabled
        />
        <TextField
          id="paymentType"
          label={context.t("Payment Method Type")}
          value={form.paymentType}
          onChange={handleChange}
          variant="outlined"
          labelWidth={120}
          disabled
        />
        <TextField
          id="kycId"
          label={context.t("KYC ID")}
          value={form.kycId}
          onChange={handleChange}
          variant="outlined"
          labelWidth={120}
          disabled
        />
        <TextField
          id="kycAdd"
          label={context.t("KYC Add")}
          value={form.kycAdd}
          onChange={handleChange}
          variant="outlined"
          labelWidth={120}
          disabled
        />
        <TextField
          id="kycPay"
          label={context.t("KYC Pay")}
          value={form.kycPay}
          onChange={handleChange}
          variant="outlined"
          labelWidth={120}
          disabled
        />
        <div className={classes.buttons}>
          {RenderLinkButton({
            type: buttonTypes.submit,
            validator: formValidator,
            title: context.t("Approve"),
            customStyles: { margin: "25px 15px" }
          })}
          {RenderLinkButton({
            type: buttonTypes.function,
            validator: formValidator,
            title: context.t("Request More Info"),
            customStyles: { margin: "25px 20px" }
          })}
        </div>
        
      </form>
      </div>
    </div>
  );
}

WithdrawalReview.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default WithdrawalReview;
