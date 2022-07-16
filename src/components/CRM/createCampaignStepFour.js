/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from '@material-ui/core/CardHeader'
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import emailTemplate from '../../assets/emailTemplate.png'
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "70%",
    margin: '8px 15%',
    '& .bodyText': {
      color: 'black'
    },
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
  header: {
    backgroundColor: "#7a80b4"
  },
  content: {
    backgroundColor: "#e8eaf6"
  },
  media: {
    maxWidth: "70%",
    height: 1380,
    margin: "15px 20%"
  },
}));

const Preview = (props, context) => {
  const classes = useStyles();

  const title = `Preview - Panthera Platform`;
  useEffect(() => {
    document.title = title;
    
  }, []);
  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardHeader
          className={classes.header}
          title={
            <Typography gutterBottom variant="h5" component="h2">
                Campaign Settings
            </Typography>
         } 
        />
        <CardContent className={classes.content}>
          <Typography component={'div'} color="textSecondary" gutterBottom>
            Campaign Name:
            <div className='bodyText'>Bonus Promo</div>
          </Typography>
          <Typography component={'div'} color="textSecondary" gutterBottom>
            Target Group:
            <div className='bodyText'>Players who registered in the last week</div>
          </Typography>
          <Typography component={'div'} className={classes.pos} color="textSecondary">
            Campaign Duration:
            <br />
            <div className='bodyText'>2020-3-11 - 2025-3-11</div>
            <br />
          </Typography>
        </CardContent>

        <CardHeader
          className={classes.header}
          title={
            <Typography gutterBottom variant="h5" component="h2">
              Bonus Type
            </Typography>
         } 
        />
        <CardContent className={classes.content}>
          <Typography component={'div'} color="textSecondary" gutterBottom>
            Name:
            <div className='bodyText'>Signup - Slot 100% 15x</div>
          </Typography>
          <Typography component={'div'} className={classes.active} color="textSecondary">
            Status:
          <br />
            <div className='status'>Active</div>
          </Typography>
          <Typography component={'div'} className={classes.pos} color="textSecondary">
            Duration:
            <br />
            <div className='bodyText'>2020-3-11 - 2025-3-11</div>
            <br />
          </Typography>
          <Typography component={'div'} className={classes.pos} color="textSecondary">
            Description:
            <br />
            <div className='bodyText'>In dignissim mauris elit, ac facilisis diam ornare sit amet. Mauris tempor vestibulum bibendum.</div>
            <br />
          </Typography>
        </CardContent>

        <CardHeader
          className={classes.header}
          title={
            <Typography gutterBottom variant="h5" component="h2">
              Selected Template
            </Typography>
         } 
        />

        <CardContent className={classes.content}>
          <CardMedia
            className={classes.media}
            image={emailTemplate}
          />
        </CardContent>
      </Card>
    </>
  );
};

Preview.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Preview;
