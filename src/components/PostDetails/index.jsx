import React from "react";
import { Link, useHistory } from "react-router-dom";
import pancakeExample from "../../assets/images/pancakeExample.jpg";
import halal from "../../assets/logos/halal.ico";
import noGluten from "../../assets/logos/noGluten.ico";
import kasher from "../../assets/logos/kasher.jpg";
import vegan from "../../assets/logos/vegan.png";
import vegetarian from "../../assets/logos/vegetarian.png";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { postRequest } from "../../utils/backEndFetch";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  CloseReadMore: {
    transform: "rotate(180deg)",
    opacity: "0.8",
    marginLeft: 300,
    cursor: "pointer",
  },
  avatar: {
    backgroundColor: "red",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  logo: {
    width: 25,
    height: 25,
    marginLeft: 5,
  },
  readMore: {
    fontSize: 10,
    opacity: "0.8",
    display: "inline",
    margin: 0,
    cursor: "pointer",
  },
}));

export default function PostDetails({
  postData,
  isFavorite,
  isLiked,
  isExpanded,
  noIcon,
  noDesc,
  setScrollToComments,
  isLoggedIn,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [like, setLike] = React.useState(isLiked);
  const [favorite, setFavorite] = React.useState(isFavorite);
  const history = useHistory();
  const tags=[ halal,noGluten,kasher,vegan,vegetarian]
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const movesignin = () => {
    history.push("/signin");
  };

  const setAction = (path) => {
    postRequest(path, { post_id: postData._id }).then((response) => {
      path.includes("like") ? setLike(!like) : setFavorite(!favorite);
    });
  };

const firstParagraph= postData.caption.substring(0,100)+(postData.caption.length>100?'...':'');
const  secondParagraph = postData.caption.substring(100,postData.caption.length+1)

  return (
    <React.Fragment>
      <Link to="ViewPost" onClick={() => setScrollToComments(false)}>
        <CardMedia className={classes.media} image={pancakeExample} />
      </Link>
      <CardActions disableSpacing>
        {noIcon ? (
          <h5 style={{ marginTop: 0, marginBlockEnd: 10 }}>{postData.title}</h5>
        ) : (
          <React.Fragment>
            <IconButton
              aria-label="add to favorites"
              onClick={
                isLoggedIn
                  ? () => {
                      favorite
                        ? setAction("/unFavorite")
                        : setAction("/favorites");
                    }
                  : movesignin
              }
            >
              <FavoriteIcon color={favorite ? "secondary" : "action"} />
            </IconButton>
            <IconButton
              aria-label="like"
              onClick={
                isLoggedIn
                  ? () => {
                      like ? setAction("/unLike") : setAction("/likes");
                    }
                  : movesignin
              }
            >
              <ThumbUpIcon color={like ? "primary" : "action"} />
            </IconButton>
            <span>{postData.likes}</span>
            <IconButton
              aria-label="share"
              onClick={isLoggedIn ? () => 1 : movesignin}
            >
              <ShareIcon />
            </IconButton>
          </React.Fragment>
        )}
        {Object.entries(postData.tags).map((tag, i) => {

          if (tag[1]&&tags.length>i) {
            return <img
              className={classes.logo}
              src={tags[i]}
              alt={tag[0]}
              style={noIcon ? { width: 20, height: 20 } : {}}
            />;
          }
        })}
      </CardActions>

      {noDesc ? (
        ""
      ) : (
        <CardContent style={{ paddingTop: 0 }}>
          <h2 style={{ marginTop: 0, marginBlockEnd: 10 }}>{postData.title}</h2>
          <Typography variant="body2" color="textSecondary" component="p">
            {firstParagraph}
            {secondParagraph?expanded || isExpanded ? (
             {secondParagraph}
            ) : (
              <IconButton
                className={classes.expand}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="read more"
              >
                <h6 className={classes.readMore}>Read More...</h6>
              </IconButton>
            ):''}
          </Typography>
        </CardContent>
      )}
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
    </React.Fragment>
  );
}
