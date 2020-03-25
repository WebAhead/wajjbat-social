import React from 'react';
import './style.css';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';


export default function NewPostBody() {
    const [state, setState] = React.useState(true);

    const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
      <div>
        <h3 className="addFoodTags">Add Food Tags</h3>
        <Switch checked={state.checkedA} onChange={handleChange}
        /> Kosher
        <Switch checked={state.checkedA} onChange={handleChange}
        /> Gluten-Free
        <Switch checked={state.checkedA} onChange={handleChange}
        /> Halal
        <hr/>
        <div className="peopleSection">
          <h3 className="howManyPeople">For How Many People?</h3>
          <input className="peopleQuantity" />
        </div>
        <hr/>
        <div className="ingredientsSection">
          <h3 className="ingredients">Ingredients</h3>
          <i className="fas fa-plus-circle"></i>
          <input className="ingredientElement" placeholder="Enter an ingredient"/>
          <input className="ingredientQuantity" placeholder="0"/>
        </div>
        <hr/>
        <div className="howToPrepareSection">
          <h3 className="howToPrepare">How To Prepare</h3>
          <i className="fas fa-plus-circle"></i>
          <input className="ingredientElement" placeholder="Your Steps"/>
          <input className="ingredientQuantity" placeholder="Time"/>
        </div>
        </div>

    )
}
