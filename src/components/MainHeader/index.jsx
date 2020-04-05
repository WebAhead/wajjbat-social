import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import MoreIcon from '@material-ui/icons/MoreVert';
import logoExample from '../../assets/logos/logoExample.png';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  appBar: {
    background: 'white',
    boxShadow: '0 3px 5px 2px rgba(33, 181, 162, 0.25)',
    position: 'fixed',
    color: '#21b5a2'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    color: 'white',
    backgroundColor: fade('#21b5a2', 0.55),
    '&:hover': {
      backgroundColor: fade('#21b5a2', 0.65)
    },
    margin: '0px 10px 0px 15px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  logo: {
    width: 100,
    height: 25,
    margin: '5px',
    marginLeft: '0'
  }
}));

export default function MainHeader({ isLoggedIn, setisLoggedIn }) {
  const classes = useStyles();
  const [mobile, setMobile] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobile);

  const handleMobileMenuClose = () => {
    setMobile(null);
  };

  const handleMobileMenuOpen = event => {
    setMobile(event.currentTarget);
  };
  const logout = async () => {
    if (isLoggedIn) {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/logout`, {
          withCredentials: true
        });

        if (data.status) setisLoggedIn(false);
        return 1;
      } catch (error) {
        console.log(error);
        return 1;
      }
    }

    return 1;
  };
  const mobileMenuId = 'menuMobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobile}
      origin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={logout}>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          {/* <LogoutIcon /> */}
        </IconButton>
        <p>logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <img className={classes.logo} src={require('../../assets/logos/logo.png')} alt="logo" />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 10 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                {/* <LogoutIcon /> */}
              </Badge>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton aria-label="read more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
