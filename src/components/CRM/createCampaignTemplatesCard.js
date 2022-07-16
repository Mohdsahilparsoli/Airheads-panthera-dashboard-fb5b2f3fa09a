import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import * as colors from "../../styles/Colors.scss";
import CardMedia from "@material-ui/core/CardMedia";
import emailTemplate from '../../assets/emailTemplate.png'

import { useSelector, useDispatch } from "react-redux";
import { setStepThreeData } from '../../store/createCampaign/createCampaignActions'

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    margin: "15px 10px",
    "& .bodyText": {
      color: "black",
    },
  },
  selectedRoot: {
    boxShadow: "0px 0px 1.5px 2.5px rgba(135,200,71,1)",
    maxWidth: 445,
    margin: "15px 10px",
    "& .bodyText": {
      color: "black",
    },
  },
  active: {
    "& .status": {
      color: "green",
    },
  },
  deactivated: {
    "& .status": {
      color: "red",
    },
  },
  media: {
    height: 140,
  },
});

export default function ImgMediaCard({ renderSelect = true, bonusType }) {
  const store = useSelector((state) => ({    
    chosenTemplate:  state.changeCampaignData.stepThreeData.chosenTemplate
  }));

  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      {bonusType.map((type, i) => {
          return (
            <Card
              className={ store.chosenTemplate.id === type.id ? classes.selectedRoot : classes.root  }
            >
              <CardContent>
                <CardMedia
                  className={classes.media}
                  image={emailTemplate}
                  title="Contemplative Reptile"
                />
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                >
                  Preview
                </Button>
                {renderSelect ? (
                  <Button 
                    size="small"
                    onClick={() => { dispatch(setStepThreeData('chosenTemplate', bonusType[i]))} }
                  >
                    Select
                  </Button>
                ) : (
                  <></>
                )}
              </CardActions>
            </Card>
          );
      })}
    </>
  );
}
