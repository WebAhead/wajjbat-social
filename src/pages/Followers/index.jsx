import React from 'react';
import './follow.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  // const useStyles = makeStyles(theme => ({
  //   root: {
  //     width: '100%',
  //     maxWidth: '36ch',
  //     marginLeft: '40%',
  //     marginTop: '100px'
  //   },
  //   inline: {
  //     display: 'inline'
  //   }
  // }));

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     marginTop: '100px'
//   }
// }));

export default function SimpleTabs() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="barfollow">
        <AppBar position="static">
          <Tabs className="tab" centered value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="followers" {...a11yProps(0)} />
            <Tab label="following" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      </div>
      <TabPanel className="tappanel" value={value} index={0}>
        <List className="followers">
          <ListItem className="followersitem">
            <ListItemAvatar className="ListItemAvatar">
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSryt2zIsuLWBGnlbljN25G4eorGzIPJuDxN8EcJkqEUPbRYkZV"
              />
            </ListItemAvatar>
            <div className="item">
              <ListItemText className="Name" primary="Name" />
              <div>
                <Button variant="contained" color="secondary" className="Deletbutton">
                  un follow
                </Button>
              </div>
            </div>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem className="followersitem">
            <ListItemAvatar className="ListItemAvatar">
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSryt2zIsuLWBGnlbljN25G4eorGzIPJuDxN8EcJkqEUPbRYkZV"
              />
            </ListItemAvatar>
            <div className="item">
              <ListItemText className="Name" primary="Name" />
              <div>
                <Button variant="contained" color="secondary" className="Deletbutton">
                  un follow
                </Button>
              </div>
            </div>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem className="followersitem">
            <ListItemAvatar className="ListItemAvatar">
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSryt2zIsuLWBGnlbljN25G4eorGzIPJuDxN8EcJkqEUPbRYkZV"
              />
            </ListItemAvatar>
            <div className="item">
              <ListItemText className="Name" primary="Name" />
              <div>
                <Button variant="contained" color="secondary" className="Deletbutton">
                  un follow
                </Button>
              </div>
            </div>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem className="followersitem">
            <ListItemAvatar className="ListItemAvatar">
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSryt2zIsuLWBGnlbljN25G4eorGzIPJuDxN8EcJkqEUPbRYkZV"
              />
            </ListItemAvatar>
            <div className="item">
              <ListItemText className="Name" primary="Name" />
              <div>
                <Button variant="contained" color="secondary" className="Deletbutton">
                  un follow
                </Button>
              </div>
            </div>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem className="followersitem">
            <ListItemAvatar className="ListItemAvatar">
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSryt2zIsuLWBGnlbljN25G4eorGzIPJuDxN8EcJkqEUPbRYkZV"
              />
            </ListItemAvatar>
            <div className="item">
              <ListItemText className="Name" primary="Name" />
              <div>
                <Button variant="contained" color="secondary" className="Deletbutton">
                  un follow
                </Button>
              </div>
            </div>
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <List className="following">
          <ListItem className="followersitem">
            <ListItemAvatar className="ListItemAvatar">
              <Avatar alt="Remy Sharp" src="https://www.w3schools.com/bootstrap4/img_avatar6.png" />
            </ListItemAvatar>
            <div className="item">
              <ListItemText className="Name" primary="Name" />
              <div>
                <Button variant="contained" color="secondary" className="Deletbutton">
                  un follow
                </Button>
              </div>
            </div>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem className="followersitem">
            <ListItemAvatar className="ListItemAvatar">
              <Avatar alt="Remy Sharp" src="https://www.w3schools.com/bootstrap4/img_avatar6.png" />
            </ListItemAvatar>
            <div className="item">
              <ListItemText className="Name" primary="Name" />
              <div>
                <Button variant="contained" color="secondary" className="Deletbutton">
                  un follow
                </Button>
              </div>
            </div>
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem className="followersitem">
            <ListItemAvatar className="ListItemAvatar">
              <Avatar alt="Remy Sharp" src="https://www.w3schools.com/bootstrap4/img_avatar6.png" />
            </ListItemAvatar>
            <div className="item">
              <ListItemText className="Name" primary="Name" />
              <div>
                <Button variant="contained" color="secondary" className="Deletbutton">
                  un follow
                </Button>
              </div>
            </div>
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem className="followersitem">
            <ListItemAvatar className="ListItemAvatar">
              <Avatar alt="Remy Sharp" src="https://www.w3schools.com/bootstrap4/img_avatar6.png" />
            </ListItemAvatar>
            <div className="item">
              <ListItemText className="Name" primary="Name" />
              <div>
                <Button variant="contained" color="secondary" className="Deletbutton">
                  un follow
                </Button>
              </div>
            </div>
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </TabPanel>
    </div>
  );
}
