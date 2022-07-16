import * as constants from './createCampaignConstants';

export const setActiveStep = (activeStep) => ({
  type: constants.SET_ACTIVE_STEP,
  payload: activeStep
});

export const setCompletedSteps = (completedStep) => ({
  type: constants.SET_COMPLETED_STEP,
  payload: completedStep
});

export const setStepOneData = (field, data) => ({
  type: constants.SET_STEP_ONE_DATA,
  field,
  payload: data
});

export const setStepTwoData = (field, data) => ({
  type: constants.SET_STEP_TWO_DATA,
  field,
  payload: data
});

export const setStepThreeData = (field, data) => ({
  type: constants.SET_STEP_THREE_DATA,
  field,
  payload: data
});

export const resetCampaign = () => ({
  type: constants.RESET_CAMPAIGN
});