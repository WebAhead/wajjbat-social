import React from 'react'
import ListField from '../../components/ListField'
import timePng from "../../assets/images/time.png";
import servingPng from "../../assets/images/serving.png";

export default function ViewPost() {
    const ingredients = ["1 1/2 pounds ground beef","1 egg","1 onion chopped","1 cup milk"];
    const preparationSteps = ["Mix flour, baking powder, salt, and sugar In a medium-size mixing bowl or large glass measuring cup, whisk together your dry ingredients (or follow directions for premade pancake mix).", 
    "Mix milk, eggs, and oil In a separate bowl, whisk together the wet ingredients (milk, eggs, vegetable oil, or melted butter) until the egg is broken up (this will prevent overmixing in the next step).",
     "Mix dry ingredients with wet ingredients Add the wet ingredients to the bowl with the dry ingredients. Stir them"];
     const addons=[{title:'Preparation',info:'1 h 10 m',image:timePng},{title:'Serving',info:'8 servings',image:servingPng}]
    return (
        <div>
            <ListField recipeInfo={ingredients} type='ingredients_list' name='Ingredients'/>
            <ListField recipeInfo={preparationSteps} type='htp_list' name='How to Prepare' addons={addons}  numerical/>
        </div>
    )
}
