import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '../../components/CardHeader';
import PostDetails from '../../components/PostDetails';
import CommentSection from '../../components/CommentSection';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    backgroundColor: 'linear-gradient(45deg, #f44336 30%, #b71c1c 90%)',
    boxShadow: '0 3px 5px 5px rgba(33, 181, 162, 0.25)'
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 60,
    backgroundColor: 'linear-gradient(45deg, #f44336 30%, #b71c1c 90%)'
  },
  commentContainer: {
    display: 'flex',
    justifyContent: 'flex-start'
  }
}));

export default function FeedCard({ data, isExpanded, setCurrentPostInfo,setScrollToComments, isLoggedIn }) {
  const classes = useStyles();
  const viewPostData=(scroll)=>{
    setCurrentPostInfo({ postData:data.post_info, userData:data.user_info, isFavorite:data.is_favorite, isLiked:data.is_liked,isFollowed:data.is_followed })
    setScrollToComments(scroll)
  }
  return (
    <div className={classes.mainContainer}>
      <Card className={classes.root}>
        <CardHeader userData={data.user_info} isFollowed={data.is_followed} isLoggedIn={isLoggedIn} />
        <PostDetails postData={data.post_info} isFavorite={data.is_favorite} isLiked={data.is_liked} viewPostData={viewPostData} isExpanded={isExpanded} setScrollToComments={setScrollToComments} isLoggedIn={isLoggedIn} />
        <Link to="ViewPost" onClick={() =>viewPostData(true)}>
          <CommentSection comments={data.latest_comment}/>
        </Link>
      </Card>
    </div>
  );
}
