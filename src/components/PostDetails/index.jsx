import React from 'react';
import { Link } from 'react-router-dom';
import pancakeExample from '../../assets/images/pancakeExample.jpg';
import halal from '../../assets/logos/halal.ico';
import noGluten from '../../assets/logos/noGluten.ico';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  CloseReadMore: {
    transform: 'rotate(180deg)',
    opacity: '0.8',
    marginLeft: 300,
    cursor: 'pointer'
  },
  avatar: {
    backgroundColor: 'red'
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  logo: {
    width: 25,
    height: 25,
    marginLeft: 5
  },
  readMore: {
    fontSize: 10,
    opacity: '0.8',
    display: 'inline',
    margin: 0,
    cursor: 'pointer'
  }
}));

export default function PostDetails({ postTitle, isExpanded, noIcon, noDesc }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <React.Fragment>
      <Link to="ViewPost">
        <CardMedia className={classes.media} image={pancakeExample} />
      </Link>
      <CardActions disableSpacing>
        {noIcon ? (
          <h5 style={{ marginTop: 0, marginBlockEnd: 10 }}>{postTitle}</h5>
        ) : (
          <React.Fragment>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="like">
              <ThumbUpIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </React.Fragment>
        )}
        <img className={classes.logo} src={halal} alt="halal" style={noIcon ? { width: 20, height: 20 } : {}} />
        <img className={classes.logo} src={noGluten} alt="no gluten" style={noIcon ? { width: 20, height: 20 } : {}} />
      </CardActions>

      {noDesc ? (
        ''
      ) : (
        <CardContent style={{ paddingTop: 0 }}>
          <h2 style={{ marginTop: 0, marginBlockEnd: 10 }}>{postTitle}</h2>
          <Typography variant="body2" color="textSecondary" component="p">
            Tall and fluffy. These pancakes are just right. Topped with strawberries and whipped creatm, they are impossible to resist.
            {expanded || isExpanded ? (
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
              <IconButton className={classes.expand} onClick={handleExpandClick} aria-expanded={expanded} aria-label="read more">
                <h6 className={classes.readMore}>Read More...</h6>
              </IconButton>
            )}
          </Typography>
        </CardContent>
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <IconButton className={classes.CloseReadMore} onClick={handleExpandClick} aria-expanded={expanded} aria-label="To The Top">
          <ExpandMoreIcon />
        </IconButton>
      </Collapse>
    </React.Fragment>
  );
}
