import React from 'react'
import ListField from '../../components/ListField'

export default function ViewPost() {
    const array1 = ["a", "b", "c", "e", "f", "g"];
    const array2 = ["Mix flour, baking powder, salt, and sugar In a medium-size mixing bowl or large glass measuring cup, whisk together your dry ingredients (or follow directions for premade pancake mix).", 
    "Mix milk, eggs, and oil In a separate bowl, whisk together the wet ingredients (milk, eggs, vegetable oil, or melted butter) until the egg is broken up (this will prevent overmixing in the next step).",
     "Mix dry ingredients with wet ingredients Add the wet ingredients to the bowl with the dry ingredients. Stir them"];

    return (
        <div>
            <ListField array={array1} type='ingredients_list' name='Ingredients'/>
            <ListField array={array2} type='htp_list' name='How to Prepare' addons='1 h 10 m 8 servings'/>
        </div>
    )
}
