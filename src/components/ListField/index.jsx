import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./style.css";

function RenderRow({ obj }) {
  return (
    <ListItem button>
      <ListItemText primary={`- ${obj}`} />
    </ListItem>
  );
}

export default function ListField({ array, type, name, addons }) {
  return (
    <fieldset className="fieldset_main">
      <legend>
        <h1>{name}:</h1>
      </legend>
      {addons ? (
        <div class="addons">
          {" "}
          <h2>{addons}</h2>
        </div>
      ) : (
        ""
      )}
      <div className={type}>
        {array.map((obj, i) => (
          <div className="list">
            <RenderRow obj={obj} key={i} />
          </div>
        ))}
      </div>
    </fieldset>
  );
}
