/* eslint-disable no-lone-blocks */
{
  /* --------------------------------------  Bonuses  ---------------------------------------- */
}

export const bonusesColumnDef = (context) => [
  {
    headerName: context.t("Name"),
    checkboxSelection: true,
    field: "firstName",
    cellClass: "cell-default-style",
    filter: "agTextColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["contains"],
    },
  },
  {
    headerName: context.t("Surname"),
    field: "lastName",
    cellClass: "cell-default-style",
    filter: "agTextColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["contains"],
    },
  },
  {
    headerName: context.t("Email"),
    field: "email",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Affiliate Id"),
    field: "affiliateId",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    hide: true,
  },
  {
    headerName: context.t("Bonus Status"),
    field: "bonusStatus",
    cellClass: "cell-default-style",
    chartDataType: "series",
    hide: true,
  },
  {
    headerName: context.t("Bonus Type"),
    field: "typeofBonus",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Given on"),
    field: "bonusGivenOn",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
    hide: true,
  },
  {
    headerName: context.t("Expires"),
    field: "bonusExpiresOn",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
    hide: true,
  },

  {
    headerName: context.t("Cash Balance"),
    field: "cashBalance",
    cellClass: "cell-default-style",
    chartDataType: "series",
    sortable: true,
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
  },
  {
    headerName: context.t("Promo Balance"),
    field: "promoBalance",
    cellClass: "cell-default-style",
    chartDataType: "series",
    sortable: true,
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
  },
  {
    headerName: context.t("Wagered"),
    field: "amountWagered",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
  },
  {
    headerName: "% " + context.t("Cleared"),
    field: "bonusCleared",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
  },
];

export const bonusesDefColDef = {
  resizable: true,
  filter: true,
};
export const bonusesFloatingFilter = true;

{
  /* --------------------------------------  Player Management  ---------------------------------------- */
}

export const playerManagementColumnDef = (context) => [
  {
    headerName: context.t("Name"),
    field: "firstName",
    checkboxSelection: true,
    cellClass: "cell-default-style",
    filter: "agTextColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["contains"],
    },
  },
  {
    headerName: context.t("Email"),
    field: "email",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Status"),
    field: "status",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Affiliate Id"),
    field: "affiliateId",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    hide: true,
  },
  {
    headerName: context.t("Country"),
    field: "country",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Registration Time"),
    field: "createdAt",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
    hide: true,
  },
  {
    headerName: context.t("Last Login Time"),
    field: "loginStatus",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
    hide: true,
  },
  {
    headerName: context.t("Cash Balance"),
    field: "balance",
    cellClass: "cell-default-style",
    chartDataType: "series",
    sortable: true,
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
  },
  {
    headerName: context.t("Promo Balance"),
    field: "promo_balance",
    cellClass: "cell-default-style",
    chartDataType: "series",
    sortable: true,
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
  },
  {
    headerName: context.t("Validated"),
    field: "verifiedAt",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
    hide: true,
  },
  {
    headerName: context.t("Site ID"),
    field: "siteID",
    cellClass: "cell-default-style",
    chartDataType: "series",
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
    hide: true,
  },
];

export const palyerManagementDefColDef = {
  resizable: true,
  filter: true,
};
export const palyerManagementFloatingFilter = true;

{
  /* --------------------------------------  Responsible Gaming  ---------------------------------------- */
}

export const responsibleGamingColumnDef = (context) => [
  {
    headerName: context.t("Name"),
    field: "firstName",
    checkboxSelection: true,
    cellClass: "cell-default-style",
    filter: "agTextColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["contains"],
    },
  },
  {
    headerName: context.t("Surname"),
    field: "lastName",
    cellClass: "cell-default-style",
    filter: "agTextColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["contains"],
    },
  },
  {
    headerName: context.t("Email"),
    field: "email",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Status"),
    field: "status",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Self-Exclusion Start"),
    field: "selfExclusionStart",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
  },
  {
    headerName: context.t("Self-Exclusion End"),
    field: "selfExclusionEnd",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
  },
];
export const responsibleGamingDefColDef = {
  resizable: true,
  filter: true,
};
export const responsibleGamingFloatingFilter = true;

{
  /* --------------------------------------  Payments  ---------------------------------------- */
}

