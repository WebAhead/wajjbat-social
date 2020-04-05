import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './followers.css';
import Button from '@material-ui/core/Button';

export default function AlignItemsList() {
  return (
    <List className="list">
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSMDROMu2JXobcC5E8wtm4b2y16wLm9FwyQIOnT6IsSecrBvG7" />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <div className="line">
                <Typography component="span" className="inline" color="textPrimary">
                  Ali Connors
                  <div>
                    <Button variant="contained" className="unFollow">
                      Unfollow
                    </Button>
                  </div>
                </Typography>
              </div>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="data:image/jpeg;base64,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"
          />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography component="span" className="inline" color="textPrimary">
                Adeeli fsd
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography component="span" className="inline" color="textPrimary">
                dfsdf Confsdfors
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
