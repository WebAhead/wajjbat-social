import React from 'react';
import FeedCard from '../../components/FeedCard';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';
import './style.css';
import Link from '@material-ui/core/Link';

export default function Feed() {
  return (
    <div>
      <MainHeader />
      <div className="feedCard">
        <FeedCard />
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
      <MainFooter />
    </div>
  );
}
