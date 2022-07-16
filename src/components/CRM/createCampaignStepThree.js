import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BonusTypeCard from "./createCampaignTemplatesCard";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const bonusTemplates = [
  {
    id: 1,
    image:
      "https://www.getvero.com/wp-content/uploads/2019/03/promotional-email-example-unbounce@2x.jpg",
  },
  {
    id: 2,
    image:
      "https://www.getvero.com/wp-content/uploads/2019/03/promotional-email-example-unbounce@2x.jpg",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "45% 5% 45%",
    justifyItems: "center",
  },
  middleCol: {
    display: "flex",
    flexDirection: "column",
  },
  line: {
    borderLeft: "1px solid black",
    minHeight: "20vh",
    margin: "0 0 0 5px",
  },
  firsCol: {
    maxHeight: "80vh",
  },
  createButtons:{
      margin: "40% 0"
  },
  singleButton: {
      margin: '0 10px'
  }
}));
const StepThree = (props, context) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.firsCol}>
          <h3>Select Template</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "100%",
            }}
          >
            <BonusTypeCard bonusType={bonusTemplates} />
          </div>
        </div>
        <div className={classes.middleCol}>
          <div className={classes.line}></div>
          <h5>Or</h5>
          <div className={classes.line}></div>
        </div>
        <div className={classes.someClass}>
          <h3>Create Template</h3>
          <div className={classes.createButtons}>
            <Button variant="contained" color="primary" className={classes.singleButton}>
              Create Template
            </Button>
            <Button variant="contained" color="primary" className={classes.singleButton}>
              Upload Template
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

StepThree.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default StepThree;
