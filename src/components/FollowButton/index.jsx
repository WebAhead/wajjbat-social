import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    marginTop: 15
  }
}));

export default function TextButtons({ onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={onClick} color="primary">
        Follow
      </Button>
    </div>
  );
}
