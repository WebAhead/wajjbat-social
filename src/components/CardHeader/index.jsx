import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FollowButton from "../../components/FollowButton";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles(theme => ({
    avatar: {
      backgroundColor: "red"
    },
  }));



export default function CardHeaderDefault() {
    const classes = useStyles();

    return (
        <div>
            <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              Y
            </Avatar>
          }
          action={
            <FollowButton />
          }
          title="Yousef Rizik"
          subheader="Fluffy Pancake"
        />
        </div>
    )
}
