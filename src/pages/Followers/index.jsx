import './follow.css';
import React from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';

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
          The <code>followers</code> in the query string is &quot;followers &quot;
        </h3>
      )}
    </div>
  );
}
