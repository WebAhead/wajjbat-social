import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
      margin: theme.spacing(2),
      width: "70%",
  }
}));

export default function CommentFeed() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label="Add a comment"  />
    </form>
  );
}

