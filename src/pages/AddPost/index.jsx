import React from "react";
import NewPostHeader from "./components/NewPostHeader";
import NewPostFooter from "./components/NewPostFooter";
import ImageAndCaption from "./components/ImageAndCaption";
import NewPostBody from "./components/NewPostBody";

export default function AddPost() {
  const [imgURL, setImgURL] = React.useState('');
  const [postCaption, setPostCaption] = React.useState(null);
  const [foodTags, setFoodTags] = React.useState(null);
  const [howManyPeople, setHowManyPeople] = React.useState(null);
  const [difficulty, setDifficulty] = React.useState('Easy');
  const [time, setTime] = React.useState(null);
  const [ingredients, setIngredients] = React.useState({});
  const [howToPrepareSteps, setHowToPrepareSteps] = React.useState([]);
  //The newPostCheckBox holds the food options and their state, if the option doesnt 
  //appear in the newPostCheckBox it means its false.
  const [newPostCheckBox, setNewPostCheckBox] = React.useState(null);
  return (
    <div>
      <NewPostHeader />
      <ImageAndCaption setImgURL={setImgURL} setPostCaption={setPostCaption} />
      <NewPostBody
        foodTags={foodTags}
        setFoodTags={setFoodTags}
        setHowManyPeople={setHowManyPeople}
        setDifficulty={setDifficulty}
        setTime={setTime}
        ingredients={ingredients}
        setIngredients={setIngredients}
        howToPrepareSteps={howToPrepareSteps}
        setHowToPrepareSteps={setHowToPrepareSteps}
      />
      <NewPostFooter newPostCheckBox={newPostCheckBox} setNewPostCheckBox={setNewPostCheckBox}/>
    </div>
  );
}
