import React from "react";
import "./style.css";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";

export default function NewPostBody({
  foodTags,
  setFoodTags,
  setHowManyPeople,
  setDifficulty,
  setIngredients,
  setHowToPrepareSteps
}) {
  //Variables
  const [state, setState] = React.useState(true);
  const foodTagOptions = ["Sweet", "Gluten-Free", "Cold"];
  //Helper functions
  const handleFoodTagChange = key => event =>
    setFoodTags({ ...foodTags, [key]: event.target.checked });
  const handlePeopleChange = event =>
    setHowManyPeople(event.target.value);
  const handleDifficultyChange = event =>
    setDifficulty(event.target.value);
  return (
    <div>
      <h3 className="addFoodTags">Add Food Tags</h3>
      <div className="foodTagsWrapper">
        {foodTagOptions.map(tag => (
          <div>
            <Switch checked={state.checkedA} onChange={handleFoodTagChange(tag)}></Switch>
            <label>{tag}</label>
          </div>
        ))}
      </div>
      <hr />
      <div className="peopleSection">
        <h3 className="howManyPeople">For How Many People?</h3>
        <input type="number" pattern='[0-9]' className="peopleQuantity" placeholder="0" onChange={handlePeopleChange}/>
      </div>
      <div className="difficultySection">
        <h3 className="difficultyTag">Difficulty</h3>
        <select className="difficultyInput" onChange={handleDifficultyChange}>
          <option value="Easy">Easy</option>
          <option value="Meduim">Meduim</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <hr />
      <div className="ingredientsSection">
        <h3 className="ingredients">Ingredients</h3>
        <i className="fas fa-plus-circle"></i>
        <input
          className="ingredientElement"
          placeholder="Enter an ingredient"
        />
        <input className="ingredientQuantity" placeholder="0" />
      </div>
      <hr />
      <div className="howToPrepareSection">
        <h3 className="howToPrepare">How To Prepare</h3>
        <i className="fas fa-plus-circle"></i>
        <input className="ingredientElement" placeholder="Your Steps" />
        <input className="ingredientQuantity" placeholder="Time" />
      </div>
      <hr className="noMarginHR" />
    </div>
  );
}
