import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StepOne from '../../components/CRM/createCampaignStepOne'
import StepTwo from '../../components/CRM/createCampaignStepTwo'
import StepThree from '../../components/CRM/createCampaignStepThree'
import StepFour from '../../components/CRM/createCampaignStepFour'
import successImage from '../../assets/success.png'
import PropTypes from "prop-types";
import { setActiveStep, setCompletedSteps, resetCampaign
}  
from "../../store/createCampaign/createCampaignActions";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentMenuTab } from "../../store/menuHighlight/menuActions";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
  },
  button: {
    padding: theme.spacing(1.5),
    minWidth: 100,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(6),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  publish: {
    margin: "0 34%"
  }
}));

function getSteps(context) {
  return [
    context.t("Select campaign settings"), 
    context.t("Select Bonus Type"), 
    context.t("Create an ad"), 
    context.t("Preview")
  ];
}

export default function HorizontalLinearStepper(props, context) {
  
  const store = useSelector((state) => ({
    activeStep:     state.changeCampaignData.activeStep,
    completedSteps: state.changeCampaignData.completedSteps,
    stepOneData:    state.changeCampaignData.stepOneData,
    stepTwoData:    state.changeCampaignData.stepTwoData,
    stepThreeData:  state.changeCampaignData.stepThreeData,
  }));

  const classes = useStyles();
  const dispatch = useDispatch();
  const steps = getSteps(context);

  useEffect(() => {
    dispatch(setCurrentMenuTab('Create Promo'));
  }, []);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      case 3:
        return <StepFour />;
      default:
        return "Unknown step";
    }
  }

  const handleNext = () => {
    let newCompleted = store.completedSteps

    newCompleted[store.activeStep] = true;
    
    dispatch(setActiveStep(store.activeStep + 1));
    dispatch(setCompletedSteps(newCompleted))

    if (store.activeStep === steps.length - 1) {
      let timer = setTimeout(() => { 
        clearTimeout(timer);
        dispatch(resetCampaign());
      }, 3000);
    }
  };

  const handleBack = () => {
    dispatch(setActiveStep(store.activeStep - 1));
  };

  const handleStep = (step) => () => {
    if (store.activeStep === steps.length) return 
    dispatch(setActiveStep(step));
  };

  return (
    <div className="main">
      <h3>{context.t("Create Campaign")}</h3> <hr />
      <div className={classes.root}>
        <Stepper nonLinear activeStep={store.activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepButton onClick={handleStep(index)} completed={store.completedSteps[index]}>
                  {label}
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {store.activeStep === steps.length ? (
            <div className={classes.publish}>
              <img src={successImage}  alt='successImage'/>
              {/* {resetCampaign()} */}
              <Typography variant="h6">
                Congratulations! You successfully published the campaign! Campaign ID: 2831
              </Typography>
            </div>
          ) : (
            <div>
              <Typography component={'div'} className={classes.instructions}>
                {getStepContent(store.activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={store.activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  {context.t("Back")}
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                  disabled={
                    store.activeStep === 0 
                      ? store.stepOneData.startDate === store.stepOneData.endDate || store.stepOneData.name === '' || store.stepOneData.targetName.length === 0
                      : store.activeStep === 1 
                          ? Object.keys(store.stepTwoData.chosenBonus).length === 0
                          : store.activeStep === 2 
                              ? Object.keys(store.stepThreeData.chosenTemplate).length === 0
                              : false
                  }
                >
                  {store.activeStep === steps.length - 1 ? context.t("Publish") : context.t("Next")}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

HorizontalLinearStepper.contextTypes = {
  t: PropTypes.func.isRequired,
};
