import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FollowButton from "../../components/FollowButton";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import { useHistory } from "react-router-dom";
import { postRequest } from "../../utils/backEndFetch";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "red",
  },
}));

export default function CardHeaderDefault({
  userData,
  isFollowed,
  isLoggedIn,
}) {
  const [Followed,setFollowed]= React.useState(isFollowed)
  const classes = useStyles();
  const history = useHistory();

  const movesignin = () => {
    history.push("/signin");
  };
  const setFollow = (path) => {
    postRequest(path,{followed_id:userData.id}).then((response) => {
      setFollowed(!Followed)
    });
  };

  return (
    <div>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            alt={userData.first_name}
            src={userData.profile_image}
          />
        }
        action={
          <FollowButton
            isFollowed={Followed}
            onClick={isLoggedIn ? () =>{Followed?setFollow('/unFollow'):setFollow('/followers')}: movesignin}
          />
        }
        title={userData.first_name + " " + userData.last_name}
      />
    </div>
  );
}
