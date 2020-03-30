import React from "react";
import NewPostHeader from "./components/NewPostHeader";
import NewPostFooter from "./components/NewPostFooter";
import ImageAndCaption from "./components/ImageAndCaption";
import NewPostBody from "./components/NewPostBody";

export default function AddPost() {
  const [imgURL, setImgURL] = React.useState('');
  const [postCaption, setPostCaption] = React.useState(null);
  const [foodTags, setFoodTags] = React.useState({'Sweet': false, 'Gluten-Free': false, 'Cold': false});
  const [howManyPeople, setHowManyPeople] = React.useState(1);
  const [difficulty, setDifficulty] = React.useState('Easy');
  const [time, setTime] = React.useState(0);
  const [ingredients, setIngredients] = React.useState({});
  const [howToPrepareSteps, setHowToPrepareSteps] = React.useState([]);
  //The newPostCheckBox holds the food options and their state, if the option doesnt 
  //appear in the newPostCheckBox it means its false.
  const [newPostCheckBox, setNewPostCheckBox] = React.useState({'Halal': true, 'Vegan': false, 'Kosher': false, 'Spicy': false});
  const [shareState, setShareState] = React.useState(false);

  React.useEffect(() => {
    if (shareState) {
       //send all the data to a route to the backend
    }      
  }, [shareState]);
  return (
    <div>
      <NewPostHeader shareState={shareState} setShareState={setShareState}/>
      <ImageAndCaption setImgURL={setImgURL} setPostCaption={setPostCaption} />
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
      <NewPostFooter newPostCheckBox={newPostCheckBox} setNewPostCheckBox={setNewPostCheckBox}/>
    </div>
  );
}
