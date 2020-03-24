import React from 'react';
import './style.css';
import TextField from '@material-ui/core/TextField';

const ImageCaption = () => (
  <div>
    <div className="imageCaption">
      <i className="fas fa-camera-retro imageIcon"></i>
      <TextField className="postCaption" label="Write a caption..." variant="filled" />
    </div>
    <hr className="noMarginHR"/>
  </div>
);

export default ImageCaption;
