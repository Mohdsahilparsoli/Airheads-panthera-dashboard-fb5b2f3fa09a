import React, { useState, useEffect } from "react";
import BonusTypeCard from "../../components/bonuses/bonusesCard";
import SearchBox from "../../components/bonuses/searchBox";
import { bonusesTypes } from "../../mockData/bonusesTypesMock";
import {
  RenderLinkButton,
  buttonTypes,
} from "../../components/button/renderButton";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMenuTab } from "../../store/menuHighlight/menuActions";
//TODO - change to normal
import { PageNotifications } from "../../components/notifications/notificationService";

const BonusesTypes = (props, context) => {
  const state = useSelector((state) => ({
    showNotificationMessage: state.showNotification.showNotificationMessage,
  }));
  const [bonusesTypesLoc, setbonusesTypes] = useState([]);
  const [searchField, setsearchField] = useState("");
  const title = `Avaliable Bonuses - Panthera Platform`;
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = title;
    setbonusesTypes(bonusesTypes);
    dispatch(setCurrentMenuTab("Bonuses Types"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredMovies = bonusesTypesLoc.filter((type) => {
    return type.title.toLowerCase().includes(searchField.toLowerCase());
  });
  const onSearchChange = (event) => {
    setsearchField(event.target.value);
  };
  return (
    <>
      {state.showNotificationMessage ? <PageNotifications /> : ""}
      <div className="main">
        <div style={{ display: "flex" }}>
          <h3>Avaliable Bonuses</h3>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "start",
          }}
        >
          {RenderLinkButton(
            {
              type: buttonTypes.addBonusType,
              title: context.t("Create Bonus Type"),
              customStyles: { margin: "25px 20px" },
            },
            context
          )}
          <SearchBox searchChange={onSearchChange} />
        </div>

        <div
          style={{
            margin: "0 6% 10% 0 ",
            display: "grid",
            gridTemplateColumns: "20% 20% 20% 20% 20%",
          }}
        >
          <BonusTypeCard bonusType={filteredMovies} />
        </div>
      </div>
    </>
  );
};

BonusesTypes.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default BonusesTypes;
