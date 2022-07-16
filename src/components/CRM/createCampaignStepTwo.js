/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import BonusTypeCard from "./createCampaignBonusCard";
import { bonusesTypes } from "../../mockData/bonusesTypesMock";
import SearchBox from "../../components/bonuses/searchBox";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
//TODO - change to normal
import { PageNotifications } from "../../components/notifications/notificationService";

const BonusesTypes = (props, context) => { 
  const state = useSelector((state) => ({
    showNotificationMessage: state.showNotification.showNotificationMessage,
  }));

  const [bonusesTypesLoc, setbonusesTypes] = useState([]);
  const [searchField, setsearchField] = useState("");

  const filteredMovies = bonusesTypesLoc.filter((type) => {
    return type.title.toLowerCase().includes(searchField.toLowerCase());
  });

  const onSearchChange = (event) => {
    setsearchField(event.target.value);
  };
  const title = `Select Bonus Type - Panthera Platform`;
  //const dispatch = useDispatch();
  useEffect(() => {
    document.title = title;
    setbonusesTypes(bonusesTypes);
    //dispatch(setCurrentMenuTab("Bonuses Types"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
        }}
      >
        <SearchBox searchChange={onSearchChange} />
      </div>
      {state.showNotificationMessage ? <PageNotifications /> : ""}

      <div
        style={{
          margin: "0 6% 0 0 ",
          display: "grid",
          gridTemplateColumns: "25% 25% 25% 25%",
        }}
      >
        <BonusTypeCard bonusType={filteredMovies} />
      </div>
    </>
  );
};

BonusesTypes.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default BonusesTypes;
