import React from "react";
import "../styles/Feature.scss";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ReportIcon from '@material-ui/icons/Report';
import PaymentIcon from '@material-ui/icons/Payment';
const Feature = (props) => {
  const { value, text, subtext, icon } = props;
  let iconType = <AccountBalanceIcon />;
  switch (icon) {
    case "bank":
      iconType = <AccountBalanceIcon />;
      break;
    case "user":
      iconType = <PeopleAltIcon />;
      break;
    case "report":
      iconType = <AssessmentIcon />;
      break;
      case "warning":
          iconType = <ReportIcon />;
          break;
          case "payment":
            iconType = <PaymentIcon />;
            break;
    default:
      iconType = <AccountBalanceIcon />;
  }
  return (
    <div className="feature">
      <div className="feature-main">
        <div className="icon">{iconType} </div>
        <div className="parameters">
          <span className="feature-value">{value}</span>
          <span className="feature-text">{text}</span>
        </div>
      </div>
      <div className="subtext">{subtext}</div>
    </div>
  );
};

export default Feature;
