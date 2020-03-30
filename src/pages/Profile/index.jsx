import React from 'react';
import './profile.css';
import Button from '@material-ui/core/Button';
import MainHeader from '../../components/MainHeader';
import FeedCard from '../../components/FeedCard';
import MainFooter from '../../components/MainFooter';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import Feed from '../Feed';

export default function QueryParamsExample() {
  return (
    <Router>
      <QueryParamsDemo />
    </Router>
  );
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryParamsDemo() {
  let query = useQuery();

  return (
    <div>
      <div>
        <div className="headerContainer">
          <div>
            <Button className="follow" variant="contained" href="/followers?name=followers">
              followers
            </Button>
          </div>
          <div>
            <Button className="follow" variant="contained" href="/followers?name=following">
              following
            </Button>
          </div>
        </div>

        <ul className="tabs">
          <Link className="text" to="/profile?name=MyPost">
            MyPost
          </Link>

          <Link className="text" to="/profile?name=Favorite">
            Favorite
          </Link>
        </ul>

        <Child name={query.get('name')} />
      </div>
      <MainFooter />
    </div>
  );
}

function Child({ name }) {
  return (
    <div>
      {name ? (
        <h3>
          The <code>name</code> in the query string is &quot;{name}
          &quot;
        </h3>
      ) : (
        <h3>
          The <code>MyPost</code> in the query string is &quot; MyPost &quot;
        </h3>
      )}
    </div>
  );
}