export const paymentsColumnDef = (context) => [
  {
    headerName: context.t("Name"),
    field: "firstName",
    checkboxSelection: true,
    cellClass: "cell-default-style",
    filter: "agTextColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["contains"],
    },
  },
  {
    headerName: context.t("Surname"),
    field: "lastName",
    cellClass: "cell-default-style",
    filter: "agTextColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["contains"],
    },
  },
  {
    headerName: context.t("Country"),
    field: "country",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Cash Balance"),
    field: "cashBalance",
    cellClass: "cell-default-style",
    chartDataType: "series",
    sortable: true,
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
  },
  {
    headerName: context.t("Promo Balance"),
    field: "promoBalance",
    cellClass: "cell-default-style",
    chartDataType: "series",
    sortable: true,
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
  },

  {
    headerName: context.t("Email"),
    field: "email",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Status"),
    field: "status",
    cellClass: "cell-default-style",
    chartDataType: "series",
    hide: true,
  },
  {
    headerName: context.t("Affiliate Id"),
    field: "affiliateId",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    hide: true,
  },
  {
    headerName: context.t("Country"),
    field: "country",
    cellClass: "cell-default-style",
    chartDataType: "series",
    hide: true,
  },
  {
    headerName: context.t("Cash Balance"),
    field: "cashBalance",
    cellClass: "cell-default-style",
    chartDataType: "series",
    sortable: true,
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
  },
  {
    headerName: context.t("Promo Balance"),
    field: "promoBalance",
    cellClass: "cell-default-style",
    chartDataType: "series",
    sortable: true,
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
  },
  {
    headerName: context.t("KYC"),
    field: "KYC",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("KYC ID"),
    field: "KYCid",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    hide: true,
  },
  {
    headerName: context.t("Payment Method"),
    field: "paymentMethodType",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
    hide: true,
  },
  {
    headerName: context.t("Site ID"),
    field: "siteID",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agNumberColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    hide: true,
  },
  {
    headerName: context.t("Registration Time"),
    field: "registrationTime",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
    hide: true,
  },
  {
    headerName: context.t("Last Login Time"),
    field: "lastLoginTime",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
    hide: true,
  },
  {
    headerName: context.t("Last Bet time"),
    field: "lastBetTime",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
    hide: true,
  },
];

export const paymentsDefColDef = {
  resizable: true,
  filter: true,
};
export const paymentsFloatingFilter = true;
{
  /* --------------------------------------  Player Payments  ---------------------------------------- */
}

export const playerPaymentsColumnDef = (context) => [
  {
    headerName: context.t("Created Date"),
    field: "createdDate",
    cellClass: "cell-default-style",
    filter: "agDateColumnFilter",
    minWidth: 200,
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["inRange"],
      comparator: function (filterLocalDateAtMidnight, cellValue) {
        var dateAsString = cellValue;
        var dateParts = dateAsString.split("/");
        var cellDate = new Date(
          Number(dateParts[2].slice(0, 4)),
          Number(dateParts[1]) - 1,
          Number(dateParts[0])
        );
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
          return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
          return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
          return 1;
        }
      },
    },
  },
  {
    headerName: context.t("Transaction ID"),
    field: "transactionid",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
  },
  {
    headerName: context.t("Transaction Name"),
    field: "transactionName",
    cellClass: "cell-default-style",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
  },
  {
    headerName: context.t("Type"),
    field: "transactionType",
    cellClass: "cell-default-style",
  },
  {
    headerName: context.t("Binding Ref"),
    field: "bindingRef",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
  },
  {
    headerName: context.t("Unique Ref"),
    field: "uniqueRef",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
  },
  {
    headerName: context.t("Balance Type"),
    field: "balanceType",
    cellClass: "cell-default-style",
  },
  {
    headerName: context.t("Amount"),
    field: "amount",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
  },
  {
    headerName: context.t("Result"),
    field: "result",
    cellClass: "cell-default-style",
  },
  {
    headerName: context.t("Balance Before"),
    field: "balanceBefore",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
  },
  {
    headerName: context.t("Balance After"),
    field: "balanceAfter",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
  },
];

export const playerPaymentsDefColDef = {
  resizable: true,
  filter: true,
};
export const playerPaymentsFloatingFilter = true;

export const playerPayemntsRowClassRules = {
  "row-green": "data.amount > 0",
  "row-red": "data.amount < 0",
};

{
  /* --------------------------------------  Admins  ---------------------------------------- */
}

