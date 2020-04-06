import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FollowButton from '../../components/FollowButton';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: 'red'
  }
}));

export default function CardHeaderDefault({ userName, isLoggedIn }) {
  const classes = useStyles();
  const history = useHistory();

  const movesignin = () => {
    history.push('/signin');
  };
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            Y
          </Avatar>
        }
        action={<FollowButton onClick={isLoggedIn ? () => 1 : movesignin} />}
        title={userName}
      />
    </div>
  );
}
