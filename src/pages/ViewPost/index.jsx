import React from 'react';
import { animateScroll } from 'react-scroll';
import ListField from '../../components/ListField';
import timePng from '../../assets/images/time.png';
import servingPng from '../../assets/images/serving.png';
import PostDetails from '../../components/PostDetails';
import CommentSection from '../../components/CommentSection';
import CardHeader from '../../components/CardHeader';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';

import './style.css';

export default function ViewPost({ scrollToComments, isLoggedIn }) {
  const ingredients = ['1 1/2 pounds ground beef', '1 egg', '1 onion chopped', '1 cup milk'];
  const preparationSteps = [
    'Mix flour, baking powder, salt, and sugar In a medium-size mixing bowl or large glass measuring cup, whisk together your dry ingredients (or follow directions for premade pancake mix).',
    'Mix milk, eggs, and oil In a separate bowl, whisk together the wet ingredients (milk, eggs, vegetable oil, or melted butter) until the egg is broken up (this will prevent overmixing in the next step).',
    'Mix dry ingredients with wet ingredients Add the wet ingredients to the bowl with the dry ingredients. Stir them'
  ];
  const addons = [
    { title: 'Preparation', info: '1 h 10 m', image: timePng },
    { title: 'Serving', info: '8 servings', image: servingPng }
  ];

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      smooth: 'easeInOutQuint',
      containerId: 'commentSection'
    });
  };
  if (scrollToComments) scrollToBottom();

  return (
    <div>
      <MainHeader />
      <div className="postView">
        <CardHeader userName="Yousef Rizik" />
        <PostDetails postTitle="Fluffy Pancakes" isExpanded />
        <ListField recipeInfo={ingredients} type="ingredients_list" name="Ingredients" />
        <ListField recipeInfo={preparationSteps} type="htp_list" name="How to Prepare" addons={addons} numerical />
      </div>

      <div className="commentSection" id="commentSection" style={{ paddingBottom: 60 }}>
        <CommentSection reply title scrollToComments={scrollToComments} />
      </div>

      <MainFooter isLoggedIn={isLoggedIn} />
    </div>
  );
}