export const adminsColumnDef = (context) => [
  {
    headerName: context.t("Provider"),
    field: "brand",
    // checkboxSelection: true,
    cellClass: "cell-default-style",
  },
  {
    headerName: context.t("Turnover"),
    field: "turnover",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Margin") + "%",
    field: "margin",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: "GGR",
    field: "ggr",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Bonus Given"),
    field: "bonusgiven",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Bonus Spent"),
    field: "bonusspent",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: "NGR",
    field: "ngr",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
];

export const adminsDefColDef = {
  resizable: true,
};
export const adminsFloatingFilter = false;

export const adminRowClassRules = {
  "bold-text": "data.brand === 'Total:'",
};

{
  /* --------------------------------------  Withdrawal Transactions  ---------------------------------------- */
}

export const withdrawalTransactionsColumnDef = (context) => [
  {
    headerName: context.t("Transaction ID"),
    field: "transactionId",
    checkboxSelection: true,
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Date"),
    field: "date",
    cellClass: "cell-default-style",
    filter: "agDateColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["inRange"],
      comparator: function (filterLocalDateAtMidnight, cellValue) {
        var dateAsString = cellValue;
        var dateParts = dateAsString.split("/");
        var cellDate = new Date(
          Number(dateParts[2].slice(0, 4)),
          Number(dateParts[1]) - 1,
          Number(dateParts[0])
        );
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
          return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
          return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
          return 1;
        }
      },
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Name"),
    field: "name",
    cellClass: "cell-default-style",
    filter: "agTextColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["contains"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Email"),
    field: "email",
    cellClass: "cell-default-style",
    chartDataType: "series",
    minWidth: 200,
  },
  {
    headerName: context.t("Payment Type"),
    field: "paymentType",
    cellClass: "cell-default-style",
    chartDataType: "series",
    minWidth: 200,
  },
  {
    headerName: context.t("Amount"),
    field: "amount",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Currency"),
    field: "currency",
    cellClass: "cell-default-style",
    chartDataType: "series",
    minWidth: 200,
  },
  {
    headerName: context.t("Base Amount"),
    field: "baseAmount",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    ilterParams: {
      filterOptions: ["contains"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("KYC ID"),
    field: "kycId",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("KYC Add"),
    field: "kycAdd",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("KYC Pay"),
    field: "kycPay",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
];

export const withdrawalTransactionsDefColDef = {
  resizable: true,
  filter: true,
};
export const withdrawalTransactionsFloatingFilter = true;

{
  /* --------------------------------------  Admin Management  ---------------------------------------- */
}

export const adminManagementColumnDef = (context) => [
  {
    headerName: context.t("Name"),
    field: "firstName",
    checkboxSelection: true,
    cellClass: "cell-default-style",
    filter: "agTextColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["contains"],
    },
  },
  {
    headerName: context.t("Last Name"),
    field: "lastName",
    cellClass: "cell-default-style",
    filter: "agTextColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["contains"],
    },
  },
  {
    headerName: context.t("Email"),
    field: "email",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["contains"],
    },
  },
  {
    headerName: context.t("Role"),
    field: "role",
    cellClass: "cell-default-style",
  },
  {
    headerName: context.t("Status"),
    field: "status",
    cellClass: "cell-default-style",
  },
  {
    headerName: context.t("Online Status"),
    field: "loggedIn",
    cellClass: "cell-default-style",
  },
];

export const adminManagementDefColDef = {
  resizable: true,
  filter: true,
};
export const adminManagementFloatingFilter = true;

{
  /* --------------------------------------  Players Activity Report  ---------------------------------------- */
}

export const playersActivityReportColumnDef = (context) => [
  {
    headerName: context.t("CustomerId"),
    field: "customerId",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agNumberColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Name"),
    field: "name",
    cellClass: "cell-default-style",
    filter: "agTextColumnFilter",
    minWidth: 200,
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["contains"],
    },
  },
  {
    headerName: context.t("Currency"),
    field: "currency",
    cellClass: "cell-default-style",
    minWidth: 200,
  },
  {
    headerName: context.t("Real Balance"),
    field: "realBalance",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Bonus Balance"),
    field: "bonusBalance",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Country"),
    field: "country",
    cellClass: "cell-default-style",
    minWidth: 200,
  },
  {
    headerName: context.t("Total Bets"),
    field: "totalBets",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Total GGR"),
    field: "totalGgr",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Registration Date"),
    field: "registrationDate",
    cellClass: "cell-default-style",
    minWidth: 200,
    filter: "agDateColumnFilter",
    filterParams: {
      filterOptions: ["inRange"],
      comparator: function (filterLocalDateAtMidnight, cellValue) {
        var dateAsString = cellValue;
        var dateParts = dateAsString.split("/");
        var cellDate = new Date(
          Number(dateParts[2].slice(0, 4)),
          Number(dateParts[1]) - 1,
          Number(dateParts[0])
        );
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
          return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
          return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
          return 1;
        }
      },
    },
  },
];

