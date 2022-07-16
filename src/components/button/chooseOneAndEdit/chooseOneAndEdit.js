import React from 'react'
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    editButton: {
      padding: theme.spacing(2),
      margin: "15px 0",
      minWidth: 220,
    },
  }));

const ChooseOneAndEdit =  ({selectedPlayer, title, link, customStyles}) => {
    const classes = useStyles();

    if (selectedPlayer === undefined) {
        return (
          <Button
            variant="contained"
            className={classes.editButton}
            color="primary"
            style={customStyles}
            disabled
          >
            {title}
          </Button>
        );
      } else {
        if (selectedPlayer.length === 0) {
          return (
            <Button
              variant="contained"
              className={classes.editButton}
              color="primary"
              style={customStyles}
              disabled
            >
              {title}
            </Button>
          );
        } else {
          return (
            <Link
              to={{
                pathname: link,
                state: {
                  selectedPlayer,
                },
              }}
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.editButton}
                style={customStyles}
              >
                {title}
              </Button>
            </Link>
          );
        }
      }
}

export default ChooseOneAndEdit