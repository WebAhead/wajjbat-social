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
      <div className="headerContainer">
        <div className="follow">
          <h2>followers</h2>
        </div>
        <a>
          <img
            className="profileimg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5awDmi4At0iNdGyH7xWmHvkLYutIXqGzXFWQcjxakOrmjfj1I"
            alt="profileimg"
          ></img>
          <h3>Name</h3>
        </a>
        <div className="follow">
          <h2>following</h2>
        </div>
      </div>
      <div className="textdescription  ">
        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="textdescription" />
      </div>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="My Post" {...a11yProps(0)} />
            <Tab label="Favorites " {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div className="postimg"></div>
          <img
            className="post"
            src="https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Peanut-butter-pancakes-78d1366.jpg?quality=90&resize=768%2C574"
            alt="postimg"
          ></img>
          <img
            className="post"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVwC1ONsnfndTuWSOCmSlyPyZ6cQY77nuyVcHa_7cWGdA8ZJ-c"
            alt="postimg"
          ></img>
          <img
            className="post"
            src="https://theloungeseuk.b-cdn.net/wp-content/uploads/2019/09/07_24_19_Loungers_WinterMenuSocial_ChickenChorizoPannini-500x280.jpg"
            alt="postimg"
          ></img>
          <img
            className="post"
            src="https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Peanut-butter-pancakes-78d1366.jpg?quality=90&resize=768%2C574"
            alt="postimg"
          ></img>
          <img
            className="post"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVwC1ONsnfndTuWSOCmSlyPyZ6cQY77nuyVcHa_7cWGdA8ZJ-c"
            alt="postimg"
          ></img>
          <img
            className="post"
            src="https://theloungeseuk.b-cdn.net/wp-content/uploads/2019/09/07_24_19_Loungers_WinterMenuSocial_ChickenChorizoPannini-500x280.jpg"
            alt="postimg"
          ></img>
          <img
            className="post"
            src="https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Peanut-butter-pancakes-78d1366.jpg?quality=90&resize=768%2C574"
            alt="postimg"
          ></img>
          <img
            className="post"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVwC1ONsnfndTuWSOCmSlyPyZ6cQY77nuyVcHa_7cWGdA8ZJ-c"
            alt="postimg"
          ></img>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </div>
    </div>
  );
}