export const playersActivityReportDefColDef = {
  resizable: true,
  filter: true,
};
export const playersActivityReportFloatingFilter = true;

{
  /* --------------------------------------  Online Players Report  ---------------------------------------- */
}

export const onlinePlayersReportColumnDef = (context) => [
  {
    headerName: context.t("CustomerId"),
    field: "customerId",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agNumberColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Name"),
    field: "name",
    cellClass: "cell-default-style",
    filter: "agTextColumnFilter",
    minWidth: 200,
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["contains"],
    },
  },
  {
    headerName: context.t("Country"),
    field: "country",
    cellClass: "cell-default-style",
    minWidth: 200,
  },
  {
    headerName: context.t("Currency"),
    field: "currency",
    cellClass: "cell-default-style",
    minWidth: 200,
  },
  {
    headerName: context.t("Real Balance"),
    field: "realBalance",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Bonus Balance"),
    field: "bonusBalance",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Lifetime deposits"),
    field: "lifetimeDeposits",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Lifetime withdrawals"),
    field: "lifetimeWithdrawals",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Open Bets"),
    field: "openBets",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("NGR"),
    field: "Ngr",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Logged in for"),
    field: "loggedInFor",
    cellClass: "cell-default-style",
    filter: "agTextColumnFilter",
    minWidth: 200,
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
    },
  },
];

export const onlinePlayersReportDefColDef = {
  resizable: true,
  filter: true,
};
export const onlinePlayersReportFloatingFilter = true;

{
  /* --------------------------------------  Withdrawal History  ---------------------------------------- */
}

export const withdrawalHistoryColumnDef = (context) => [
  {
    headerName: context.t("Transaction ID"),
    field: "transactionId",
    cellClass: "cell-default-style",
    filter: "agNumberColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Date"),
    field: "date",
    cellClass: "cell-default-style",
    filter: "agDateColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["inRange"],
      comparator: function (filterLocalDateAtMidnight, cellValue) {
        var dateAsString = cellValue;
        var dateParts = dateAsString.split("/");
        var cellDate = new Date(
          Number(dateParts[2].slice(0, 4)),
          Number(dateParts[1]) - 1,
          Number(dateParts[0])
        );
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
          return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
          return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
          return 1;
        }
      },
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Name"),
    field: "name",
    cellClass: "cell-default-style",
    filter: "agTextColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["contains"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Email"),
    field: "email",
    cellClass: "cell-default-style",
    chartDataType: "series",
    minWidth: 200,
  },
  {
    headerName: context.t("Payment Type"),
    field: "paymentType",
    cellClass: "cell-default-style",
    chartDataType: "series",
    minWidth: 200,
  },
  {
    headerName: context.t("Amount"),
    field: "amount",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Currency"),
    field: "currency",
    cellClass: "cell-default-style",
    chartDataType: "series",
    minWidth: 200,
  },
  {
    headerName: context.t("Base Amount"),
    field: "baseAmount",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("KYC ID"),
    field: "kycId",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("KYC Add"),
    field: "kycAdd",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
  {
    headerName: context.t("KYC Pay"),
    field: "kycPay",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agNumberColumnFilter",
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
    minWidth: 200,
  },
];

export const withdrawalHistoryDefColDef = {
  resizable: true,
  filter: true,
};
export const withdrawalHistoryFloatingFilter = true;

{
  /* --------------------------------------  Campaign Reports  ---------------------------------------- */
}

