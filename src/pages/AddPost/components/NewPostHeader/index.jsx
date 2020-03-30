import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default function Header({ shareState,setShareState }) {
  return (
    <div>
      <div className="NewPostHeader">
        <Link to="/">
          <i className="fas fa-chevron-left newPostBackButton"></i>
        </Link>
        <h3 className="newPostTag">New Post</h3>
        <h3 className="newPostShareButton" onClick={()=>setShareState(!(shareState))}>Share</h3>
      </div>
      <hr className="noMarginHR" />
    </div>
  );
}
