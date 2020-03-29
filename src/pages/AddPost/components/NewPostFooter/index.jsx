import React from "react";
import "./style.css";

export default function Footer({ newPostCheckBox, setNewPostCheckBox }) {
  const foodOptions = ['Halal', 'Vegan', 'Kosher', 'Spicy'];
  const changeFoodOption = key => event =>
    setNewPostCheckBox({ ...newPostCheckBox, [key]: event.target.checked });

  return (
    <div className="newPostFooter">
      {foodOptions.map(option => (
        <div className="checkbox">
          <input
            type="checkbox"
            id={`checkBox${option}`}
            onChange={changeFoodOption(option)}
          />
          <label for={`checkBox${option}`}>
            <span className="foodOption">{option}</span>
          </label>
        </div>
      ))}
    </div>
  );
}
