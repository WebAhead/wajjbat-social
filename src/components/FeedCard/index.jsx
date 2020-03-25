import React from "react";
import pancakeExample from "../../assets/images/pancakeExample.jpg";
import halal from "../../assets/logos/halal.ico";
import noGluten from "../../assets/logos/noGluten.ico";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "../../components/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CommentFeed from "../../components/CommentFeed";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    backgroundColor: 'linear-gradient(45deg, #f44336 30%, #b71c1c 90%)',
    boxShadow: '3px 2px 3px 2px rgba(255, 105, 135, .3)'
  },
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: 'linear-gradient(45deg, #f44336 30%, #b71c1c 90%)',
  },
  commentContainer: {
    display: "flex",
    justifyContent: "flex-start"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  CloseReadMore: {
    transform: "rotate(180deg)",
    opacity: "0.8",
    marginLeft: 300,
    cursor: "pointer"
  },
  avatar: {
    backgroundColor: "red"
  },
  logoContainer: {
    display: "flex",
    justifyContent: "flex-start"
  },
  logo: {
    width: 25,
    height: 25,
    marginLeft: 15
  },
  readMore: {
    fontSize: 10,
    opacity: "0.8",
    display: "inline",
    margin: 0,
    cursor: "pointer"
  },
  comment: {
    backgroundColor: "red",
    marginLeft: 10,
    top: 25
  },
  commentFeed: {}
}));

export default function FeedCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.mainContainer}>
      <Card className={classes.root}>
        <CardHeader title="Fluffy Pancakes" subheader="Fluffy Pancakes" />

        <CardMedia className={classes.media} image={pancakeExample} />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="like">
            <ThumbUpIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <div className={classes.logoContainer}>
          <img className={classes.logo} src={halal} alt="halal" />
          <img className={classes.logo} src={noGluten} alt="no gluten" />
        </div>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Tall and fluffy. These pancakes are just right. Topped with
            strawberries and whipped cream, they are impossible to resist.
            {expanded ? (
              ` Lorem Ipsum is simply dummy text of 
                the printing and typesetting industry. 
                Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of 
                type and scrambled it to make a type specimen 
                book. It has survived not only five centuries, 
                 also the leap into electronic typesetting, 
                 remaining essentially unchanged. It was 
                 popularised in the 1960s with the release of 
                 etraset sheets containing Lorem Ipsum passages, 
                 and more recently with desktop publishing 
                 software like Aldus PageMaker including versions 
                 of Lorem Ipsum.`
            ) : (
              <IconButton
                className={classes.expand}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="read more"
              >
                <h6 className={classes.readMore}>Read More...</h6>
              </IconButton>
            )}
          </Typography>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <IconButton
            className={classes.CloseReadMore}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="To The Top"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Collapse>
        <div className={classes.commentContainer}>
          <Avatar aria-label="recipe" className={classes.comment}>
            Y
          </Avatar>
          <CommentFeed className={classes.commentFeed} />
        </div>
      </Card>
    </div>
  );
}
