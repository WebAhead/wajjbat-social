import React from 'react';
import FeedCard from '../../components/FeedCard';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';
import './style.css';
import Link from '@material-ui/core/Link';

export default function Feed({ setScrollToComments, isLoggedIn, setisLoggedIn }) {
  return (
    <div>
      <MainHeader isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
      <div className="feedCard">
        {[...Array(10)].map(() => (
          <FeedCard userName="Yousef Rizik" postTitle="Fluffy Pancakes" setScrollToComments={setScrollToComments} isLoggedIn={isLoggedIn} />
        ))}
      </div>
      <MainFooter isLoggedIn={isLoggedIn} />
    </div>
  );
}
