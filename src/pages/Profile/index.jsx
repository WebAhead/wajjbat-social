import React from 'react';
import './profile.css';
import Button from '@material-ui/core/Button';
import MainHeader from '../../components/MainHeader';
import FeedCard from '../../components/FeedCard';
import MainFooter from '../../components/MainFooter';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

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
      <MainHeader />

      <div>
        <MainHeader />
        <div className="headerContainer">
          <div>
            <Button className="follow" variant="contained" disableElevation>
              followers
            </Button>
          </div>
          <a>
            <img
              className="profileimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5awDmi4At0iNdGyH7xWmHvkLYutIXqGzXFWQcjxakOrmjfj1I"
              alt="profileimg"
            ></img>
            <h3>Name</h3>
          </a>
          <div>
            <Button className="follow" variant="contained" disableElevation>
              following
            </Button>
          </div>
        </div>
        <div>
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
