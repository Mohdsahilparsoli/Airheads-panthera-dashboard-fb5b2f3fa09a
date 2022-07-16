import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { notificationsData } from '../../mockData/notificationsPopupCardMockData'
import { setShowNotificationPopupCard } from '../../store/notifications/notificationActions'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
    position: "fixed",
    top: "8%",
    right: "2.4%",
    paddingBottom: "0px",
    margin: "15px 10px",
  },
  cardContent: {
    paddingBottom: "0px",
  },
  title: {
    marginLeft: "20px",
    textAlign: "left",
    fontWeight: "bold",
  },
  notificationInfo: {
    display: "grid", 
    gridTemplateColumns: "10% 10% 10% 70%",
    marginLeft: "20px"
  },
  notificationDate: {
    display: "grid", 
    gridTemplateColumns: "10% 10% 10% 70%",
    marginTop: "10px",
    marginLeft: "20px"
  }
}));

export default function NotificationsPopupCard(props, context) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const store = useSelector((state) => ({
    userID: state.loggedInUser.id,
    profilePicture: state.loggedInUser.profilePicture,
  }));

  const handleClose = () => {
    dispatch(setShowNotificationPopupCard(false));
  };

  return (
    <>
      <Card  className={classes.root}>
        <CardContent className={classes.cardContent}>
          {notificationsData.map((type, i) => {
            return (
              <div key={type.id}>
                
                <CardActionArea>
                
                <Typography className={classes.title} gutterBottom variant="h5" component="h1">
                  {type.title}
                </Typography>

                <Typography className={classes.notificationInfo} variant="subtitle1" component="span">
                  <Avatar alt="Remy Sharp" src={store.profilePicture} />
                  <div style={{fontWeight: "bold"}}>By</div>
                  <div style={{fontWeight: "bold"}}>{type.by}</div>
                </Typography>

                <Typography className={classes.notificationDate} variant="caption" component="span">
                  <div>{type.date}</div>
                </Typography>

                </CardActionArea>
                <br/>
              </div>
            );
          })}

          </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={handleClose}>{context.t("Close")}</Button>
            </CardActions>
        </Card>
    </>
  );
}


NotificationsPopupCard.contextTypes = {
  t: PropTypes.func.isRequired,
};
