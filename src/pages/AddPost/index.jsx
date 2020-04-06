import React from 'react';
import NewPostHeader from './components/NewPostHeader';
import ImageAndCaption from './components/ImageAndCaption';
import NewPostBody from './components/NewPostBody';
import "./style.css";


export default function AddPost({ isLoggedIn }) {
  const [imgURL, setImgURL] = React.useState('');
  const [postCaption, setPostCaption] = React.useState(null);
  const [postTitle, setPostTitle] = React.useState(null);
  const [foodTags, setFoodTags] = React.useState({'Halal': false, 'Kasher': false, 'GlutenFree': false, 'Vegan': false, 'Vegetarian': false});
  const [howManyPeople, setHowManyPeople] = React.useState(1);
  const [difficulty, setDifficulty] = React.useState('Easy');
  const [time, setTime] = React.useState(0);
  const [ingredients, setIngredients] = React.useState({});
  const [howToPrepareSteps, setHowToPrepareSteps] = React.useState([]);
  const [shareState, setShareState] = React.useState(false);
  
  React.useEffect(() => {
    if (shareState) {
      //send all the data to a route to the backend
    }
  }, [shareState]);
  return (
    <div className='addPostWrapper'>
      <NewPostHeader shareState={shareState} setShareState={setShareState} />
      <ImageAndCaption setPostTitle={setPostTitle} setImgURL={setImgURL} setPostCaption={setPostCaption} />
      <NewPostBody
        foodTags={foodTags}
        setFoodTags={setFoodTags}
        howManyPeople={howManyPeople}
        setHowManyPeople={setHowManyPeople}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        time={time}
        setTime={setTime}
        ingredients={ingredients}
        setIngredients={setIngredients}
        howToPrepareSteps={howToPrepareSteps}
        setHowToPrepareSteps={setHowToPrepareSteps}
      />
    </div>
  );
}
