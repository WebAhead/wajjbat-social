import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./style.css";


function RenderRow({ recipeInfo }) {
  return recipeInfo.map((obj, i) => (
    <div className="list" key={i}>
      <ListItem button>
        <li>
          <ListItemText primary={obj} />
        </li>
      </ListItem>
    </div>
  ));
}

export default function ListField({ recipeInfo, type, name, addons, numerical }) {
  return (
    <div className="main_div">
      <h2>{name}:</h2>
      {addons ? (
        <div className="addons">
          {addons.map((obj,i)=>
          <div key={i}>
            <img src={obj.image}></img>
            <hr />
            <h3>{obj.title}: </h3>
            <span>{obj.info}</span>
          </div>
          )}
        </div>
      ) : (
        ""
      )}
      {numerical ? (
        <ol className={type}>
          <RenderRow recipeInfo={recipeInfo} />
        </ol>
      ) : (
        <ul className={type}>
          <RenderRow recipeInfo={recipeInfo} />
        </ul>
      )}
    </div>
  );
}
