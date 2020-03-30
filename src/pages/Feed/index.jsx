import React from 'react';
import FeedCard from '../../components/FeedCard';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';
import './style.css';
import Link from '@material-ui/core/Link';

export default function Feed({ setScrollToComments }) {
  return (
    <div>
      <MainHeader />
      <div className="feedCard">
        {[...Array(10)].map(() => (
          <FeedCard userName="Yousef Rizik" postTitle="Fluffy Pancakes" setScrollToComments={setScrollToComments} />
        ))}
      </div>
      <MainFooter />
    </div>
  );
}
