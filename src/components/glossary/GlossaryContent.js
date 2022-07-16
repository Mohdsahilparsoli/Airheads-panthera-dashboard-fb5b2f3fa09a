import React, { useState, lazy, Suspense } from "react";
import { useLocation } from "react-router";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "../../styles/GlossaryContent.scss";
import Draggable from "react-draggable";
import ClearIcon from "@material-ui/icons/Clear";
import PanToolIcon from "@material-ui/icons/PanTool";
import colors from "../../styles/Colors.scss";
function GlossaryContent(props) {
  const { pathname } = useLocation();

  const [textFieldValue, setTextFieldValue] = useState("");
  const [dragged, setdragged] = useState(true);
  const searchOptions = [
    { labelTitle: "MyProfile", alias: "MyProfile" },
    { labelTitle: "Admin", alias: "Admin" },
    { labelTitle: "Admin Management", alias: "AdminManagement" },
    { labelTitle: "Admin Details", alias: "AdminProfile" },
    { labelTitle: "Players Management", alias: "PlayersManagement" },
    { labelTitle: "Players ActivityReport Report", alias: "PlayersActivityReport" },
    { labelTitle: "Online Players Report", alias: "OnlinePlayersReport" },
    { labelTitle: "Player Details", alias: "PlayerProfile" },
    { labelTitle: "Payments", alias: "Payments" },
    { labelTitle: "Withdrawal Transactions", alias: "WithdrawalTransactions" },
    { labelTitle: "Withdrawal Review", alias: "WithdrawalReview" },
    { labelTitle: "Withdrawal History", alias: "WithdrawalHistory" },
    { labelTitle: "Player Payment Details", alias: "PlayerPayments" },
    { labelTitle: "Bonuses", alias: "Bonuses" },
    { labelTitle: "BonusesReports", alias: "BonusesReports" },
    { labelTitle: "Bonus Reports", alias: "BonusReports" },
    { labelTitle: "Communications", alias: "Communications" },
    { labelTitle: "Ticket Details", alias: "ViewTicket" },
    { labelTitle: "Responsible Gaming", alias: "ResponsibleGaming" },
    { labelTitle: "Create Promo", alias: "CreateCampaign" },
    { labelTitle: "Campaign Reports", alias: "CampaignReports" },
    { labelTitle: "Single Campaign Report", alias: "SingleCampaignReport" },

    {
      labelTitle: "Player Responsible Gaming Details",
      alias: "PlayerResponsibleGaming"
    }
  ];

  const getContentName = () => {
	return (
		textFieldValue === ''
			? pathname === '/' ? 'PlayersManagement' : capitalizeFirstLetter(pathname.slice(1)) // TODO temp fix
			: textFieldValue
	)
}

  const handleAutoCompleteChange = (e, value) => {
    if (!value) return;

    setTextFieldValue(value.alias);
  };

  const capitalizeFirstLetter = s => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const Content = lazy(() => import(`./glossaryContent/${getContentName()}`));
  const onStop = () => {
    setdragged(true);
  };

  const onControlledDrag = (e, position) => {
    setdragged(false);
  };
  return (
    <>
      <Draggable
        allowAnyClick={true}
        handle=".track"
        onDrag={onControlledDrag}
        onStop={onStop}
      >
        <div className="box">
          <div
            className="GlossaryContent"
            style={
              dragged
                ? { boxShadow: colors.shadow }
                : { boxShadow: colors.greenShadow }
            }
          >
            <div className="iconsActions">
              <PanToolIcon className="track" style={{ cursor: "move" }} />
              <ClearIcon onClick={props.handleClick} />
            </div>
            <Autocomplete
              id="combo-box-demo"
              options={searchOptions}
              getOptionLabel={option => option.labelTitle}
              onChange={handleAutoCompleteChange}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Search"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            <Suspense fallback={<div>Loading...</div>}>
              <div className="glossary-content-wrapper no-cursor">
                {" "}
                <Content />
              </div>
            </Suspense>
          </div>
        </div>
      </Draggable>
    </>
  );
}

export default GlossaryContent;
