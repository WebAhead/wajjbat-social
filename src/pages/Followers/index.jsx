import './follow.css';
import React from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';
import Follow from '../../components/Follow';
export default function QueryParamsExample(isLoggedIn) {
  return (
    <Router>
      <QueryParamsDemo isLoggedIn={isLoggedIn} />
    </Router>
  );
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function QueryParamsDemo(isLoggedIn) {
  let query = useQuery();

  return (
    <div>
      <MainHeader />
      <br></br>
      <br></br>
      <br></br>
      <div>
        <ul className="barfollow">
          <Link className="Text" to="/followers?name=followers">
            followers
          </Link>

          <Link className="Text" to="/followers?name=following">
            following
          </Link>
        </ul>

        <Child name={query.get('name')} />
      </div>
      <MainFooter isLoggedIn={isLoggedIn} />
    </div>
  );
}

function Child({ name }) {
  return (
    <div>
      {name == 'following' ? (
        <Follow />
      ) : (
        <h3>
          The <code>followers</code> in the query string is &quot;followers &quot;
        </h3>
      )}
    </div>
  );
}