export const campaignReportsColumnDef = (context) => [
  {
    headerName: context.t("Campaign ID"),
    field: "id",
    checkboxSelection: true,
    cellClass: "cell-default-style",
  },
  {
    headerName: context.t("Campaign Name"),
    field: "name",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Status"),
    field: "status",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("CTR") + "%",
    field: "ctr",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: "Bonus given",
    field: "bonusgiven",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Bonus Spent"),
    field: "bonusspent",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Start date:"),
    field: "startdate",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: "End date",
    field: "enddate",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
];
export const campaignReportssDefColDef = {
  resizable: true,
};
export const campaignReportsFloatingFilter = false;

export const campaignReportsRowClassRules = {
  "bold-text": "data.brand === 'Total:'",
};

{
  /* --------------------------------------  Bonuses Reports  ---------------------------------------- */
}

export const bonusesReportsColumnDef = (context) => [
  {
    headerName: context.t("Bonus ID"),
    field: "id",
    checkboxSelection: true,
    cellClass: "cell-default-style",
  },
  {
    headerName: context.t("Bonus Name"),
    field: "name",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Status"),
    field: "status",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("CTR") + "%",
    field: "ctr",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: "Bonus given",
    field: "bonusgiven",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Bonus Spent"),
    field: "bonusspent",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Start date:"),
    field: "startdate",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: "End date",
    field: "enddate",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
];
export const bonusesReportsDefColDef = {
  resizable: true,
};
export const bonusesReportsFloatingFilter = false;

export const bonusesReportsRowClassRules = {
  "bold-text": "data.brand === 'Total:'",
};

{
  /* --------------------------------------  Bonus Reports  ---------------------------------------- */
}

export const bonusReportsColumnDef = (context) => [
  {
    headerName: context.t("Campaign ID"),
    field: "id",
    checkboxSelection: true,
    cellClass: "cell-default-style",
  },
  {
    headerName: context.t("Campaign Name"),
    field: "name",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Status"),
    field: "status",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("CTR") + "%",
    field: "ctr",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: "Bonus given",
    field: "bonusgiven",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Bonus Spent"),
    field: "bonusspent",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Start date:"),
    field: "startdate",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: "End date",
    field: "enddate",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
];
export const bonusReportsDefColDef = {
  resizable: true,
};
export const bonusReportsFloatingFilter = false;

export const bonusReportsRowClassRules = {
  "bold-text": "data.brand === 'Total:'",
};

{
  /* --------------------------------------  Communications  ---------------------------------------- */
}

export const communicationsColumnDef = (context) => [
  {
    headerName: context.t("ID"),
    checkboxSelection: true,
    field: "id",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agNumberColumnFilter",
    sortable: true,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan"],
    },
  },
  {
    headerName: context.t("Status"),
    field: "status",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Date"),
    field: "date",
    cellClass: "cell-default-style",
    filter: "agDateColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["inRange"],
      comparator: function (filterLocalDateAtMidnight, cellValue) {
        var dateAsString = cellValue;
        var dateParts = dateAsString.split("/");
        var cellDate = new Date(
          Number(dateParts[2].slice(0, 4)),
          Number(dateParts[1]) - 1,
          Number(dateParts[0])
        );
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
          return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
          return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
          return 1;
        }
      },
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Assignee"),
    field: "assignee",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Title"),
    field: "title",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
  },
  {
    headerName: context.t("Files Attached"),
    field: "filesAttached",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Description"),
    field: "description",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["contains"],
    },
    minWidth: 200,
  },
];

export const communicationsDefColDef = {
  resizable: true,
  filter: true,
};

export const communicationsFloatingFilter = true;

export const communicationsRowClassRules = {
  "row-green": "data.status == 'Solved'",
  "row-blue": "data.status == 'In Review'",
};

{
  /* --------------------------------------  View Ticket  ---------------------------------------- */
}

export const viewTicketColumnDef = (context) => [
  {
    headerName: context.t("Date"),
    field: "date",
    cellClass: "cell-default-style",
    filter: "agDateColumnFilter",
    filterParams: {
      cellHeight: 20,
      debounceMs: 100,
      filterOptions: ["inRange"],
      comparator: function (filterLocalDateAtMidnight, cellValue) {
        var dateAsString = cellValue;
        var dateParts = dateAsString.split("/");
        var cellDate = new Date(
          Number(dateParts[2].slice(0, 4)),
          Number(dateParts[1]) - 1,
          Number(dateParts[0])
        );
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
          return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
          return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
          return 1;
        }
      },
    },
    minWidth: 200,
  },
  {
    headerName: context.t("Status"),
    field: "status",
    cellClass: "cell-default-style",
    chartDataType: "series",
  },
  {
    headerName: context.t("Comments"),
    field: "comments",
    cellClass: "cell-default-style",
    chartDataType: "series",
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"],
    },
  },
];

export const viewTicketDefColDef = {
  resizable: true,
  filter: true,
};

export const viewTicketFloatingFilter = true;
