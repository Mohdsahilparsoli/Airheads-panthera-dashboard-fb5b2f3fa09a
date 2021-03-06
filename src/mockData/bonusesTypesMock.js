export const bonusesTypes = [
  {
    id: 1,
    title: "Signup - Slot 100%",
    status: "Active",
    startDate: "2020-3-11",
    endDate: "2025-3-11",
    category: "Slots",
    dailyRequestLimit: 1000,
    dailyApprovedLimit: 1000,
    description: `A stantard sign-up bonus which is offered to all new players and has a wagering requirment of 35x`,
    workflow: {
      release: "Automatic",
      shouoldBeFinishedWithdrawConditionFirst: false,
      doNotAllowOtherPromotion: true,
      disableCashBackIfDoNotFinishWithdrawCondition: false,
      alwaysJoinThisPromotioppnAllowMultipleRequest: false,
      dontAllowRequestPromoFromSameIPS: false,
    },
    depositBonus: false,
    depositCondition: "First Deposit Only",
    provider: "Playtech",
  },
  {
    id: 2,
    title: "EGT only - Table Games",
    status: "Active",
    startDate: "2020-4-11",
    endDate: "2021-4-11",
    category: "Table Games",
    dailyRequestLimit: 100,
    dailyApprovedLimit: 10,
    description: ` In dignissim
        mauris elit, ac facilisis diam ornare sit amet. Mauris tempor
        vestibulum bibendum.`,
    workflow: {
      release: "Automatic",
      shouoldBeFinishedWithdrawConditionFirst: false,
      doNotAllowOtherPromotion: true,
      disableCashBackIfDoNotFinishWithdrawCondition: false,
      alwaysJoinThisPromotioppnAllowMultipleRequest: false,
      dontAllowRequestPromoFromSameIPS: false,
    },
    depositBonus: false,
    depositCondition: "Re-load Bonus",
    provider: "EGT",
  },
  {
    id: 3,
    title: "High GGR - Roulette only",
    status: "Active",
    startDate: "2020-05-09",
    endDate: "2022-06-07",
    category: "Roulette only",
    dailyRequestLimit: 100,
    dailyApprovedLimit: 10,
    description: `Vivamus ut
        congue lacus. In quis dui orci. Etiam malesuada erat at porttitor
        blandit.`,
    workflow: {
      release: "Automatic",
      shouoldBeFinishedWithdrawConditionFirst: false,
      doNotAllowOtherPromotion: true,
      disableCashBackIfDoNotFinishWithdrawCondition: false,
      alwaysJoinThisPromotioppnAllowMultipleRequest: false,
      dontAllowRequestPromoFromSameIPS: false,
    },
    depositBonus: false,
    depositCondition: "Re-load Bonus",
    provider: "NetEnt",
  },
  {
    id: 4,
    title: "Reload - Slot 50%",
    status: "Active",
    startDate: "2020-3-11",
    endDate: "2025-3-11",
    category: "Slots",
    dailyRequestLimit: 1000,
    dailyApprovedLimit: 1000,
    description: `In dignissim
    mauris elit, ac facilisis diam ornare sit amet. Mauris tempor
    vestibulum bibendum.`,
    workflow: {
      release: "Automatic",
      shouoldBeFinishedWithdrawConditionFirst: false,
      doNotAllowOtherPromotion: true,
      disableCashBackIfDoNotFinishWithdrawCondition: false,
      alwaysJoinThisPromotioppnAllowMultipleRequest: false,
      dontAllowRequestPromoFromSameIPS: false,
    },
    depositBonus: false,
    depositCondition: "First Deposit Only",
    provider: "Playtech",
  },
  {
    id: 5,
    title: "Demo Bonus - Table Games",
    status: "Active",
    startDate: "2020-4-11",
    endDate: "2021-4-11",
    category: "Table Games",
    dailyRequestLimit: 100,
    dailyApprovedLimit: 10,
    description: ` In dignissim
        mauris elit, ac facilisis diam ornare sit amet. Mauris tempor
        vestibulum bibendum.`,
    workflow: {
      release: "Automatic",
      shouoldBeFinishedWithdrawConditionFirst: false,
      doNotAllowOtherPromotion: true,
      disableCashBackIfDoNotFinishWithdrawCondition: false,
      alwaysJoinThisPromotioppnAllowMultipleRequest: false,
      dontAllowRequestPromoFromSameIPS: false,
    },
    depositBonus: false,
    depositCondition: "Re-load Bonus",
    provider: "EGT",
  },
  {
    id: 6,
    title: "Demo Bonus - Roulette only",
    status: "Active",
    startDate: "2020-05-09",
    endDate: "2022-06-07",
    category: "Roulette only",
    dailyRequestLimit: 100,
    dailyApprovedLimit: 10,
    description: `Vivamus ut
        congue lacus. In quis dui orci. Etiam malesuada erat at porttitor
        blandit.`,
    workflow: {
      release: "Automatic",
      shouoldBeFinishedWithdrawConditionFirst: false,
      doNotAllowOtherPromotion: true,
      disableCashBackIfDoNotFinishWithdrawCondition: false,
      alwaysJoinThisPromotioppnAllowMultipleRequest: false,
      dontAllowRequestPromoFromSameIPS: false,
    },
    depositBonus: false,
    depositCondition: "Re-load Bonus",
    provider: "NetEnt",
  },
  {
    id: 7,
    title: "Demo Bonus - Blackjack only",
    status: "Inactive",
    startDate: "2020-05-09",
    endDate: "2022-06-07",
    category: "Blackjack only",
    dailyRequestLimit: 100,
    dailyApprovedLimit: 10,
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    workflow: {
      release: "Automatic",
      shouoldBeFinishedWithdrawConditionFirst: false,
      doNotAllowOtherPromotion: true,
      disableCashBackIfDoNotFinishWithdrawCondition: false,
      alwaysJoinThisPromotioppnAllowMultipleRequest: false,
      dontAllowRequestPromoFromSameIPS: false,
    },
    depositBonus: false,
    depositCondition: "Re-load Bonus",
    provider: "All",
  },
  {
    id: 8,
    title: "High GGR Slot bonus - Pragmatic",
    status: "Inactive",
    startDate: "2020-05-09",
    endDate: "2022-06-07",
    category: "All",
    dailyRequestLimit: 100,
    dailyApprovedLimit: 10,
    description: `Fusce dapibus malesuada nisi et vehicula. Vestibulum eget
        massa et dolor laoreet iaculis nec sit amet libero.`,
    workflow: {
      release: "Automatic",
      shouoldBeFinishedWithdrawConditionFirst: false,
      doNotAllowOtherPromotion: true,
      disableCashBackIfDoNotFinishWithdrawCondition: false,
      alwaysJoinThisPromotioppnAllowMultipleRequest: false,
      dontAllowRequestPromoFromSameIPS: false,
    },
    depositBonus: false,
    depositCondition: "Re-load Bonus",
    provider: "Pragmatic",
  },
  {
    id: 9,
    title: "Demo Bonus - Blackjack only",
    status: "Inactive",
    startDate: "2020-05-09",
    endDate: "2022-06-07",
    category: "Blackjack only",
    dailyRequestLimit: 100,
    dailyApprovedLimit: 10,
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    workflow: {
      release: "Automatic",
      shouoldBeFinishedWithdrawConditionFirst: false,
      doNotAllowOtherPromotion: true,
      disableCashBackIfDoNotFinishWithdrawCondition: false,
      alwaysJoinThisPromotioppnAllowMultipleRequest: false,
      dontAllowRequestPromoFromSameIPS: false,
    },
    depositBonus: false,
    depositCondition: "Re-load Bonus",
    provider: "All",
  },
  {
    id: 10,
    title: "Demo Bonus - All",
    status: "Inactive",
    startDate: "2020-05-09",
    endDate: "2022-06-07",
    category: "All",
    dailyRequestLimit: 100,
    dailyApprovedLimit: 10,
    description: `Fusce dapibus malesuada nisi et vehicula. Vestibulum eget
        massa et dolor laoreet iaculis nec sit amet libero.`,
    workflow: {
      release: "Automatic",
      shouoldBeFinishedWithdrawConditionFirst: false,
      doNotAllowOtherPromotion: true,
      disableCashBackIfDoNotFinishWithdrawCondition: false,
      alwaysJoinThisPromotioppnAllowMultipleRequest: false,
      dontAllowRequestPromoFromSameIPS: false,
    },
    depositBonus: false,
    depositCondition: "Re-load Bonus",
    provider: "EGT",
  },
];
