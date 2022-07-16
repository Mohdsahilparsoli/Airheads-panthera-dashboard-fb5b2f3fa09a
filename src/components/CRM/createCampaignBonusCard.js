import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BonusDetails from "../bonuses/bonusDetails";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { setStepTwoData } from '../../store/createCampaign/createCampaignActions'

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    margin: '15px 10px',
    '& .bodyText': {
      color: 'black'
    }
  },
  selectedRoot: {
    boxShadow: "0px 0px 1.5px 2.5px rgba(135,200,71,1)",
    transform: "scale(1.03, 1.03)",
    maxWidth: 445,
    margin: '15px 10px',
    '& .bodyText': {
      color: 'black'
    }
  },
  active: {
    '& .status': {
      color: 'green'
    }

  },
  deactivated: {
    '& .status': {
      color: 'red'
    }
  },
  title: {
    fontWeight: "500",
  },
});

export default function ImgMediaCard({ bonusType  }, context) {
  const store = useSelector((state) => ({
    open:         state.changeCampaignData.stepTwoData.open,
    bonus:        state.changeCampaignData.stepTwoData.bonus,
    chosenBonus:  state.changeCampaignData.stepTwoData.chosenBonus
  }));

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(setStepTwoData('open', !store.open))
  };

  return (
    <>
      {bonusType.map((type, i) => {
          if (type.status === 'Active'){
            return (
              <Card key={type.id} className={store.chosenBonus.id === type.id ? classes.selectedRoot : classes.root}>
                <CardActionArea onClick={() => {dispatch(setStepTwoData('chosenBonus', bonusType[i]))}}>
                  <CardContent className={classes.cardContent}>
                    <div
                      style={{ display: "block", justifyContent: "space-between" }}
                    >
                      <div>
                        {" "}
                        <Typography
                          component={'div'}
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                        >
                          {context.t("Name")}:
                          <br />
                          <div className="bodyText">{type.title}</div>
                        </Typography>
                      </div>
                      <div>
                        <Typography
                        component={'div'}
                          className={
                            type.status === "Active"
                              ? classes.active
                              : classes.deactivated
                          }
                          color="textSecondary"
                        >
                          {context.t("Status")}:
                          <br />
                          <div className="status">{context.t(type.status)} </div>
                        </Typography>
                      </div>
                      <div>
                        <Typography component={'div'} className={classes.pos} color="textSecondary">
                        {context.t("Duration")}:
                          <br />
                          <div className="bodyText">
                            {type.startDate} - {type.endDate}
                          </div>
                          <br />
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      dispatch(setStepTwoData('bonus', bonusType[i]))
                      handleModal();
                    }}
                  >
                    {context.t("More Info")}
                  </Button>
                </CardActions>
              </Card>
            );
          }
          return(
              <>
              </>
          )
      })}
      <BonusDetails open={store.open} close={handleModal} data={store.bonus} />
    </>
  );
}

ImgMediaCard.contextTypes = {
  t: PropTypes.func.isRequired,
};