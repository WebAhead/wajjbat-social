import React from 'react';
import './style.css';
const Header = () => (
  <div>
    <div className = "NewPostHeader">
      <i className="fas fa-chevron-left newPostBackButton"></i>
      <h3 className="newPostTag">New Post</h3>
      <h3 className="newPostShareButton">Share</h3>
    </div>
    <hr className="noMarginHR"/>
  </div>
);

export default Header;
