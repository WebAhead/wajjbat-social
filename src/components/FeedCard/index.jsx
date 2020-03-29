import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "../../components/CardHeader";
import CommentFeed from "../../components/CommentFeed";
import PostDetails from "../../components/PostDetails";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    backgroundColor: "linear-gradient(45deg, #f44336 30%, #b71c1c 90%)",
    boxShadow: "3px 2px 3px 2px rgba(255, 105, 135, .3)"
  },
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 60,
    backgroundColor: "linear-gradient(45deg, #f44336 30%, #b71c1c 90%)"
  },
  commentContainer: {
    display: "flex",
    justifyContent: "flex-start"
  },
  comment: {
    backgroundColor: "red",
    marginLeft: 10,
    top: 25
  }
}));

export default function FeedCard({userName,postTitle, isExpanded }) {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Card className={classes.root}>
        <CardHeader userName={userName} />
        <PostDetails postTitle={postTitle} isExpanded={isExpanded} />
        <div className={classes.commentContainer}>
          <Avatar aria-label="recipe" className={classes.comment}>
            Y
          </Avatar>
          <CommentFeed />
        </div>
      </Card>
    </div>
  );
}
