
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const SearchBox = ({ searchChange }, context) => {
  const [search, setsearch] = useState("");
  const handleChange = (e) => {
    searchChange(e);
    setsearch(e.target.value);
  };
  return (
    <TextField
      id="search"
      label={context.t("Search")}
      value={search}
      onChange={handleChange}
      variant="outlined"
      style ={{margin: '25px 0 0 0', width: '35%'}}
    />
  );
};

SearchBox.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default SearchBox;