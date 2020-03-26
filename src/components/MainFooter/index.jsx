import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddBoxIcon from "@material-ui/icons/AddBox";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

const useStyles = makeStyles({
  root: {
    width: "100%",
    background: "linear-gradient(45deg, #bbdefb 30%, #42a5f5 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    display: "flex",
    justifyContent: "space-evenly",
    position: 'fixed',
    bottom: 0
  },
  icons: {
    fontSize: 32,
  },
  label: {
      color: '#ef5350'
  }
});

export default function MainFooter() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root} 
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          className={classes.label}
          icon={<HomeIcon className={classes.icons}/>}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          className={classes.label}
          icon={<FavoriteBorderIcon className={classes.icons} />}
        />
        <BottomNavigationAction
          label="Add Post"
          value="post"
          className={classes.label}
          icon={<AddBoxIcon className={classes.icons} />}
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          className={classes.label}
          icon={<PermIdentityIcon className={classes.icons} />}
        />
      </BottomNavigation>
    </div>
  );
}
