import React from 'react';
import './profile.css';
import Button from '@material-ui/core/Button';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import PostDetails from '../../components/PostDetails';
import {
  getRequest
} from "../../utils/backEndFetch";

export default function QueryParamsExample({ isLoggedIn }) {
  return (
    <Router>
      <QueryParamsDemo isLoggedIn={isLoggedIn} />
    </Router>
  );
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryParamsDemo({ isLoggedIn }) {
  let query = useQuery();

  return (
    <div>
      <MainHeader />
      <div>
        <div className="headerContainer">
          <div>
            <Button className="follow" variant="contained" href="/followers?name=followers">
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
      <MainFooter isLoggedIn={isLoggedIn} />
    </div>
  );
}

function Child({ name }) {
  return (
    <div className="postContainer">
      {name == 'Favorite' ? (
        <h3></h3>
      ) : (
        [...Array(10)].map(() => (
          <div className="cardPost">
            <PostDetails postTitle="fluffy pancake" noIcon noDesc />
          </div>
        ))
      )}
    </div>
  );
}
