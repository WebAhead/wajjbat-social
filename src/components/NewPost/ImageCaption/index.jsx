import React from 'react';
import './style.css';
import TextField from '@material-ui/core/TextField';

const ImageCaption = () => (
  <div>
    <div className="imageCaption">
      <i className="fas fa-camera-retro imageIcon"></i>
      <form className="captionInput" noValidate autoComplete="off">
        <TextField id="filled-basic" label="Write a caption..." variant="filled" />
      </form>
    </div>
    <hr/>
  </div>
);

export default ImageCaption;
