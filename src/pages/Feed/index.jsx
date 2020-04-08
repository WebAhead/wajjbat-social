import React from "react";
import FeedCard from "../../components/FeedCard";
import MainHeader from "../../components/MainHeader";
import MainFooter from "../../components/MainFooter";
import "./style.css";
import Link from "@material-ui/core/Link";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  getRequest
} from "../../utils/backEndFetch";

export default function Feed({
  setScrollToComments,
  isLoggedIn,
  setIsLoggedIn,
}) {
  const [indicator, setIndicator] = React.useState(true);
  const [posts, setPosts] = React.useState([]);

  const getPosts = (n) => {
    getRequest(`/nPosts?${n}`).then((response) => {
      setPosts(response.data);
      setIndicator(false);
    });
  };

  React.useEffect(() => {
    getPosts(10);
  }, []);

  return (
    <div>
      <MainHeader isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {indicator ? (
        <div className="indicator">
          <CircularProgress disableShrink />
        </div>
      ) : (
        <div className="feedCard">
          {posts.map((data, i) => (
            <FeedCard
              data={data}
              setScrollToComments={setScrollToComments}
              isLoggedIn={isLoggedIn}
            />
          ))}
        </div>
      )}
      <MainFooter isLoggedIn={isLoggedIn} />
    </div>
  );
}
