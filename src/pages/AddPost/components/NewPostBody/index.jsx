import React from "react";
import "./style.css";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import halalIcon from "../../../../assets/logos/halal.ico";
import kasherIcon from "../../../../assets/logos/kasher.jpg";
import glutenFreeIcon from "../../../../assets/logos/noGluten.ico";
import vegetarianIcon from "../../../../assets/logos/vegetarian.png";
import veganIcon from "../../../../assets/logos/vegan.png";
import Autosuggest from "react-autosuggest";
import optionalFoodTags from "../../FoodTags.json";

export default function NewPostBody({
  foodTags,
  setFoodTags,
  howManyPeople,
  setHowManyPeople,
  difficulty,
  setDifficulty,
  time,
  setTime,
  ingredients,
  setIngredients,
  howToPrepareSteps,
  setHowToPrepareSteps
}) {
  //Variables and states
  const tagsIcons = {
    Halal: halalIcon,
    Kasher: kasherIcon,
    GlutenFree: glutenFreeIcon,
    Vegetarian: vegetarianIcon,
    Vegan: veganIcon
  };
  const [autoCompleteState, setAutoCompleteState] = React.useState({
    value: "",
    suggestions: []
  });
  const [ingredientQuantity, setIngredientQuantity] = React.useState("0");
  const [ingredientName, setIngredientName] = React.useState("");
  const [stepText, setStepText] = React.useState("");

  //Helper functions:
  //Food tags functions.
  const handleFoodTagChange = key => event => {
    setFoodTags({ ...foodTags, [key]: event.target.checked });
  };
  const handleAddTags = key => {
    onSuggestionsClearRequested();
    setFoodTags({ ...foodTags, [key]: true });
  };
  const deleteFoodTag = key => event => {
    delete foodTags[key];
    setFoodTags({ ...foodTags });
  };

  //People, difficulty and time functions.
  const handlePeopleChange = event => setHowManyPeople(event.target.value);
  const handleDifficultyChange = event => setDifficulty(event.target.value);
  const handleTimeChange = event => setTime(event.target.value);

  //Ingredients functions.
  const handleIngredientQuantity = event =>
    setIngredientQuantity(event.target.value);
  const handleIngredientName = event => setIngredientName(event.target.value);
  const handleIngredients = event =>
    setIngredients({ ...ingredients, [ingredientName]: ingredientQuantity });
  const deleteIngredient = key => event => {
    delete ingredients[key];
    setIngredients({ ...ingredients });
  };

  //How to prepare functions.
  const handleStepText = event => setStepText(event.target.value);
  const handleSteps = event =>
    setHowToPrepareSteps([...howToPrepareSteps, stepText]);
  const deleteStep = key => event => {
    var index = howToPrepareSteps.indexOf(key);
    if (index !== -1) {
      howToPrepareSteps.splice(index, 1);
      setHowToPrepareSteps([...howToPrepareSteps]);
    }
  };

  //Auto complete functions.
  const { value, suggestions } = autoCompleteState;

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : optionalFoodTags.filter(
          foodtag =>
            foodtag.tag.toLowerCase().slice(0, inputLength) === inputValue
        );
  };
  const renderSuggestion = suggestion => {
    return (
    <div>
    <i className="fas fa-plus-circle" onClick={() => handleAddTags(suggestion.tag)}></i>
    <label>{suggestion.tag}</label>
    </div>
    )
  };
  const onChange = (event, { newValue }) => {
    setAutoCompleteState({
      ...autoCompleteState,
      value: event.target.value
    });
  };
  const onSuggestionsFetchRequested = ({ value }) => {
    setAutoCompleteState(prevAutoCompleteState => ({
      ...prevAutoCompleteState,
      suggestions: getSuggestions(value)
    }));
  };
  const onSuggestionsClearRequested = () => {
    setAutoCompleteState(prevAutoCompleteState => ({
      ...prevAutoCompleteState,
      suggestions: []
    }));
  };

  const inputProps = {
    placeholder: "Enter Other Tags",
    value: autoCompleteState.value,
    onChange: onChange,
    style: {
      marginTop: '10px',
      marginLeft: '10px'
    }
  };

  return (
    <div>
      <h3 className="addFoodTags">Add Food Tags</h3>
      <div className="constTagsWrapper">
        {Object.keys(foodTags)
          .slice(0, 5)
          .map(tag => (
            <div className="constTagItem">
              <Switch
                checked={foodTags[tag]}
                onChange={handleFoodTagChange(tag)}
              ></Switch>
              {tag}{" "}
              <img className="newPostIcons" src={tagsIcons[tag]} alt={tag} />
            </div>
          ))}
      </div>
      <div className="foodTagsInput">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>
        <div className="varTagsWrapper">
          {Object.keys(foodTags)
            .slice(5, foodTags.length)
            .map(tag => (
              <li className="displayingFoodTags">
                <i
                  className="fas fa-trash-alt deleteTag"
                  onClick={deleteFoodTag(tag)}
                ></i>
                <label>{tag}</label>
              </li>
            ))}
        </div>
      <hr />

      <div className="peopleSection">
        <h3 className="howManyPeople">For How Many People?</h3>
        <input
          type="number"
          pattern="[0-9]"
          className="peopleQuantity"
          value={howManyPeople}
          onChange={handlePeopleChange}
        />
      </div>
      <div className="difficultySection">
        <h3 className="difficultyTag">Difficulty</h3>
        <select className="difficultyInput" onChange={handleDifficultyChange}>
          {/* In case you want to add options, add them here, and the default state can be changed in AddPost index */}
          <option selected={difficulty == "Easy"} value="Easy">
            Easy
          </option>
          <option selected={difficulty == "Meduim"} value="Meduim">
            Meduim
          </option>
          <option selected={difficulty == "Hard"} value="Hard">
            Hard
          </option>
        </select>
      </div>
      <div className="timeSection">
        <h3 className="timeTag">How long it takes to prepare?</h3>
        <input
          className="timeQuantity"
          value={time}
          onChange={handleTimeChange}
        />
      </div>
      <hr />

      <div className="ingredientsSection">
        <h3 className="ingredients">Ingredients</h3>
        <i className="fas fa-plus-circle" onClick={handleIngredients}></i>
        <input
          className="ingredientElement"
          placeholder="Enter an ingredient"
          onChange={handleIngredientName}
        />
        <input
          className="ingredientQuantity"
          placeholder="0"
          onChange={handleIngredientQuantity}
        />
        <ul>
          {Object.entries(ingredients).map(ingredient => (
            <li className="displayingListIngredients">
              <i
                className="fas fa-trash-alt deleteIngredient"
                onClick={deleteIngredient(ingredient[0])}
              ></i>
              {ingredient[1]} {ingredient[0]}
            </li>
          ))}
        </ul>
      </div>
      <hr />

      <div className="howToPrepareSection">
        <h3 className="howToPrepare">How To Prepare</h3>
        <i className="fas fa-plus-circle" onClick={handleSteps}></i>
        <input
          className="stepElement"
          placeholder="Your Steps"
          onChange={handleStepText}
        />
        <ol>
          {howToPrepareSteps.map(step => (
            <li className="displayingListSteps">
              {step}
              <i
                className="fas fa-trash-alt deleteStep"
                onClick={deleteStep(step)}
              ></i>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
