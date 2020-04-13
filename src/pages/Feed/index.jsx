import React from "react";
import FeedCard from "../../components/FeedCard";
import MainHeader from "../../components/MainHeader";
import MainFooter from "../../components/MainFooter";
import "./style.css";
import Link from "@material-ui/core/Link";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getRequest } from "../../utils/backEndFetch";

export default function Feed({
  setCurrentPostInfo,
  setScrollToComments,
  isLoggedIn,
  setIsLoggedIn,
}) {
  const [indicator, setIndicator] = React.useState(true);
  const [posts, setPosts] = React.useState([]);

  const getPosts = (n) => {
    getRequest(`/nPosts?n=${n}`).then((response) => {
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
          {posts ? (
            posts.map((data, i) => (
              <FeedCard
                setCurrentPostInfo={setCurrentPostInfo}
                data={data}
                setScrollToComments={setScrollToComments}
                isLoggedIn={isLoggedIn}
              />
            ))
          ) : (
            <div className="indicator">
              <h3>there is no posts yet</h3>{" "}
            </div>
          )}
        </div>
      )}

      <MainFooter isLoggedIn={isLoggedIn} />
    </div>
  );
}
