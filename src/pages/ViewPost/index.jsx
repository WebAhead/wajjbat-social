import React from "react";
import { animateScroll } from "react-scroll";
import ListField from "../../components/ListField";
import timePng from "../../assets/images/time.png";
import servingPng from "../../assets/images/serving.png";
import PostDetails from "../../components/PostDetails";
import CommentSection from "../../components/CommentSection";
import CardHeader from "../../components/CardHeader";
import MainHeader from "../../components/MainHeader";
import MainFooter from "../../components/MainFooter";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getRequest } from "../../utils/backEndFetch";

import "./style.css";

export default function ViewPost({
  currentPostInfo,
  scrollToComments,
  isLoggedIn,
}) {
  const [indicator, setIndicator] = React.useState(true);
  const [allComments, setAllComments] = React.useState([]);

  const ingredients = Object.entries(currentPostInfo.postData.ingredients).map(
    (ingredient) => `${ingredient[1]} ${ingredient[0]}`
  );

  const preparationSteps = currentPostInfo.postData.howtoprepare;

  const addons = [
    {
      title: "Preparation",
      info: currentPostInfo.postData.timetoprepare,
      image: timePng,
    },
    {
      title: "Serving",
      info: `${currentPostInfo.postData.howmanypeople} servings`,
      image: servingPng,
    },
  ];

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      smooth: "easeInOutQuint",
      containerId: "commentSection",
    });
  };

  if (scrollToComments) scrollToBottom();

  const getAllComments= () => {
    getRequest(`/comments?post_id=${currentPostInfo.postData._id}`).then((response) => {
      setAllComments(response.data);
      setIndicator(false);
    });
  };

  React.useEffect(() => {
    getAllComments();
  }, [currentPostInfo]);

  return (
    <div>
      <MainHeader />
      <div className="postView">
        <CardHeader
          userData={currentPostInfo.userData}
          isFollowed={currentPostInfo.isFollowed}
          isLoggedIn={isLoggedIn}
        />
        <PostDetails
          postData={currentPostInfo.postData}
          isFavorite={currentPostInfo.isFavorite}
          isLiked={currentPostInfo.isLiked}
          isExpanded
          isLoggedIn={isLoggedIn}
        />
        <ListField
          recipeInfo={ingredients}
          type="ingredients_list"
          name="Ingredients"
        />
        <ListField
          recipeInfo={preparationSteps}
          type="htp_list"
          name="How to Prepare"
          addons={addons}
          numerical
        />
      </div>

      <div
        className="commentSection"
        id="commentSection"
        style={{ paddingBottom: 60 }}
      >
        {indicator ? (
        <div className="indicator">
          <CircularProgress disableShrink />
        </div>
      ) : (
        <CommentSection comments={allComments} postId={currentPostInfo.postData._id} reply title scrollToComments={scrollToComments} />
      )}
        </div>

      <MainFooter isLoggedIn={isLoggedIn} />
    </div>
  );
}
