export const localeTextAGGrid = (context) => ({
  // for filter panel
  page: context.t("page"),
  more: context.t("more"),
  to: context.t("to"),
  of: context.t("of"),
  next: context.t("next"),
  last: context.t("last"),
  first: context.t("first"),
  previous: context.t("previous"),
  loadingOoo: context.t("loading..."),

  // for set filter
  selectAll: context.t("Select All"),
  searchOoo: context.t("Search..."),
  blanks: context.t("blanks"),

  // for number filter and text filter
  filterOoo: context.t("filter..."),
  equals: context.t("Equals"),
  notEqual: context.t("Not Equal"),

  // for the date filter
  dateFormatOoo: context.t("daYyyy-mm-dd"),

  // for number filter
  lessThan: context.t("Less Than"),
  greaterThan: context.t("Greater Than"),
  lessThanOrEqual: context.t("Less Than Or Equal"),
  greaterThanOrEqual: context.t("Greater Than Or Equal"),
  inRange: context.t("In Range"),
  inRangeStart: context.t("Range Start"),
  inRangeEnd: context.t("Range End"),

  // for text filter
  contains: context.t("Contains"),
  notContains: context.t("Not Contains"),
  startsWith: context.t("Starts with"),
  endsWith: context.t("Ends with"),

  // filter conditions
  andCondition: context.t("AND"),
  orCondition: context.t("OR"),

  // filter buttons
  applyFilter: context.t("Apply"),
  resetFilter: context.t("Reset"),
  clearFilter: context.t("Clear"),

  // the header of the default group column
  group: context.t("Group"),

  // tool panel
  columns: context.t("Columns"),
  filters: context.t("filter"),
  rowGroupColumns: context.t("Pivot Cols"),
  rowGroupColumnsEmptyMessage: context.t("drag cols to group"),
  valueColumns: context.t("Value Cols"),
  pivotMode: context.t("Pivot-Mode"),
  groups: context.t("Groups"),
  values: context.t("Values"),
  pivots: context.t("Pivots"),
  valueColumnsEmptyMessage: context.t("drag cols to aggregate"),
  pivotColumnsEmptyMessage: context.t("drag here to pivot"),
  toolPanelButton: context.t("tool panel"),

  // other
  noRowsToShow: context.t("no rows"),
  enabled: context.t("Enabled"),

  // enterprise menu
  pinColumn: context.t("Pin Column"),
  valueAggregation: context.t("Value Agg"),
  autosizeThiscolumn: context.t("Autosize This"),
  autosizeAllColumns: context.t("Autsoize All"),
  groupBy: context.t("Group by"),
  ungroupBy: context.t("UnGroup by"),
  resetColumns: context.t("Reset Those Cols"),
  expandAll: context.t("Expand All"),
  collapseAll: context.t("Collapse All"),
  toolPanel: context.t("Tool Panel"),
  export: context.t("Export to"),
  csvExport: context.t("CSV Export"),
//   excelExport: context.t("Excel Export (.xlsx)"),
//   excelXmlExport: context.t("Excel Export (.xml)"),

  // enterprise menu (charts)
  pivotChartAndPivotMode: context.t("Pivot Chart & Pivot Mode"),
  pivotChart: context.t("Pivot Chart"),
  chartRange: context.t("Chart Range"),

  columnChart: context.t("Column"),
  groupedColumn: context.t("Grouped"),
  stackedColumn: context.t("Stacked"),
  normalizedColumn: context.t("100% Stacked"),

  barChart: context.t("Bar"),
  groupedBar: context.t("Grouped"),
  stackedBar: context.t("Stacked"),
  normalizedBar: context.t("100% Stacked"),

  pieChart: context.t("Pie"),
  pie: context.t("Pie"),
  doughnut: context.t("Doughnut"),

  line: context.t("Line"),

//   xyChart: context.t("X Y (Scatter)"),
//   scatter: context.t("Scatter"),
  bubble: context.t("Bubble"),

  areaChart: context.t("Area"),
  area: context.t("Area"),
  stackedArea: context.t("Stacked"),
  normalizedArea: context.t("100% Stacked"),

  // enterprise menu pinning
  pinLeft: context.t("Pin <<"),
  pinRight: context.t("Pin >>"),
  noPin: context.t("DontPin <>"),

  // enterprise menu aggregation and status bar
  sum: context.t("Sum"),
  min: context.t("Min"),
  max: context.t("Max"),
  none: context.t("None"),
  count: context.t("Count"),
  average: context.t("Average"),
  filteredRows: context.t("Filtered"),
  selectedRows: context.t("Selected"),
  totalRows: context.t("Total Rows"),
  totalAndFilteredRows: context.t("Rows"),

  // standard menu
  copy: context.t("Copy"),
  copyWithHeaders: context.t("Copy With Headers"),
  ctrlC: context.t("Ctrl n C"),
  paste: context.t("Paste"),
  ctrlV: context.t("Ctrl n V"),
});
