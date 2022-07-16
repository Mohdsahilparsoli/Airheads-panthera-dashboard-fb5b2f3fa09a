/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardActions from "@material-ui/core/CardActions";
import Tooltip from "@material-ui/core/Tooltip";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";

import "../../styles/ProfileContent.scss";

import { logoutUser } from "../../store/loginPage/loginActions";
import { checkRequest } from "../../store/authentication/tokenHandlerAction";
import { getCurrentUserInfo } from "../../store/userManagment/userActions";

const ProfileContent = (props, context) => {
  const store = useSelector((state) => ({
    role: state.changeProfileUserData.current_user.role,
    profilePicture: state.loggedInUser.profilePicture,
    name: state.changeProfileUserData.current_user.firstName + " " + state.changeProfileUserData.current_user.lastName,
    user_data: state.changeProfileUserData.current_user,

  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkRequest(getCurrentUserInfo()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    store.user_data.firstName,
    store.user_data.lastName,
    store.user_data.department,
  ]);
  return (
    <Card className="ProfileContent">
      <CardHeader
        avatar={
          <Tooltip title={store.name} arrow>
            <Avatar aria-label="profile">
              {store.profilePicture !== null ? (
                <img
                  src={store.profilePicture}
                  alt="profilePicture"
                  style={{ width: "100%" }}
                />
              ) : (
                store.name.charAt(0)
              )}
            </Avatar>
          </Tooltip>
        }
        action={
          <Tooltip title={context.t("Settings")} arrow>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        }
        title={store.name}
        subheader={store.role}
      />
      <CardActions disableSpacing>
        <Tooltip title={context.t("Logout")} arrow>
          <Link to="/">
            <IconButton
              aria-label="logout"
              onClick={() => {
                dispatch(logoutUser());
              }}
            >
              <ExitToAppIcon />
            </IconButton>
          </Link>
        </Tooltip>

        <Tooltip title={context.t("My profile")} arrow>
          <Link to="/myProfile">
            <IconButton
              aria-label="myprofile"
              onClick={() => props.onClick("myProfile")}
            >
              <PersonIcon />
            </IconButton>
          </Link>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

ProfileContent.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default ProfileContent;
