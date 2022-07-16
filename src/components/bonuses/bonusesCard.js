import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BonusDetails from "./bonusDetails";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    width: "95%",
    paddingBottom: "0px",
    margin: "15px 10px",
    "& .bodyText": {
      color: "black",
    },
  },
  cardContent: {
    paddingBottom: "0px",
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
  title: {
    fontWeight: "500",
  },
});

export default function ImgMediaCard({ bonusType }, context) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [bonus, setBonus] = useState({});

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      {bonusType.map((type, i) => {
        return (
          <Card key={type.id} className={classes.root}>
            <CardContent className={classes.cardContent}>
              <div
                style={{ display: "block", justifyContent: "space-between" }}
              >
                <div>
                  {" "}
                  <Typography
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
                  <Typography className={classes.pos} color="textSecondary">
                    {context.t("Duration")}:
                    <br />
                    <div className="bodyText">
                      {type.startDate} - {type.endDate}
                    </div>
                    <br />
                  </Typography>
                </div>
              </div>
              {/* <Typography className={classes.pos} color="textSecondary">
                  Description:
               <br />
                  <div className='bodyText'>{type.description}</div>
                  <br /> */}
              {/* </Typography> */}
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  setBonus(bonusType[i]);
                  handleModal();
                }}
              >
                {context.t("More Info")}
              </Button>
              <Button size="small">{context.t("Deactivate")}</Button>
              <Button size="small">{context.t("Delete")}</Button>
            </CardActions>
          </Card>
        );
      })}
      <BonusDetails open={open} close={handleModal} data={bonus} />
    </>
  );
}


ImgMediaCard.contextTypes = {
  t: PropTypes.func.isRequired,
};
