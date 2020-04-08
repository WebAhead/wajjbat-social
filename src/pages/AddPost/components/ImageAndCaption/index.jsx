import React from "react";
import "./style.css";
import TextField from "@material-ui/core/TextField";
import ImageInput from "../ImageInput";

export default function ImageAndCatpion({setPostTitle, setImgURL, setPostCaption}) {
  function handleCaptionChange(event) {
    setPostCaption(event.target.value);
  }
  function handleTitleChange(event) {
    setPostTitle(event.target.value);
  }
  return (
    <div>
    <div className="postTitleDiv">
      <TextField
          className="postTitle"
          label="Write a title..."
          variant="outlined"
          onChange={handleTitleChange}
        />
              <div></div>

      </div>
      <div className="imageAndCaption">
        <ImageInput height="150px" onChange={url => setImgURL(url)} />
        <TextField
          className="postCaption"
          label="Write a caption..."
          variant="filled"
          onChange={handleCaptionChange}
        />
      </div>
      <hr className="marginHR" />
    </div>
  );
}
