import * as constants from './createCampaignConstants';

const initialState = {
  activeStep: 0,
  completedSteps: {},
  stepOneData: {
    targetName: [],
    countries: [],
    name: '',
    description: '',
    startDate: new Date(),
    endDate: new Date()
  },
  stepTwoData: {
    open: false,
    bonus: {},
    chosenBonus: {}
  },
  stepThreeData: {
    chosenTemplate: {}
  }
};

export const changeCampaignData = (state = initialState, action = {}) => {
  switch(action.type) {
    case constants.SET_ACTIVE_STEP:
      return { ...state, activeStep: action.payload };
    case constants.SET_COMPLETED_STEP:
      return { ...state, completedSteps: action.payload };
    case constants.SET_STEP_ONE_DATA:
      return { ...state, stepOneData: {...state.stepOneData, [action.field]: action.payload}};
    case constants.SET_STEP_TWO_DATA:
      return { ...state, stepTwoData: {...state.stepTwoData, [action.field]: action.payload}};
    case constants.SET_STEP_THREE_DATA:
      return { ...state, stepThreeData: {...state.stepThreeData, [action.field]: action.payload}};
    case constants.RESET_CAMPAIGN:
      return { ...initialState, completedSteps: {}};
    default:
      return state;
  }
};

