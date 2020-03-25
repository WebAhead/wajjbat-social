import React from "react";
import "./style.css";
import TextField from "@material-ui/core/TextField";

export default function ImageCaption() {
  const [imgFile, setImgFile] = React.useState({ file: null });
  const [iconClass, setIconClass] = React.useState(
    "fas fa-camera-retro imageIcon"
  );
  const [imgDisplay, setImgDisplay] = React.useState("none");

  function handleChange(event) {
    setImgFile({
      file: URL.createObjectURL(event.target.files[0])
    });
    setIconClass("");
    setImgDisplay("inline");
  }
  return (
    <div>
      <div className="imageCaption">
        <input
          type="file"
          accept="image/*"
          name="image"
          id="file"
          onChange={handleChange}
          style={{ display: "none" }}
        />
        <label htmlFor="file" style={{ cursor: "pointer" }}>
          <i className={iconClass} />
          <img
            src={imgFile.file}
            style={{ width: "65px", height: "65px", display: imgDisplay }}
          />
        </label>

        <TextField
          className="postCaption"
          label="Write a caption..."
          variant="filled"
        />
      </div>
      <hr className="noMarginHR" />
    </div>
  );
}
