import React from 'react';
import './profile.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import MainHeader from '../../components/MainHeader';
import FeedCard from '../../components/FeedCard';
import MainFooter from '../../components/MainFooter';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <MainHeader />

      <div>
        <MainHeader />
        <div className="headerContainer">
          <div>
            <Button className="follow" variant="contained" disableElevation>
              followers
            </Button>
          </div>
          <a>
            <img
              className="profileimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5awDmi4At0iNdGyH7xWmHvkLYutIXqGzXFWQcjxakOrmjfj1I"
              alt="profileimg"
            ></img>
            <h3>Name</h3>
          </a>
          <div>
            <Button className="follow" variant="contained" disableElevation>
              following
            </Button>
          </div>
        </div>
        <div>
          <TextareaAutosize className="textdescription" aria-label="minimum height" rowsMin={3} placeholder="textdescription" />
        </div>

        <AppBar position="static">
          <Tabs className="tabs" centered value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab className="tab" label="My Post" {...a11yProps(0)} />
            <Tab className="tab" label="Favorites " {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div className="postimg">
            <div className="feedCard">
              <FeedCard className="" />
              <FeedCard />
              <FeedCard />
              <FeedCard />
              <FeedCard />
              <FeedCard />
              <FeedCard />
              <FeedCard />
              <FeedCard />
              <FeedCard />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FeedCard />
        </TabPanel>
      </div>
      <MainFooter />
    </div>
  );
}
