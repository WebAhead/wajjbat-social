import React from "react";
import "./style.css";

export default function Footer({ newPostCheckBox, setNewPostCheckBox }) {
  const changeFoodOption = key => event =>
    setNewPostCheckBox({ ...newPostCheckBox, [key]: event.target.checked });

  return (
    <div className="newPostFooter">
      {Object.keys(newPostCheckBox).map(option => (
        <div className="checkbox">
          <input
            type="checkbox"
            checked={newPostCheckBox[option]}
            id={`checkBox${option}`}
            onChange={changeFoodOption(option)}
          />
          <label htmlFor={`checkBox${option}`}>
            <span className="foodOption">{option}</span>
          </label>
        </div>
      ))}
    </div>
  );
}
